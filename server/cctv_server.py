"""
EvidenceX — CCTV Detection Server
YOLOv8 + OpenCV powered video analysis API
"""

import os
import sys
import uuid
import json
import time
import threading
from pathlib import Path

from flask import Flask, request, jsonify, send_file
from flask_cors import CORS

# ── Config ──────────────────────────────────────────────
BASE_DIR = Path(__file__).parent.resolve()
UPLOAD_DIR = BASE_DIR / "cctv_uploads"
RESULTS_DIR = BASE_DIR / "cctv_results"
UPLOAD_DIR.mkdir(exist_ok=True)
RESULTS_DIR.mkdir(exist_ok=True)

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173", "http://127.0.0.1:5173"])

# In-memory job tracker
jobs = {}  # { video_id: { status, progress, total_frames, processed, results, ... } }

# ── Lazy-load YOLOv8 ────────────────────────────────────
_model = None

def get_model():
    global _model
    if _model is None:
        print("[CCTV] Loading YOLOv8n model (first time may download weights)...")
        from ultralytics import YOLO
        _model = YOLO("yolov8n.pt")  # nano model — fast + lightweight
        print("[CCTV] Model loaded successfully!")
    return _model


# ── Helpers ─────────────────────────────────────────────
def analyze_video_task(video_id, video_path, frame_skip=10, conf_threshold=0.35):
    """Background task: process video with YOLOv8"""
    import cv2
    import numpy as np

    try:
        model = get_model()
        cap = cv2.VideoCapture(str(video_path))

        if not cap.isOpened():
            jobs[video_id]["status"] = "error"
            jobs[video_id]["error"] = "Cannot open video file"
            return

        fps = cap.get(cv2.CAP_PROP_FPS) or 30
        total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
        height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))

        # Create results directory for this video
        result_dir = RESULTS_DIR / video_id
        result_dir.mkdir(exist_ok=True)
        frames_dir = result_dir / "frames"
        frames_dir.mkdir(exist_ok=True)

        jobs[video_id].update({
            "status": "analyzing",
            "progress": 0,
            "total_frames": total_frames,
            "processed_frames": 0,
            "fps": fps,
            "width": width,
            "height": height,
            "frame_skip": frame_skip,
            "analyzed_count": 0,
        })

        all_detections = []
        frame_results = []
        class_counts = {}
        frame_idx = 0
        analyzed_idx = 0

        while True:
            ret, frame = cap.read()
            if not ret:
                break

            if frame_idx % frame_skip == 0:
                # Run YOLOv8 detection
                results = model(frame, conf=conf_threshold, verbose=False)
                result = results[0]

                frame_detections = []
                for box in result.boxes:
                    cls_id = int(box.cls[0])
                    cls_name = model.names[cls_id]
                    confidence = float(box.conf[0])
                    x1, y1, x2, y2 = map(int, box.xyxy[0].tolist())

                    detection = {
                        "class": cls_name,
                        "confidence": round(confidence, 3),
                        "bbox": [x1, y1, x2, y2],
                        "frame_idx": frame_idx,
                        "timestamp": round(frame_idx / fps, 2),
                    }
                    frame_detections.append(detection)

                    # Count classes
                    class_counts[cls_name] = class_counts.get(cls_name, 0) + 1

                all_detections.extend(frame_detections)

                # Draw bounding boxes on frame
                annotated = result.plot()

                # Add frame info overlay
                cv2.putText(annotated, f"Frame {frame_idx} | {round(frame_idx/fps, 1)}s | {len(frame_detections)} detections",
                           (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)

                # Save annotated frame
                frame_filename = f"frame_{analyzed_idx:04d}.jpg"
                cv2.imwrite(str(frames_dir / frame_filename), annotated)

                frame_results.append({
                    "frame_idx": frame_idx,
                    "timestamp": round(frame_idx / fps, 2),
                    "detections": frame_detections,
                    "image": frame_filename,
                    "detection_count": len(frame_detections),
                })

                analyzed_idx += 1

            frame_idx += 1

            # Update progress
            progress = min(round((frame_idx / total_frames) * 100, 1), 100)
            jobs[video_id]["progress"] = progress
            jobs[video_id]["processed_frames"] = frame_idx
            jobs[video_id]["analyzed_count"] = analyzed_idx

        cap.release()

        # Sort class counts
        sorted_classes = sorted(class_counts.items(), key=lambda x: x[1], reverse=True)

        # Build summary
        summary = {
            "total_frames": total_frames,
            "analyzed_frames": analyzed_idx,
            "frame_skip": frame_skip,
            "fps": fps,
            "duration": round(total_frames / fps, 2),
            "resolution": f"{width}x{height}",
            "total_detections": len(all_detections),
            "unique_classes": len(class_counts),
            "class_counts": dict(sorted_classes),
            "persons_detected": class_counts.get("person", 0),
            "vehicles_detected": sum(class_counts.get(v, 0) for v in ["car", "truck", "bus", "motorcycle", "bicycle"]),
        }

        # Save results JSON
        results_data = {
            "video_id": video_id,
            "summary": summary,
            "frames": frame_results,
            "detections": all_detections,
        }
        with open(result_dir / "results.json", "w") as f:
            json.dump(results_data, f)

        jobs[video_id].update({
            "status": "completed",
            "progress": 100,
            "summary": summary,
            "frame_count": analyzed_idx,
        })

        print(f"[CCTV] Analysis complete: {video_id} — {len(all_detections)} detections in {analyzed_idx} frames")

    except Exception as e:
        print(f"[CCTV] Error analyzing {video_id}: {e}")
        jobs[video_id]["status"] = "error"
        jobs[video_id]["error"] = str(e)


# ── API Endpoints ───────────────────────────────────────

@app.route("/api/cctv/upload", methods=["POST"])
def upload_video():
    """Upload a video file for CCTV analysis"""
    if "video" not in request.files:
        return jsonify({"error": "No video file provided"}), 400

    file = request.files["video"]
    if not file.filename:
        return jsonify({"error": "Empty filename"}), 400

    # Validate extension
    ext = file.filename.rsplit(".", 1)[-1].lower() if "." in file.filename else ""
    if ext not in ("mp4", "avi", "mov", "mkv", "webm"):
        return jsonify({"error": f"Unsupported format: .{ext}"}), 400

    video_id = str(uuid.uuid4())[:12]
    safe_name = f"{video_id}.{ext}"
    video_path = UPLOAD_DIR / safe_name
    file.save(str(video_path))

    file_size = os.path.getsize(str(video_path))

    jobs[video_id] = {
        "status": "uploaded",
        "progress": 0,
        "filename": file.filename,
        "video_path": str(video_path),
        "file_size": file_size,
        "uploaded_at": time.strftime("%Y-%m-%d %H:%M:%S"),
    }

    return jsonify({
        "video_id": video_id,
        "filename": file.filename,
        "size": file_size,
        "message": "Video uploaded successfully",
    })


@app.route("/api/cctv/analyze/<video_id>", methods=["POST"])
def start_analysis(video_id):
    """Start YOLOv8 analysis on an uploaded video"""
    if video_id not in jobs:
        return jsonify({"error": "Video not found"}), 404

    job = jobs[video_id]
    if job["status"] == "analyzing":
        return jsonify({"error": "Analysis already in progress"}), 400

    # Get parameters
    data = request.get_json(silent=True) or {}
    frame_skip = int(data.get("frame_skip", 10))
    conf_threshold = float(data.get("confidence", 0.35))

    video_path = Path(job["video_path"])

    # Start analysis in background
    thread = threading.Thread(
        target=analyze_video_task,
        args=(video_id, video_path, frame_skip, conf_threshold),
        daemon=True,
    )
    thread.start()

    return jsonify({"message": "Analysis started", "video_id": video_id})


@app.route("/api/cctv/status/<video_id>", methods=["GET"])
def get_status(video_id):
    """Get analysis progress/status"""
    if video_id not in jobs:
        return jsonify({"error": "Video not found"}), 404

    job = jobs[video_id]
    return jsonify({
        "video_id": video_id,
        "status": job.get("status"),
        "progress": job.get("progress", 0),
        "total_frames": job.get("total_frames", 0),
        "processed_frames": job.get("processed_frames", 0),
        "analyzed_count": job.get("analyzed_count", 0),
        "error": job.get("error"),
    })


@app.route("/api/cctv/results/<video_id>", methods=["GET"])
def get_results(video_id):
    """Get full detection results"""
    if video_id not in jobs:
        return jsonify({"error": "Video not found"}), 404

    job = jobs[video_id]
    if job["status"] != "completed":
        return jsonify({"error": "Analysis not complete", "status": job["status"]}), 400

    result_file = RESULTS_DIR / video_id / "results.json"
    if not result_file.exists():
        return jsonify({"error": "Results file not found"}), 404

    with open(result_file) as f:
        results = json.load(f)

    return jsonify(results)


@app.route("/api/cctv/frames/<video_id>/<filename>", methods=["GET"])
def get_frame(video_id, filename):
    """Serve an annotated frame image"""
    frame_path = RESULTS_DIR / video_id / "frames" / filename
    if not frame_path.exists():
        return jsonify({"error": "Frame not found"}), 404
    return send_file(str(frame_path), mimetype="image/jpeg")


@app.route("/api/cctv/videos", methods=["GET"])
def list_videos():
    """List all uploaded/analyzed videos"""
    video_list = []
    for vid, job in jobs.items():
        video_list.append({
            "video_id": vid,
            "filename": job.get("filename", "unknown"),
            "status": job.get("status"),
            "progress": job.get("progress", 0),
            "uploaded_at": job.get("uploaded_at"),
            "summary": job.get("summary"),
        })
    return jsonify(video_list)


@app.route("/api/cctv/health", methods=["GET"])
def health():
    return jsonify({"status": "ok", "service": "EvidenceX CCTV Detection Server"})


# ── Main ────────────────────────────────────────────────
if __name__ == "__main__":
    print("=" * 60)
    print("  EvidenceX CCTV Detection Server")
    print("  YOLOv8 + OpenCV Video Analysis")
    print("  Running on http://localhost:3000")
    print("=" * 60)
    app.run(host="0.0.0.0", port=3000, debug=False)
