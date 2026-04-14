import { useState, useRef, useEffect, useCallback } from 'react';
import {
  Camera, Upload, Play, Pause, BarChart3, Users, Car, Package,
  AlertTriangle, CheckCircle, Loader2, X, ChevronLeft, ChevronRight,
  RefreshCw, Settings, Zap, Eye, Clock, Target, Shield, Maximize2
} from 'lucide-react';

const API = '/api/cctv';

// Detection class color mapping
const CLASS_COLORS = {
  person: '#3b82f6',
  car: '#10b981',
  truck: '#f59e0b',
  bus: '#8b5cf6',
  motorcycle: '#ef4444',
  bicycle: '#06b6d4',
  dog: '#ec4899',
  cat: '#14b8a6',
  default: '#6366f1',
};

function getClassColor(cls) {
  return CLASS_COLORS[cls] || CLASS_COLORS.default;
}

export default function CCTVAnalysis() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisStatus, setAnalysisStatus] = useState(null);
  const [results, setResults] = useState(null);
  const [selectedFrame, setSelectedFrame] = useState(0);
  const [viewingFrame, setViewingFrame] = useState(null);
  const [error, setError] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [settings, setSettings] = useState({ frameSkip: 10, confidence: 0.35 });
  const [showSettings, setShowSettings] = useState(false);
  const [serverOnline, setServerOnline] = useState(null);
  const fileInput = useRef(null);
  const pollRef = useRef(null);

  // Check server health
  useEffect(() => {
    fetch(`${API}/health`)
      .then(r => r.json())
      .then(() => setServerOnline(true))
      .catch(() => setServerOnline(false));
  }, []);

  // Cleanup
  useEffect(() => {
    return () => {
      if (pollRef.current) clearInterval(pollRef.current);
      if (videoPreview) URL.revokeObjectURL(videoPreview);
    };
  }, [videoPreview]);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) selectFile(file);
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) selectFile(file);
    e.target.value = '';
  };

  const selectFile = (file) => {
    const ext = file.name.split('.').pop().toLowerCase();
    if (!['mp4', 'avi', 'mov', 'mkv', 'webm'].includes(ext)) {
      setError('Unsupported format. Use MP4, AVI, MOV, MKV, or WebM.');
      return;
    }
    setVideoFile(file);
    setVideoPreview(URL.createObjectURL(file));
    setResults(null);
    setVideoId(null);
    setError(null);
    setAnalysisStatus(null);
  };

  const uploadAndAnalyze = async () => {
    if (!videoFile) return;
    setError(null);

    // Step 1: Upload
    setUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      formData.append('video', videoFile);

      const xhr = new XMLHttpRequest();
      const uploadPromise = new Promise((resolve, reject) => {
        xhr.upload.onprogress = (e) => {
          if (e.lengthComputable) setUploadProgress(Math.round((e.loaded / e.total) * 100));
        };
        xhr.onload = () => {
          if (xhr.status === 200) resolve(JSON.parse(xhr.responseText));
          else reject(new Error(JSON.parse(xhr.responseText)?.error || 'Upload failed'));
        };
        xhr.onerror = () => reject(new Error('Connection failed — is the Python server running?'));
        xhr.open('POST', `${API}/upload`);
        xhr.send(formData);
      });

      const uploadResult = await uploadPromise;
      setVideoId(uploadResult.video_id);
      setUploading(false);
      setUploadProgress(100);

      // Step 2: Start analysis
      setAnalyzing(true);
      setAnalysisProgress(0);
      setAnalysisStatus('Starting YOLOv8 detection...');

      const analyzeRes = await fetch(`${API}/analyze/${uploadResult.video_id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ frame_skip: settings.frameSkip, confidence: settings.confidence }),
      });

      if (!analyzeRes.ok) {
        const err = await analyzeRes.json();
        throw new Error(err.error || 'Analysis failed to start');
      }

      // Step 3: Poll progress
      pollRef.current = setInterval(async () => {
        try {
          const statusRes = await fetch(`${API}/status/${uploadResult.video_id}`);
          const status = await statusRes.json();

          setAnalysisProgress(status.progress || 0);
          setAnalysisStatus(
            status.status === 'analyzing'
              ? `Analyzing frame ${status.processed_frames}/${status.total_frames} (${status.analyzed_count} analyzed)`
              : status.status === 'completed'
              ? 'Detection complete!'
              : status.status
          );

          if (status.status === 'completed') {
            clearInterval(pollRef.current);
            pollRef.current = null;

            // Fetch full results
            const resultsRes = await fetch(`${API}/results/${uploadResult.video_id}`);
            const resultsData = await resultsRes.json();
            setResults(resultsData);
            setAnalyzing(false);
            setAnalysisProgress(100);
          } else if (status.status === 'error') {
            clearInterval(pollRef.current);
            pollRef.current = null;
            throw new Error(status.error || 'Analysis failed');
          }
        } catch (e) {
          clearInterval(pollRef.current);
          pollRef.current = null;
          setError(e.message);
          setAnalyzing(false);
        }
      }, 1000);
    } catch (e) {
      setError(e.message);
      setUploading(false);
      setAnalyzing(false);
    }
  };

  const resetAnalysis = () => {
    if (pollRef.current) clearInterval(pollRef.current);
    if (videoPreview) URL.revokeObjectURL(videoPreview);
    setVideoFile(null);
    setVideoPreview(null);
    setVideoId(null);
    setResults(null);
    setError(null);
    setAnalyzing(false);
    setUploading(false);
    setAnalysisStatus(null);
    setSelectedFrame(0);
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className="cctv-header-icon"><Camera size={24} /></div>
          <div>
            <h1>CCTV Detection</h1>
            <p>Upload surveillance footage for AI-powered object detection using YOLOv8 + OpenCV</p>
          </div>
        </div>
        <div className="cctv-header-actions">
          <div className={`server-badge ${serverOnline === true ? 'online' : serverOnline === false ? 'offline' : 'checking'}`}>
            <span className="server-dot" />
            {serverOnline === true ? 'AI Server Online' : serverOnline === false ? 'Server Offline' : 'Checking...'}
          </div>
        </div>
      </div>

      {/* Server Offline Warning */}
      {serverOnline === false && (
        <div className="cctv-alert animate-fade-in">
          <AlertTriangle size={20} />
          <div>
            <strong>Python Detection Server is not running</strong>
            <p>Start it with: <code>cd server && pip install -r requirements.txt && python cctv_server.py</code></p>
          </div>
        </div>
      )}

      {error && (
        <div className="cctv-alert error animate-fade-in">
          <AlertTriangle size={20} />
          <div><strong>Error</strong><p>{error}</p></div>
          <button className="cctv-alert-close" onClick={() => setError(null)}><X size={16} /></button>
        </div>
      )}

      {/* Upload / Analysis Area */}
      {!results ? (
        <div className="cctv-upload-area animate-fade-in-up">
          {!videoFile ? (
            <div
              className={`cctv-dropzone ${dragOver ? 'active' : ''}`}
              onDragOver={e => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileInput.current?.click()}
            >
              <input ref={fileInput} type="file" accept=".mp4,.avi,.mov,.mkv,.webm" onChange={handleFileSelect} style={{ display: 'none' }} />
              <div className="cctv-drop-icon"><Camera size={48} /></div>
              <h3>Drop CCTV footage here</h3>
              <p>or click to browse • MP4, AVI, MOV, MKV, WebM</p>
              <div className="cctv-drop-features">
                <span><Target size={14} /> YOLOv8 Detection</span>
                <span><Users size={14} /> Person Tracking</span>
                <span><Car size={14} /> Vehicle Detection</span>
                <span><Shield size={14} /> 80+ Object Classes</span>
              </div>
            </div>
          ) : (
            <div className="cctv-preview-panel">
              <div className="cctv-video-preview">
                <video src={videoPreview} controls className="cctv-video" />
              </div>
              <div className="cctv-preview-info">
                <h3>{videoFile.name}</h3>
                <p className="text-muted">{formatSize(videoFile.size)}</p>

                {/* Settings */}
                <button className="cctv-settings-btn" onClick={() => setShowSettings(!showSettings)}>
                  <Settings size={14} /> Analysis Settings
                </button>
                {showSettings && (
                  <div className="cctv-settings">
                    <label>
                      Frame Skip (analyze every Nth frame)
                      <input type="number" min={1} max={60} value={settings.frameSkip}
                        onChange={e => setSettings(s => ({ ...s, frameSkip: parseInt(e.target.value) || 10 }))} />
                    </label>
                    <label>
                      Confidence Threshold
                      <input type="number" step={0.05} min={0.1} max={0.95} value={settings.confidence}
                        onChange={e => setSettings(s => ({ ...s, confidence: parseFloat(e.target.value) || 0.35 }))} />
                    </label>
                  </div>
                )}

                {/* Upload/Analyze Progress */}
                {uploading && (
                  <div className="cctv-progress">
                    <div className="cctv-progress-label"><Upload size={14} /> Uploading video...</div>
                    <div className="cctv-progress-bar"><div className="cctv-progress-fill upload" style={{ width: `${uploadProgress}%` }} /></div>
                    <span className="cctv-progress-pct">{uploadProgress}%</span>
                  </div>
                )}

                {analyzing && (
                  <div className="cctv-progress">
                    <div className="cctv-progress-label"><Loader2 size={14} className="spin" /> {analysisStatus}</div>
                    <div className="cctv-progress-bar"><div className="cctv-progress-fill analyze" style={{ width: `${analysisProgress}%` }} /></div>
                    <span className="cctv-progress-pct">{Math.round(analysisProgress)}%</span>
                  </div>
                )}

                <div className="cctv-preview-actions">
                  <button className="btn btn-primary" onClick={uploadAndAnalyze}
                    disabled={uploading || analyzing || !serverOnline}>
                    {uploading ? <><Loader2 size={16} className="spin" /> Uploading...</>
                      : analyzing ? <><Loader2 size={16} className="spin" /> Analyzing...</>
                      : <><Zap size={16} /> Run YOLOv8 Detection</>}
                  </button>
                  <button className="btn btn-secondary" onClick={resetAnalysis} disabled={uploading || analyzing}>
                    <RefreshCw size={14} /> Change Video
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* ── Results Dashboard ── */
        <div className="cctv-results animate-fade-in-up">
          {/* Summary Cards */}
          <div className="cctv-summary">
            <div className="cctv-summary-card total">
              <Target size={22} />
              <div className="cctv-summary-value">{results.summary.total_detections}</div>
              <div className="cctv-summary-label">Total Detections</div>
            </div>
            <div className="cctv-summary-card persons">
              <Users size={22} />
              <div className="cctv-summary-value">{results.summary.persons_detected}</div>
              <div className="cctv-summary-label">Persons Detected</div>
            </div>
            <div className="cctv-summary-card vehicles">
              <Car size={22} />
              <div className="cctv-summary-value">{results.summary.vehicles_detected}</div>
              <div className="cctv-summary-label">Vehicles Detected</div>
            </div>
            <div className="cctv-summary-card classes">
              <Package size={22} />
              <div className="cctv-summary-value">{results.summary.unique_classes}</div>
              <div className="cctv-summary-label">Object Classes</div>
            </div>
            <div className="cctv-summary-card frames">
              <BarChart3 size={22} />
              <div className="cctv-summary-value">{results.summary.analyzed_frames}</div>
              <div className="cctv-summary-label">Frames Analyzed</div>
            </div>
            <div className="cctv-summary-card duration">
              <Clock size={22} />
              <div className="cctv-summary-value">{results.summary.duration}s</div>
              <div className="cctv-summary-label">Video Duration</div>
            </div>
          </div>

          {/* Class Distribution */}
          <div className="cctv-section">
            <h2><BarChart3 size={18} /> Detection Distribution</h2>
            <div className="cctv-class-grid">
              {Object.entries(results.summary.class_counts).map(([cls, count]) => (
                <div key={cls} className="cctv-class-bar">
                  <div className="cctv-class-name">
                    <span className="cctv-class-dot" style={{ background: getClassColor(cls) }} />
                    {cls}
                  </div>
                  <div className="cctv-class-track">
                    <div className="cctv-class-fill" style={{
                      width: `${(count / Math.max(...Object.values(results.summary.class_counts))) * 100}%`,
                      background: getClassColor(cls),
                    }} />
                  </div>
                  <span className="cctv-class-count">{count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Frame Gallery */}
          {results.frames && results.frames.length > 0 && (
            <div className="cctv-section">
              <h2><Camera size={18} /> Annotated Frames ({results.frames.length})</h2>
              <div className="cctv-frame-viewer">
                <div className="cctv-frame-main" onClick={() => setViewingFrame(results.frames[selectedFrame])}>
                  <img
                    src={`${API}/frames/${results.video_id}/${results.frames[selectedFrame]?.image}`}
                    alt={`Frame ${selectedFrame}`}
                    className="cctv-frame-img"
                  />
                  <div className="cctv-frame-overlay">
                    <Maximize2 size={24} />
                  </div>
                  <div className="cctv-frame-info">
                    <span>Frame {results.frames[selectedFrame]?.frame_idx} • {results.frames[selectedFrame]?.timestamp}s</span>
                    <span>{results.frames[selectedFrame]?.detection_count} detections</span>
                  </div>
                </div>

                <div className="cctv-frame-nav">
                  <button onClick={() => setSelectedFrame(Math.max(0, selectedFrame - 1))} disabled={selectedFrame === 0}>
                    <ChevronLeft size={18} />
                  </button>
                  <span className="text-sm">{selectedFrame + 1} / {results.frames.length}</span>
                  <button onClick={() => setSelectedFrame(Math.min(results.frames.length - 1, selectedFrame + 1))}
                    disabled={selectedFrame === results.frames.length - 1}>
                    <ChevronRight size={18} />
                  </button>
                </div>

                <div className="cctv-frame-strip">
                  {results.frames.map((frame, idx) => (
                    <div
                      key={idx}
                      className={`cctv-frame-thumb ${idx === selectedFrame ? 'active' : ''}`}
                      onClick={() => setSelectedFrame(idx)}
                    >
                      <img src={`${API}/frames/${results.video_id}/${frame.image}`} alt="" />
                      {frame.detection_count > 0 && (
                        <span className="cctv-thumb-count">{frame.detection_count}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Detection Timeline */}
          <div className="cctv-section">
            <h2><Clock size={18} /> Detection Timeline</h2>
            <div className="cctv-timeline">
              {results.frames.map((frame, idx) => (
                <div key={idx} className="cctv-timeline-bar"
                  style={{ height: `${Math.max(4, (frame.detection_count / Math.max(...results.frames.map(f => f.detection_count))) * 60)}px` }}
                  onClick={() => setSelectedFrame(idx)}
                  title={`${frame.timestamp}s — ${frame.detection_count} detections`}
                >
                  <div className="cctv-timeline-fill" style={{
                    background: frame.detection_count > 3 ? 'var(--accent-danger)' : frame.detection_count > 0 ? 'var(--accent-primary)' : 'var(--bg-elevated)',
                  }} />
                </div>
              ))}
            </div>
            <div className="cctv-timeline-labels">
              <span>0s</span>
              <span>{results.summary.duration}s</span>
            </div>
          </div>

          {/* New Analysis Button */}
          <div className="cctv-new-analysis">
            <button className="btn btn-primary" onClick={resetAnalysis}>
              <RefreshCw size={16} /> Analyze New Video
            </button>
          </div>
        </div>
      )}

      {/* Full Frame Modal */}
      {viewingFrame && (
        <div className="cctv-modal-overlay" onClick={() => setViewingFrame(null)}>
          <div className="cctv-modal" onClick={e => e.stopPropagation()}>
            <div className="cctv-modal-header">
              <h3>Frame {viewingFrame.frame_idx} — {viewingFrame.timestamp}s</h3>
              <button onClick={() => setViewingFrame(null)}><X size={20} /></button>
            </div>
            <img src={`${API}/frames/${results.video_id}/${viewingFrame.image}`} className="cctv-modal-img" alt="" />
            <div className="cctv-modal-detections">
              {viewingFrame.detections.map((d, i) => (
                <span key={i} className="cctv-detection-tag" style={{ borderColor: getClassColor(d.class) }}>
                  <span className="cctv-class-dot" style={{ background: getClassColor(d.class) }} />
                  {d.class} ({Math.round(d.confidence * 100)}%)
                </span>
              ))}
              {viewingFrame.detections.length === 0 && <span className="text-muted">No detections in this frame</span>}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .cctv-header-icon {
          width: 48px; height: 48px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-radius: var(--radius-md);
          display: flex; align-items: center; justify-content: center;
          color: white; flex-shrink: 0;
        }
        .cctv-header-actions { display: flex; gap: 8px; margin-left: auto; }
        .server-badge {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 14px; border-radius: var(--radius-full);
          font-size: 0.75rem; font-weight: 600;
          border: 1px solid var(--border-primary);
        }
        .server-dot {
          width: 8px; height: 8px; border-radius: 50%;
        }
        .server-badge.online { color: var(--accent-success); }
        .server-badge.online .server-dot { background: var(--accent-success); box-shadow: 0 0 8px var(--accent-success); }
        .server-badge.offline { color: var(--accent-danger); }
        .server-badge.offline .server-dot { background: var(--accent-danger); }
        .server-badge.checking { color: var(--text-tertiary); }
        .server-badge.checking .server-dot { background: var(--text-tertiary); animation: pulse 1.5s infinite; }

        .cctv-alert {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 14px 18px; border-radius: var(--radius-md);
          background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245,158,11,0.3);
          color: var(--accent-warning); margin-bottom: 20px; position: relative;
        }
        .cctv-alert strong { display: block; margin-bottom: 2px; }
        .cctv-alert p { font-size: 0.8rem; color: var(--text-secondary); margin: 0; }
        .cctv-alert code {
          background: var(--bg-tertiary); padding: 2px 8px; border-radius: var(--radius-sm);
          font-size: 0.75rem; font-family: var(--font-mono);
        }
        .cctv-alert.error { background: rgba(239,68,68,0.1); border-color: rgba(239,68,68,0.3); color: var(--accent-danger); }
        .cctv-alert-close {
          position: absolute; top: 10px; right: 10px;
          background: none; border: none; color: var(--text-tertiary); cursor: pointer;
        }

        /* Dropzone */
        .cctv-dropzone {
          border: 2px dashed var(--border-secondary);
          border-radius: var(--radius-xl); padding: 64px 32px;
          text-align: center; cursor: pointer;
          transition: all var(--transition-base);
          background: var(--bg-card);
        }
        .cctv-dropzone:hover, .cctv-dropzone.active {
          border-color: var(--accent-primary);
          box-shadow: 0 0 40px rgba(59,130,246,0.08);
          background: rgba(59,130,246,0.02);
        }
        .cctv-drop-icon {
          width: 88px; height: 88px; margin: 0 auto 20px;
          background: linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.15));
          border-radius: var(--radius-xl);
          display: flex; align-items: center; justify-content: center;
          color: var(--accent-primary);
        }
        .cctv-dropzone h3 { font-size: 1.2rem; font-weight: 700; margin-bottom: 8px; }
        .cctv-dropzone > p { color: var(--text-tertiary); font-size: 0.9rem; }
        .cctv-drop-features {
          display: flex; justify-content: center; gap: 16px; margin-top: 20px; flex-wrap: wrap;
        }
        .cctv-drop-features span {
          display: flex; align-items: center; gap: 5px;
          padding: 5px 14px; background: var(--bg-tertiary);
          border-radius: var(--radius-full); font-size: 0.75rem;
          font-weight: 600; color: var(--text-secondary);
        }

        /* Preview */
        .cctv-preview-panel {
          display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px;
          background: var(--bg-card); border: 1px solid var(--border-primary);
          border-radius: var(--radius-xl); padding: 24px; overflow: hidden;
        }
        .cctv-video { width: 100%; border-radius: var(--radius-md); background: #000; }
        .cctv-preview-info { display: flex; flex-direction: column; gap: 12px; }
        .cctv-preview-info h3 { font-size: 1rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .cctv-settings-btn {
          display: flex; align-items: center; gap: 6px;
          background: var(--bg-tertiary); border: 1px solid var(--border-primary);
          border-radius: var(--radius-sm); padding: 6px 12px;
          color: var(--text-secondary); font-size: 0.8rem; cursor: pointer; width: fit-content;
        }
        .cctv-settings-btn:hover { border-color: var(--accent-primary); color: var(--accent-primary); }
        .cctv-settings {
          display: flex; flex-direction: column; gap: 10px;
          padding: 12px; background: var(--bg-tertiary); border-radius: var(--radius-md);
        }
        .cctv-settings label {
          font-size: 0.75rem; color: var(--text-secondary);
          display: flex; flex-direction: column; gap: 4px;
        }
        .cctv-settings input {
          padding: 6px 10px; background: var(--bg-input); border: 1px solid var(--border-primary);
          border-radius: var(--radius-sm); color: var(--text-primary); font-size: 0.85rem;
        }

        /* Progress */
        .cctv-progress { display: flex; flex-direction: column; gap: 6px; }
        .cctv-progress-label {
          display: flex; align-items: center; gap: 6px;
          font-size: 0.8rem; color: var(--text-secondary);
        }
        .cctv-progress-bar {
          height: 6px; background: var(--bg-tertiary); border-radius: var(--radius-full); overflow: hidden;
        }
        .cctv-progress-fill {
          height: 100%; border-radius: var(--radius-full); transition: width 0.5s ease;
        }
        .cctv-progress-fill.upload { background: var(--accent-primary); }
        .cctv-progress-fill.analyze { background: linear-gradient(90deg, var(--accent-warning), var(--accent-success)); }
        .cctv-progress-pct { font-size: 0.7rem; font-weight: 700; font-family: var(--font-mono); color: var(--text-tertiary); }

        .cctv-preview-actions { display: flex; gap: 10px; margin-top: auto; flex-wrap: wrap; }
        .spin { animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Summary Cards */
        .cctv-summary {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 14px; margin-bottom: 24px;
        }
        .cctv-summary-card {
          background: var(--bg-card); border: 1px solid var(--border-primary);
          border-radius: var(--radius-md); padding: 18px;
          display: flex; flex-direction: column; align-items: center; gap: 4px;
          transition: all var(--transition-fast);
        }
        .cctv-summary-card:hover { border-color: var(--accent-primary); transform: translateY(-2px); }
        .cctv-summary-value { font-size: 1.6rem; font-weight: 800; font-family: var(--font-mono); }
        .cctv-summary-label { font-size: 0.7rem; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; }
        .cctv-summary-card.total { color: var(--accent-primary); }
        .cctv-summary-card.persons { color: #3b82f6; }
        .cctv-summary-card.vehicles { color: #10b981; }
        .cctv-summary-card.classes { color: #8b5cf6; }
        .cctv-summary-card.frames { color: var(--accent-warning); }
        .cctv-summary-card.duration { color: var(--accent-secondary); }

        /* Sections */
        .cctv-section {
          background: var(--bg-card); border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg); padding: 20px; margin-bottom: 20px;
        }
        .cctv-section h2 {
          display: flex; align-items: center; gap: 8px;
          font-size: 0.95rem; font-weight: 700; margin-bottom: 16px;
        }

        /* Class Distribution */
        .cctv-class-grid { display: flex; flex-direction: column; gap: 8px; }
        .cctv-class-bar { display: flex; align-items: center; gap: 10px; }
        .cctv-class-name {
          display: flex; align-items: center; gap: 6px;
          min-width: 100px; font-size: 0.8rem; font-weight: 600;
          text-transform: capitalize;
        }
        .cctv-class-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
        .cctv-class-track {
          flex: 1; height: 8px; background: var(--bg-tertiary); border-radius: var(--radius-full); overflow: hidden;
        }
        .cctv-class-fill { height: 100%; border-radius: var(--radius-full); transition: width 0.5s ease; }
        .cctv-class-count { font-size: 0.8rem; font-weight: 700; font-family: var(--font-mono); min-width: 30px; text-align: right; }

        /* Frame Viewer */
        .cctv-frame-main {
          position: relative; border-radius: var(--radius-md); overflow: hidden; cursor: pointer;
          background: #000;
        }
        .cctv-frame-img { width: 100%; display: block; }
        .cctv-frame-overlay {
          position: absolute; inset: 0; background: rgba(0,0,0,0.3);
          display: flex; align-items: center; justify-content: center;
          color: white; opacity: 0; transition: opacity var(--transition-fast);
        }
        .cctv-frame-main:hover .cctv-frame-overlay { opacity: 1; }
        .cctv-frame-info {
          position: absolute; bottom: 0; left: 0; right: 0;
          display: flex; justify-content: space-between;
          padding: 8px 12px; background: linear-gradient(transparent, rgba(0,0,0,0.8));
          color: white; font-size: 0.75rem;
        }
        .cctv-frame-nav {
          display: flex; align-items: center; justify-content: center; gap: 16px; padding: 10px 0;
        }
        .cctv-frame-nav button {
          width: 32px; height: 32px;
          background: var(--bg-tertiary); border: 1px solid var(--border-primary);
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          color: var(--text-secondary); cursor: pointer;
        }
        .cctv-frame-nav button:hover:not(:disabled) { background: var(--accent-primary); color: white; }
        .cctv-frame-nav button:disabled { opacity: 0.3; cursor: default; }

        .cctv-frame-strip {
          display: flex; gap: 6px; overflow-x: auto; padding: 4px 0;
        }
        .cctv-frame-thumb {
          width: 72px; height: 48px; border-radius: var(--radius-sm); overflow: hidden;
          cursor: pointer; border: 2px solid transparent; flex-shrink: 0; position: relative;
          transition: all var(--transition-fast);
        }
        .cctv-frame-thumb.active { border-color: var(--accent-primary); }
        .cctv-frame-thumb:hover { border-color: var(--accent-secondary); }
        .cctv-frame-thumb img { width: 100%; height: 100%; object-fit: cover; }
        .cctv-thumb-count {
          position: absolute; top: 2px; right: 2px;
          background: var(--accent-danger); color: white;
          font-size: 0.55rem; font-weight: 700; padding: 1px 4px;
          border-radius: var(--radius-full);
        }

        /* Timeline */
        .cctv-timeline {
          display: flex; gap: 2px; align-items: flex-end; height: 60px; padding: 4px 0;
        }
        .cctv-timeline-bar {
          flex: 1; cursor: pointer; border-radius: 2px 2px 0 0; overflow: hidden; min-width: 3px;
          transition: all var(--transition-fast);
        }
        .cctv-timeline-bar:hover { opacity: 0.8; transform: scaleY(1.15); }
        .cctv-timeline-fill { width: 100%; height: 100%; border-radius: 2px 2px 0 0; }
        .cctv-timeline-labels {
          display: flex; justify-content: space-between;
          font-size: 0.65rem; color: var(--text-tertiary);
        }

        .cctv-new-analysis { display: flex; justify-content: center; padding: 12px 0; }

        /* Modal */
        .cctv-modal-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.88); z-index: 1000;
          display: flex; align-items: center; justify-content: center;
          padding: 24px; animation: fadeIn 0.2s ease-out; backdrop-filter: blur(8px);
        }
        .cctv-modal {
          background: var(--bg-card); border: 1px solid var(--border-secondary);
          border-radius: var(--radius-xl); max-width: 960px; width: 100%; max-height: 90vh;
          overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .cctv-modal-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 20px; border-bottom: 1px solid var(--border-primary);
        }
        .cctv-modal-header h3 { font-size: 0.9rem; }
        .cctv-modal-header button {
          background: var(--bg-tertiary); border: 1px solid var(--border-primary);
          color: var(--text-secondary); width: 32px; height: 32px;
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          cursor: pointer;
        }
        .cctv-modal-header button:hover { background: var(--accent-danger); color: white; }
        .cctv-modal-img { width: 100%; display: block; }
        .cctv-modal-detections {
          display: flex; flex-wrap: wrap; gap: 6px; padding: 14px 20px;
        }
        .cctv-detection-tag {
          display: flex; align-items: center; gap: 4px;
          padding: 4px 10px; border: 1px solid; border-radius: var(--radius-full);
          font-size: 0.72rem; font-weight: 600;
        }

        @media (max-width: 768px) {
          .cctv-preview-panel { grid-template-columns: 1fr; }
          .cctv-summary { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  );
}
