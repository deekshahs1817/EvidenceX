import { useState, useRef } from 'react';
import { useData } from '../context/DataContext';
import {
  Upload, FileVideo, FileImage, FileText, File, X, CheckCircle,
  Clock, AlertCircle, Trash2, Eye, Search, Filter, Play, Maximize2,
  Volume2, VolumeX, Download, Zap, Loader2
} from 'lucide-react';

const fileTypeIcons = {
  video: FileVideo,
  image: FileImage,
  pdf: FileText,
  text: File,
};

const fileTypeColors = {
  video: 'var(--accent-primary)',
  image: 'var(--accent-secondary)',
  pdf: 'var(--accent-warning)',
  text: 'var(--accent-success)',
};

function getFileType(name) {
  const ext = name.split('.').pop().toLowerCase();
  if (['mp4', 'avi', 'mov', 'mkv', 'webm'].includes(ext)) return 'video';
  if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) return 'image';
  if (['pdf'].includes(ext)) return 'pdf';
  return 'text';
}

export default function EvidenceUpload() {
  const { evidenceFiles: contextFiles } = useData();
  const [files, setFiles] = useState([]);
  const [initialized, setInitialized] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [uploading, setUploading] = useState([]);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [viewingFile, setViewingFile] = useState(null);
  const [analyzing, setAnalyzing] = useState({});
  const fileInput = useRef(null);

  // Sync from context when context data changes
  if (!initialized && contextFiles.length > 0) {
    setFiles(contextFiles);
    setInitialized(true);
  } else if (!initialized && contextFiles.length === 0) {
    setInitialized(true);
  }

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = Array.from(e.dataTransfer.files);
    processFiles(dropped);
  };

  const handleFileSelect = (e) => {
    const selected = Array.from(e.target.files);
    processFiles(selected);
    e.target.value = '';
  };

  const processFiles = (newFiles) => {
    const uploadItems = newFiles.map((f, i) => {
      // Create object URL for media files so they can be viewed/played
      let blobUrl = null;
      const type = getFileType(f.name);
      if (type === 'video' || type === 'image') {
        blobUrl = URL.createObjectURL(f);
      }

      return {
        id: `U${Date.now()}-${i}`,
        name: f.name,
        size: formatSize(f.size),
        rawSize: f.size,
        type,
        progress: 0,
        blobUrl,
        rawFile: f,
      };
    });

    setUploading(prev => [...prev, ...uploadItems]);

    uploadItems.forEach(item => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 20 + 5;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          setTimeout(() => {
            setUploading(prev => prev.filter(u => u.id !== item.id));
            setFiles(prev => [...prev, {
              id: item.id,
              name: item.name,
              type: item.type,
              size: item.size,
              rawSize: item.rawSize,
              uploadTime: new Date().toLocaleString(),
              status: 'pending',
              caseId: 'C001',
              blobUrl: item.blobUrl,
            }]);
            // Auto-trigger analysis for newly uploaded files
            setTimeout(() => analyzeFile(item.id), 800);
          }, 500);
        }
        setUploading(prev => prev.map(u => u.id === item.id ? { ...u, progress: Math.min(progress, 100) } : u));
      }, 200);
    });
  };

  const formatSize = (bytes) => {
    if (typeof bytes === 'string') return bytes;
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(0) + ' KB';
    if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
  };

  const removeFile = (id) => {
    const file = files.find(f => f.id === id);
    if (file?.blobUrl) URL.revokeObjectURL(file.blobUrl);
    setFiles(prev => prev.filter(f => f.id !== id));
  };

  // Simulate AI analysis on a single file
  const analyzeFile = (id) => {
    setAnalyzing(prev => ({ ...prev, [id]: 0 }));
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 8;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setAnalyzing(prev => { const n = { ...prev }; delete n[id]; return n; });
        setFiles(prev => prev.map(f => f.id === id ? { ...f, status: 'analyzed' } : f));
      } else {
        setAnalyzing(prev => ({ ...prev, [id]: Math.min(progress, 100) }));
      }
    }, 300);
  };

  // Analyze all pending files
  const analyzeAll = () => {
    const pending = files.filter(f => f.status === 'pending' && !analyzing[f.id]);
    pending.forEach((f, i) => setTimeout(() => analyzeFile(f.id), i * 400));
  };

  const filteredFiles = files.filter(f => {
    if (filter !== 'all' && f.type !== filter) return false;
    if (search && !f.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const videoCount = files.filter(f => f.type === 'video').length;
  const imageCount = files.filter(f => f.type === 'image').length;

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Evidence Upload</h1>
        <p>Upload and manage case evidence files — CCTV footage, images, documents, and communication logs.</p>
      </div>

      {/* Upload Zone */}
      <div
        className={`upload-zone ${dragOver ? 'upload-zone-active' : ''} animate-fade-in-up`}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInput.current?.click()}
      >
        <input
          ref={fileInput}
          type="file"
          multiple
          accept=".mp4,.avi,.mov,.mkv,.webm,.jpg,.jpeg,.png,.gif,.webp,.pdf,.txt,.csv,.doc,.docx"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
        <div className="upload-icon">
          <Upload size={36} />
        </div>
        <h3>Drop files here or click to browse</h3>
        <p>Supports MP4, AVI, MOV, JPG, PNG, PDF, TXT, CSV • Videos play in-browser</p>
        <div className="upload-types">
          <span className="upload-type-tag video-tag">
            <FileVideo size={14} />
            CCTV / VIDEO
          </span>
          <span className="upload-type-tag">
            <FileImage size={14} />
            IMAGE
          </span>
          <span className="upload-type-tag">
            <FileText size={14} />
            PDF
          </span>
          <span className="upload-type-tag">
            <File size={14} />
            TEXT
          </span>
        </div>
      </div>

      {/* Upload Progress */}
      {uploading.length > 0 && (
        <div className="upload-progress-list animate-fade-in">
          {uploading.map(item => {
            const Icon = fileTypeIcons[item.type] || File;
            return (
              <div key={item.id} className="upload-progress-item">
                <Icon size={20} style={{ color: fileTypeColors[item.type] }} />
                <div className="upload-progress-info">
                  <div className="flex justify-between">
                    <span className="text-sm font-bold">{item.name}</span>
                    <span className="text-xs text-muted">{Math.round(item.progress)}%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Stats Bar */}
      {files.length > 0 && (
        <div className="evidence-stats animate-fade-in-up delay-1">
          <div className="evidence-stat">
            <File size={16} />
            <span className="evidence-stat-value">{files.length}</span>
            <span className="evidence-stat-label">Total Files</span>
          </div>
          <div className="evidence-stat">
            <FileVideo size={16} style={{ color: 'var(--accent-primary)' }} />
            <span className="evidence-stat-value">{videoCount}</span>
            <span className="evidence-stat-label">CCTV / Videos</span>
          </div>
          <div className="evidence-stat">
            <FileImage size={16} style={{ color: 'var(--accent-secondary)' }} />
            <span className="evidence-stat-value">{imageCount}</span>
            <span className="evidence-stat-label">Images</span>
          </div>
          <div className="evidence-stat">
            <CheckCircle size={16} style={{ color: 'var(--accent-success)' }} />
            <span className="evidence-stat-value">{files.filter(f => f.status === 'analyzed').length}</span>
            <span className="evidence-stat-label">Analyzed</span>
          </div>
          {files.some(f => f.status === 'pending') && (
            <button className="btn btn-primary btn-sm analyze-all-btn" onClick={analyzeAll}>
              <Zap size={14} />
              Analyze All Pending ({files.filter(f => f.status === 'pending').length})
            </button>
          )}
        </div>
      )}

      {/* Filters */}
      <div className="evidence-toolbar animate-fade-in-up delay-2">
        <div className="search-box">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search evidence files..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="input"
          />
        </div>
        <div className="filter-tabs">
          {['all', 'video', 'image', 'pdf', 'text'].map(f => (
            <button
              key={f}
              className={`filter-tab ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f === 'all' ? 'All' : f === 'video' ? 'CCTV/Video' : f.charAt(0).toUpperCase() + f.slice(1)}
              <span className="filter-count">
                {f === 'all' ? files.length : files.filter(e => e.type === f).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Files Grid / List */}
      <div className="evidence-list animate-fade-in-up delay-3">
        {filteredFiles.length === 0 ? (
          <div className="empty-state">
            <FileText size={48} />
            <h3>No evidence files found</h3>
            <p>Upload CCTV footage, images, or documents to get started</p>
          </div>
        ) : (
          <>
            {/* Video/Image Gallery Cards */}
            {(filter === 'all' || filter === 'video' || filter === 'image') && filteredFiles.some(f => f.type === 'video' || f.type === 'image') && (
              <div className="media-gallery">
                {filteredFiles.filter(f => f.type === 'video' || f.type === 'image').map(file => (
                  <div key={file.id} className="media-card" onClick={() => setViewingFile(file)}>
                    <div className="media-card-preview">
                      {file.type === 'video' ? (
                        file.blobUrl ? (
                          <video src={file.blobUrl} className="media-thumb" muted preload="metadata" />
                        ) : (
                          <div className="media-placeholder video-placeholder">
                            <FileVideo size={32} />
                          </div>
                        )
                      ) : (
                        file.blobUrl ? (
                          <img src={file.blobUrl} className="media-thumb" alt={file.name} />
                        ) : (
                          <div className="media-placeholder">
                            <FileImage size={32} />
                          </div>
                        )
                      )}
                      <div className="media-card-overlay">
                        {file.type === 'video' ? (
                          <div className="media-play-btn"><Play size={24} /></div>
                        ) : (
                          <div className="media-play-btn"><Maximize2 size={20} /></div>
                        )}
                      </div>
                      {file.type === 'video' && (
                        <span className="media-badge-video"><FileVideo size={10} /> CCTV</span>
                      )}
                    </div>
                    <div className="media-card-info">
                      <span className="media-card-name">{file.name}</span>
                      <div className="media-card-meta">
                        <span>{file.size}</span>
                        <span className={`media-status ${file.status}`}>
                          {file.status === 'analyzed' ? '● Analyzed' : '○ Pending'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Table for all files */}
            <div className="table-wrapper" style={{ marginTop: 16 }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>File Name</th>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Upload Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFiles.map((file) => {
                    const Icon = fileTypeIcons[file.type] || File;
                    const canView = file.blobUrl && (file.type === 'video' || file.type === 'image');
                    return (
                      <tr key={file.id}>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="file-icon" style={{ color: fileTypeColors[file.type], background: `${fileTypeColors[file.type]}15` }}>
                              <Icon size={18} />
                            </div>
                            <span className="font-bold text-sm">{file.name}</span>
                          </div>
                        </td>
                        <td>
                          <span className="tag">
                            {file.type === 'video' ? 'CCTV/VIDEO' : file.type.toUpperCase()}
                          </span>
                        </td>
                        <td className="text-muted text-mono text-sm">{file.size}</td>
                        <td className="text-muted text-sm">{file.uploadTime}</td>
                        <td>
                          {analyzing[file.id] !== undefined ? (
                            <div className="analyze-progress-cell">
                              <Loader2 size={14} className="analyze-spinner" />
                              <span className="analyze-pct">{Math.round(analyzing[file.id])}%</span>
                              <div className="analyze-bar"><div className="analyze-bar-fill" style={{ width: `${analyzing[file.id]}%` }} /></div>
                            </div>
                          ) : file.status === 'analyzed' ? (
                            <span className="badge badge-low"><CheckCircle size={12} /> Analyzed</span>
                          ) : (
                            <span className="badge badge-medium analyze-pending-badge" onClick={() => analyzeFile(file.id)} title="Click to analyze">
                              <Zap size={12} /> Pending — Analyze
                            </span>
                          )}
                        </td>
                        <td>
                          <div className="flex gap-2">
                            {canView && (
                              <button className="btn btn-ghost btn-sm" title="View / Play" onClick={() => setViewingFile(file)}
                                style={{ color: 'var(--accent-primary)' }}>
                                {file.type === 'video' ? <Play size={14} /> : <Eye size={14} />}
                              </button>
                            )}
                            {!canView && (
                              <button className="btn btn-ghost btn-sm" title="No preview available" disabled>
                                <Eye size={14} />
                              </button>
                            )}
                            {file.status === 'pending' && !analyzing[file.id] && (
                              <button className="btn btn-ghost btn-sm" title="Run AI Analysis" onClick={() => analyzeFile(file.id)}
                                style={{ color: 'var(--accent-warning)' }}>
                                <Zap size={14} />
                              </button>
                            )}
                            <button className="btn btn-ghost btn-sm" title="Delete" onClick={() => removeFile(file.id)}>
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      {/* Media Viewer Modal */}
      {viewingFile && (
        <div className="media-modal-overlay" onClick={() => setViewingFile(null)}>
          <div className="media-modal" onClick={e => e.stopPropagation()}>
            <div className="media-modal-header">
              <div className="flex items-center gap-3">
                {viewingFile.type === 'video' ? <FileVideo size={18} style={{ color: 'var(--accent-primary)' }} /> : <FileImage size={18} style={{ color: 'var(--accent-secondary)' }} />}
                <div>
                  <h3>{viewingFile.name}</h3>
                  <span className="text-xs text-muted">{viewingFile.size} • {viewingFile.uploadTime || 'CCTV Evidence'}</span>
                </div>
              </div>
              <button className="media-modal-close" onClick={() => setViewingFile(null)}>
                <X size={20} />
              </button>
            </div>
            <div className="media-modal-content">
              {viewingFile.type === 'video' ? (
                viewingFile.blobUrl ? (
                  <video
                    src={viewingFile.blobUrl}
                    controls
                    autoPlay
                    className="media-modal-video"
                  />
                ) : (
                  <div className="media-modal-placeholder">
                    <FileVideo size={64} />
                    <h3>CCTV Footage</h3>
                    <p>Video preview not available for imported metadata. Upload the actual video file to enable playback.</p>
                  </div>
                )
              ) : viewingFile.type === 'image' ? (
                viewingFile.blobUrl ? (
                  <img src={viewingFile.blobUrl} className="media-modal-image" alt={viewingFile.name} />
                ) : (
                  <div className="media-modal-placeholder">
                    <FileImage size={64} />
                    <h3>Image Evidence</h3>
                    <p>Image preview not available for imported metadata. Upload the actual file to enable viewing.</p>
                  </div>
                )
              ) : null}
            </div>
            <div className="media-modal-footer">
              <span className="badge badge-info">{viewingFile.type === 'video' ? 'CCTV / Video' : 'Image'}</span>
              {viewingFile.status === 'analyzed' ? (
                <span className="badge badge-low"><CheckCircle size={12} /> AI Analyzed</span>
              ) : (
                <span className="badge badge-medium"><Clock size={12} /> Pending Analysis</span>
              )}
              {viewingFile.blobUrl && (
                <a href={viewingFile.blobUrl} download={viewingFile.name} className="btn btn-secondary btn-sm">
                  <Download size={14} /> Download
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .upload-zone {
          border: 2px dashed var(--border-secondary);
          border-radius: var(--radius-lg);
          padding: 48px 32px;
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-base);
          background: var(--bg-card);
          margin-bottom: 24px;
        }
        .upload-zone:hover, .upload-zone-active {
          border-color: var(--accent-primary);
          background: rgba(59, 130, 246, 0.03);
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.08);
        }
        .upload-zone-active {
          animation: borderGlow 1.5s ease-in-out infinite;
        }
        .upload-icon {
          width: 72px;
          height: 72px;
          margin: 0 auto 16px;
          background: rgba(59, 130, 246, 0.1);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
        }
        .upload-zone h3 {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .upload-zone > p {
          color: var(--text-tertiary);
          font-size: 0.85rem;
        }
        .upload-types {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 16px;
        }
        .upload-type-tag {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .video-tag {
          background: rgba(59, 130, 246, 0.15);
          color: var(--accent-primary);
          border: 1px solid rgba(59, 130, 246, 0.3);
        }
        .upload-progress-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
        }
        .upload-progress-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
        }
        .upload-progress-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        /* Stats Bar */
        .evidence-stats {
          display: flex;
          gap: 16px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .evidence-stat {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          color: var(--text-secondary);
        }
        .evidence-stat-value {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--text-primary);
          font-family: var(--font-mono);
        }
        .evidence-stat-label {
          font-size: 0.75rem;
          color: var(--text-tertiary);
        }

        /* Toolbar */
        .evidence-toolbar {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .search-box {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 14px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          flex: 1;
          min-width: 200px;
          color: var(--text-tertiary);
        }
        .search-box .input {
          border: none;
          background: none;
          padding: 10px 0;
          flex: 1;
        }
        .search-box .input:focus {
          box-shadow: none;
        }
        .filter-tabs {
          display: flex;
          gap: 4px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          padding: 4px;
        }
        .filter-tab {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          background: none;
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .filter-tab:hover {
          color: var(--text-primary);
          background: var(--bg-tertiary);
        }
        .filter-tab.active {
          background: var(--accent-primary);
          color: white;
        }
        .filter-count {
          font-size: 0.7rem;
          padding: 1px 6px;
          background: rgba(255,255,255,0.15);
          border-radius: var(--radius-full);
        }
        .filter-tab:not(.active) .filter-count {
          background: var(--bg-tertiary);
        }
        .file-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        /* Media Gallery */
        .media-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 16px;
          margin-bottom: 8px;
        }
        .media-card {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          overflow: hidden;
          cursor: pointer;
          transition: all var(--transition-base);
        }
        .media-card:hover {
          border-color: var(--accent-primary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }
        .media-card-preview {
          position: relative;
          height: 140px;
          background: var(--bg-tertiary);
          overflow: hidden;
        }
        .media-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .media-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-tertiary);
          background: linear-gradient(135deg, var(--bg-tertiary), var(--bg-elevated));
        }
        .video-placeholder {
          background: linear-gradient(135deg, rgba(59,130,246,0.1), rgba(6,182,212,0.1));
          color: var(--accent-primary);
        }
        .media-card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }
        .media-card:hover .media-card-overlay {
          opacity: 1;
        }
        .media-play-btn {
          width: 48px;
          height: 48px;
          background: rgba(59, 130, 246, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          backdrop-filter: blur(4px);
        }
        .media-badge-video {
          position: absolute;
          top: 8px;
          left: 8px;
          display: flex;
          align-items: center;
          gap: 3px;
          padding: 3px 8px;
          background: rgba(59, 130, 246, 0.85);
          color: white;
          border-radius: var(--radius-full);
          font-size: 0.6rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          backdrop-filter: blur(4px);
        }
        .media-card-info {
          padding: 10px 12px;
        }
        .media-card-name {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-primary);
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .media-card-meta {
          display: flex;
          justify-content: space-between;
          margin-top: 4px;
          font-size: 0.7rem;
          color: var(--text-tertiary);
        }
        .media-status.analyzed { color: var(--accent-success); }
        .media-status.pending { color: var(--accent-warning); }

        /* Media Modal */
        .media-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.2s ease-out;
          backdrop-filter: blur(8px);
        }
        .media-modal {
          background: var(--bg-card);
          border: 1px solid var(--border-secondary);
          border-radius: var(--radius-xl);
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: scaleIn 0.3s ease-out;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .media-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border-primary);
        }
        .media-modal-header h3 {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .media-modal-close {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-primary);
          color: var(--text-secondary);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .media-modal-close:hover {
          background: var(--accent-danger);
          color: white;
          border-color: var(--accent-danger);
        }
        .media-modal-content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          min-height: 300px;
        }
        .media-modal-video {
          width: 100%;
          max-height: 60vh;
          outline: none;
        }
        .media-modal-image {
          max-width: 100%;
          max-height: 60vh;
          object-fit: contain;
        }
        .media-modal-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 60px;
          color: var(--text-tertiary);
          text-align: center;
        }
        .media-modal-placeholder h3 {
          color: var(--text-secondary);
          font-size: 1rem;
        }
        .media-modal-placeholder p {
          font-size: 0.85rem;
          max-width: 320px;
        }
        .media-modal-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 20px;
          border-top: 1px solid var(--border-primary);
        }
        .media-modal-footer .btn {
          margin-left: auto;
        }

        @media (max-width: 768px) {
          .media-gallery { grid-template-columns: repeat(2, 1fr); }
          .evidence-stats { flex-direction: column; }
        }

        /* Analyze Progress */
        .analyze-progress-cell {
          display: flex;
          align-items: center;
          gap: 6px;
          min-width: 120px;
        }
        .analyze-spinner {
          animation: spin 1s linear infinite;
          color: var(--accent-warning);
          flex-shrink: 0;
        }
        .analyze-pct {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--accent-warning);
          font-family: var(--font-mono);
          min-width: 28px;
        }
        .analyze-bar {
          flex: 1;
          height: 4px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-full);
          overflow: hidden;
          min-width: 50px;
        }
        .analyze-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-warning), var(--accent-success));
          border-radius: var(--radius-full);
          transition: width 0.3s ease-out;
        }
        .analyze-pending-badge {
          cursor: pointer !important;
          transition: all var(--transition-fast);
        }
        .analyze-pending-badge:hover {
          background: rgba(245, 158, 11, 0.25) !important;
          transform: scale(1.05);
        }
        .analyze-all-btn {
          margin-left: auto;
          background: linear-gradient(135deg, var(--accent-warning), #d97706) !important;
          border-color: var(--accent-warning) !important;
          white-space: nowrap;
        }
        .analyze-all-btn:hover {
          filter: brightness(1.15);
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
}
