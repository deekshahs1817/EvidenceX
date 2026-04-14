import { useState, useRef } from 'react';
import { useData } from '../context/DataContext';
import {
  Database, Upload, Users, Phone, FileStack, Clock, Radio,
  Network, Route, ScanSearch, Link2, Brain, Trash2, CheckCircle,
  AlertCircle, ChevronDown, X, RotateCcw, Zap
} from 'lucide-react';

// Built-in CSV parser (no external dependency needed)
function parseCSV(text) {
  const lines = text.split('\n').filter(line => line.trim() !== '');
  if (lines.length < 2) return { data: [], errors: [] };

  const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));
  const data = [];
  const errors = [];

  for (let i = 1; i < lines.length; i++) {
    const values = [];
    let current = '';
    let inQuotes = false;

    for (let j = 0; j < lines[i].length; j++) {
      const char = lines[i][j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());

    if (values.length === headers.length) {
      const row = {};
      headers.forEach((h, idx) => { row[h] = values[idx]; });
      data.push(row);
    } else if (values.some(v => v !== '')) {
      errors.push({ row: i, message: `Column mismatch at row ${i}` });
    }
  }

  return { data, errors };
}

const datasetConfig = [
  { key: 'suspects', label: 'Suspects', icon: Users, color: '#ef4444', format: 'csv', desc: 'Suspect profiles with risk levels & scores', file: 'suspects.csv' },
  { key: 'cdr_data', label: 'CDR Records', icon: Phone, color: '#f59e0b', format: 'csv', desc: 'Call detail records with tower/GPS data', file: 'cdr_data.csv' },
  { key: 'evidence_files', label: 'Evidence Files', icon: FileStack, color: '#3b82f6', format: 'csv', desc: 'Evidence metadata (files uploaded to system)', file: 'evidence_files.csv' },
  { key: 'timeline_events', label: 'Timeline Events', icon: Clock, color: '#8b5cf6', format: 'csv', desc: 'Chronological investigation events', file: 'timeline_events.csv' },
  { key: 'tower_locations', label: 'Tower Locations', icon: Radio, color: '#06b6d4', format: 'csv', desc: 'Cell tower GPS coordinates for CDR mapping', file: 'tower_locations.csv' },
  { key: 'network_connections', label: 'Network Graph', icon: Network, color: '#ec4899', format: 'csv', desc: 'Suspect network connections & relationships', file: 'network_connections.csv' },
  { key: 'movement_patterns', label: 'Movement Patterns', icon: Route, color: '#14b8a6', format: 'csv', desc: 'Suspect movement behavior analysis', file: 'movement_patterns.csv' },
  { key: 'analysis_results', label: 'Analysis Results', icon: ScanSearch, color: '#10b981', format: 'json', desc: 'AI analysis output for evidence items', file: 'analysis_results.json' },
  { key: 'cross_evidence_links', label: 'Cross-Evidence', icon: Link2, color: '#f97316', format: 'csv', desc: 'Evidence correlation links', file: 'cross_evidence_links.csv' },
  { key: 'ai_insights', label: 'AI Insights', icon: Brain, color: '#a855f7', format: 'csv', desc: 'AI-generated intelligence findings', file: 'ai_insights.csv' },
];

export default function DatasetImport() {
  const { importDataset, clearDataset, clearAllData, getRecordCount } = useData();
  const [importing, setImporting] = useState(null);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRefs = useRef({});

  const totalRecords = datasetConfig.reduce((sum, d) => sum + getRecordCount(d.key), 0);

  const handleFileSelect = (datasetKey, format, e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImporting(datasetKey);
    setError(null);
    setSuccess(null);

    if (format === 'json') {
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const json = JSON.parse(ev.target.result);
          const records = Array.isArray(json) ? json : [json];
          importDataset(datasetKey, records);
          setSuccess({ key: datasetKey, count: records.length });
          setTimeout(() => setSuccess(null), 3000);
        } catch (err) {
          setError({ key: datasetKey, message: 'Invalid JSON file' });
        }
        setImporting(null);
      };
      reader.readAsText(file);
    } else {
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const results = parseCSV(ev.target.result);
          if (results.errors.length > 0) {
            setError({ key: datasetKey, message: `Parse error: ${results.errors[0].message}` });
          } else {
            importDataset(datasetKey, results.data);
            setSuccess({ key: datasetKey, count: results.data.length });
            setTimeout(() => setSuccess(null), 3000);
          }
        } catch (err) {
          setError({ key: datasetKey, message: 'Failed to parse CSV file' });
        }
        setImporting(null);
      };
      reader.readAsText(file);
    }

    // Reset input
    e.target.value = '';
  };

  const handleClear = (key) => {
    clearDataset(key);
    setSuccess(null);
    setError(null);
  };

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="flex justify-between items-center">
          <div>
            <h1>Import Datasets</h1>
            <p>Upload CSV/JSON files to populate the investigation system. All pages reflect imported data in real-time.</p>
          </div>
          <div className="import-header-stats">
            <div className="import-total">
              <Database size={18} />
              <span>{totalRecords}</span>
              <small>total records</small>
            </div>
            {totalRecords > 0 && (
              <button className="btn btn-ghost btn-sm" onClick={clearAllData} style={{ color: 'var(--accent-danger)' }}>
                <Trash2 size={14} /> Clear All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Progress Overview */}
      <div className="import-progress animate-fade-in-up">
        <div className="import-progress-bar">
          <div className="import-progress-fill" style={{
            width: `${(datasetConfig.filter(d => getRecordCount(d.key) > 0).length / datasetConfig.length) * 100}%`
          }} />
        </div>
        <span className="import-progress-text">
          {datasetConfig.filter(d => getRecordCount(d.key) > 0).length} / {datasetConfig.length} datasets loaded
        </span>
      </div>

      {/* Dataset Cards */}
      <div className="import-grid">
        {datasetConfig.map((dataset, i) => {
          const Icon = dataset.icon;
          const count = getRecordCount(dataset.key);
          const isLoaded = count > 0;
          const isImporting = importing === dataset.key;
          const showSuccess = success?.key === dataset.key;
          const showError = error?.key === dataset.key;

          return (
            <div key={dataset.key}
              className={`import-card animate-fade-in-up delay-${Math.min(i + 1, 6)} ${isLoaded ? 'loaded' : ''}`}
              style={{ '--card-color': dataset.color }}>

              <div className="import-card-header">
                <div className="import-card-icon" style={{ color: dataset.color, background: `${dataset.color}15` }}>
                  <Icon size={22} />
                </div>
                <div className="import-card-info">
                  <h3>{dataset.label}</h3>
                  <span className="text-xs text-muted">{dataset.format.toUpperCase()} • {dataset.file}</span>
                </div>
                {isLoaded && (
                  <div className="import-card-badge" style={{ background: `${dataset.color}20`, color: dataset.color }}>
                    <CheckCircle size={12} />
                    {count}
                  </div>
                )}
              </div>

              <p className="import-card-desc">{dataset.desc}</p>

              {/* Status Messages */}
              {isImporting && (
                <div className="import-status importing">
                  <div className="loading-spinner" style={{ width: 16, height: 16, borderWidth: 2 }} />
                  <span>Parsing file...</span>
                </div>
              )}
              {showSuccess && (
                <div className="import-status success">
                  <CheckCircle size={14} />
                  <span>{success.count} records imported successfully</span>
                </div>
              )}
              {showError && (
                <div className="import-status error">
                  <AlertCircle size={14} />
                  <span>{error.message}</span>
                </div>
              )}

              <div className="import-card-actions">
                <input
                  ref={el => fileInputRefs.current[dataset.key] = el}
                  type="file"
                  accept={dataset.format === 'json' ? '.json' : '.csv'}
                  onChange={(e) => handleFileSelect(dataset.key, dataset.format, e)}
                  style={{ display: 'none' }}
                />
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => fileInputRefs.current[dataset.key]?.click()}
                  disabled={isImporting}
                  style={{ background: dataset.color, borderColor: dataset.color }}>
                  <Upload size={14} />
                  {isLoaded ? 'Re-import' : 'Import'}
                </button>
                {isLoaded && (
                  <button className="btn btn-ghost btn-sm" onClick={() => handleClear(dataset.key)}>
                    <X size={14} /> Clear
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .import-header-stats {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .import-total {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          color: var(--accent-primary);
        }
        .import-total span {
          font-size: 1.3rem;
          font-weight: 800;
          font-family: var(--font-mono);
        }
        .import-total small {
          font-size: 0.75rem;
          color: var(--text-tertiary);
          font-weight: 400;
        }
        .import-progress {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding: 16px 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
        }
        .import-progress-bar {
          flex: 1;
          height: 8px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-full);
          overflow: hidden;
        }
        .import-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
          border-radius: var(--radius-full);
          transition: width 0.5s ease-out;
        }
        .import-progress-text {
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 600;
          white-space: nowrap;
        }
        .import-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 16px;
        }
        .import-card {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          padding: 20px;
          transition: all var(--transition-base);
          position: relative;
          overflow: hidden;
        }
        .import-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--card-color);
          opacity: 0;
          transition: opacity var(--transition-base);
        }
        .import-card:hover {
          border-color: var(--border-secondary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }
        .import-card:hover::before { opacity: 1; }
        .import-card.loaded::before { opacity: 1; }
        .import-card.loaded {
          border-color: color-mix(in srgb, var(--card-color) 30%, var(--border-primary));
        }
        .import-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }
        .import-card-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .import-card-info { flex: 1; }
        .import-card-info h3 {
          font-size: 0.95rem;
          font-weight: 700;
        }
        .import-card-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          font-family: var(--font-mono);
        }
        .import-card-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-bottom: 12px;
          line-height: 1.4;
        }
        .import-status {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          margin-bottom: 12px;
        }
        .import-status.importing {
          background: rgba(59,130,246,0.1);
          color: var(--accent-primary);
        }
        .import-status.success {
          background: rgba(16,185,129,0.1);
          color: var(--accent-success);
        }
        .import-status.error {
          background: rgba(239,68,68,0.1);
          color: var(--accent-danger);
        }
        .import-card-actions {
          display: flex;
          gap: 8px;
        }
        .import-card-actions .btn-primary:hover {
          filter: brightness(1.15);
        }
        @media (max-width: 768px) {
          .import-grid { grid-template-columns: 1fr; }
          .import-header-stats { flex-direction: column; }
        }
      `}</style>
    </div>
  );
}
