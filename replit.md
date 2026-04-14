# EvidenceX

A React + Vite forensic evidence management platform with AI-powered analysis, CCTV detection, and case management features.

## Architecture

- **Frontend**: React 19 + Vite (port 5000) — served via Vite dev server
- **Backend API**: Node.js + Express (port 3001) — handles auth, evidence, analysis, suspects, CDR
- **CCTV Server**: Python + Flask (port 3000) — YOLOv8 video analysis via OpenCV

## Workflows

- `Start application` — Vite frontend dev server on port 5000 (webview)
- `Backend API` — Node.js Express API on port 3001
- `CCTV Server` — Python Flask + YOLOv8 on port 3000

## Routing

Vite proxies all API calls:
- `/api/cctv/*` → `http://localhost:3000`
- `/api/*` → `http://localhost:3001`

The frontend uses relative `/api` paths — no hardcoded URLs.

## Key Files

- `vite.config.js` — Vite config with proxy and port settings
- `src/services/api.js` — Frontend API service (uses relative `/api` base)
- `server/index.js` — Express backend (auth, evidence, analysis)
- `server/cctv_server.py` — Flask CCTV detection server
- `server/data/` — JSON flat-file storage for users, evidence, analysis, suspects, CDR
- `uploads/` — Uploaded evidence files

## Default Credentials

- Admin: `admin@evidencex.com` / `admin123`
- Officer: `officer@evidencex.com` / `officer123`
- Demo: `demo@evidencex.com` / `demo`

## Dependencies

Frontend: chart.js, d3, leaflet, lucide-react, react-chartjs-2, react-leaflet, react-router-dom
Backend: express, cors, multer, jsonwebtoken, bcryptjs, uuid
CCTV: flask, flask-cors, ultralytics, opencv-python-headless, numpy
