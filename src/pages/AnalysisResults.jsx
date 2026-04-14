import { useState } from 'react';
import { useData } from '../context/DataContext';
import {
  ScanSearch, FileVideo, FileImage, FileText, File, AlertTriangle,
  CheckCircle, Eye, ChevronDown, ChevronUp, Shield, Target, User, MapPin, Calendar, Phone, DollarSign
} from 'lucide-react';

const typeIcons = {
  video: FileVideo,
  image: FileImage,
  pdf: FileText,
  text: File,
};

const entityIcons = {
  Person: User,
  Location: MapPin,
  Date: Calendar,
  Phone: Phone,
  Amount: DollarSign,
  Account: DollarSign,
  'Code Words': AlertTriangle,
};

export default function AnalysisResults() {
  const { analysisResults, evidenceFiles } = useData();
  const [expandedId, setExpandedId] = useState(null);
  const [filterRisk, setFilterRisk] = useState('all');

  const filtered = filterRisk === 'all'
    ? analysisResults
    : analysisResults.filter(r => r.riskLevel === filterRisk);

  const getFile = (id) => evidenceFiles.find(f => f.id === id);

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>AI Analysis Results</h1>
        <p>Object detection, entity extraction, and risk assessment powered by AI engine.</p>
      </div>

      {/* Summary Bar */}
      <div className="analysis-summary animate-fade-in-up">
        <div className="analysis-stat">
          <span className="analysis-stat-value">{analysisResults.length}</span>
          <span className="analysis-stat-label">Files Analyzed</span>
        </div>
        <div className="analysis-stat">
          <span className="analysis-stat-value" style={{ color: 'var(--accent-danger)' }}>
            {analysisResults.filter(r => r.riskLevel === 'high').length}
          </span>
          <span className="analysis-stat-label">High Risk</span>
        </div>
        <div className="analysis-stat">
          <span className="analysis-stat-value" style={{ color: 'var(--accent-warning)' }}>
            {analysisResults.filter(r => r.riskLevel === 'medium').length}
          </span>
          <span className="analysis-stat-label">Medium Risk</span>
        </div>
        <div className="analysis-stat">
          <span className="analysis-stat-value" style={{ color: 'var(--accent-success)' }}>
            {analysisResults.filter(r => r.riskLevel === 'low').length}
          </span>
          <span className="analysis-stat-label">Low Risk</span>
        </div>
      </div>

      {/* Filter */}
      <div className="analysis-filters animate-fade-in-up delay-1">
        {['all', 'high', 'medium', 'low'].map(r => (
          <button
            key={r}
            className={`filter-tab ${filterRisk === r ? 'active' : ''}`}
            onClick={() => setFilterRisk(r)}
            style={filterRisk === r && r !== 'all' ? {
              background: r === 'high' ? 'var(--accent-danger)' : r === 'medium' ? 'var(--accent-warning)' : 'var(--accent-success)'
            } : {}}
          >
            {r === 'all' ? 'All Results' : `${r.charAt(0).toUpperCase() + r.slice(1)} Risk`}
          </button>
        ))}
      </div>

      {/* Results Cards */}
      <div className="analysis-results-list">
        {filtered.map((result, idx) => {
          const file = getFile(result.evidenceId);
          const Icon = typeIcons[result.type] || File;
          const isExpanded = expandedId === result.evidenceId;

          return (
            <div key={result.evidenceId} className={`analysis-card animate-fade-in-up delay-${Math.min(idx + 1, 6)}`}>
              <div className="analysis-card-header" onClick={() => setExpandedId(isExpanded ? null : result.evidenceId)}>
                <div className="flex items-center gap-3">
                  <div className="analysis-type-icon" style={{ color: result.type === 'video' || result.type === 'image' ? 'var(--accent-primary)' : 'var(--accent-warning)' }}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="analysis-file-name">{file?.name || result.evidenceId}</h3>
                    <span className="text-xs text-muted">{result.type.toUpperCase()} • Score: {result.riskScore}/100</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`risk-meter risk-${result.riskLevel}`}>
                    <div className="risk-meter-fill" style={{ width: `${result.riskScore}%` }} />
                    <span>{result.riskScore}</span>
                  </div>
                  <span className={`badge badge-${result.riskLevel}`}>
                    {result.riskLevel === 'high' && <AlertTriangle size={11} />}
                    {result.riskLevel === 'low' && <CheckCircle size={11} />}
                    {result.riskLevel}
                  </span>
                  {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </div>

              {/* Summary */}
              <div className="analysis-summary-text">
                <Shield size={14} /> {result.summary}
              </div>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="analysis-details animate-fade-in">
                  {/* Object Detections */}
                  {result.detections && (
                    <div className="detail-section">
                      <h4><Target size={16} /> Object Detections</h4>
                      <div className="detection-grid">
                        {result.detections.map((det, di) => (
                          <div key={di} className="detection-card">
                            <div className="detection-header">
                              <span className="detection-object">{det.object}</span>
                              <span className="detection-count">×{det.count}</span>
                            </div>
                            <div className="detection-confidence">
                              <div className="progress-bar">
                                <div className="progress-fill" style={{
                                  width: `${det.confidence * 100}%`,
                                  background: det.confidence > 0.8 ? 'var(--accent-success)' : det.confidence > 0.6 ? 'var(--accent-warning)' : 'var(--accent-danger)'
                                }} />
                              </div>
                              <span className="text-xs text-mono">{(det.confidence * 100).toFixed(0)}%</span>
                            </div>
                            {det.timestamps && (
                              <div className="detection-timestamps">
                                {det.timestamps.map((ts, ti) => (
                                  <span key={ti} className="tag">{ts}</span>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Entity Extraction */}
                  {result.entities && (
                    <div className="detail-section">
                      <h4><ScanSearch size={16} /> Extracted Entities</h4>
                      <div className="entity-grid">
                        {result.entities.map((ent, ei) => {
                          const EIcon = entityIcons[ent.type] || FileText;
                          return (
                            <div key={ei} className="entity-card">
                              <div className="entity-header">
                                <EIcon size={16} />
                                <span className="entity-type">{ent.type}</span>
                                <span className="entity-count">{ent.values.length}</span>
                              </div>
                              <div className="entity-values">
                                {ent.values.map((v, vi) => (
                                  <span key={vi} className="entity-value">{v}</span>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* JSON Output */}
                  <div className="detail-section">
                    <h4><FileText size={16} /> Structured JSON Output</h4>
                    <pre className="json-output">{JSON.stringify(result, null, 2)}</pre>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        .analysis-summary {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          padding: 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
        }
        .analysis-stat {
          flex: 1;
          text-align: center;
        }
        .analysis-stat-value {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          line-height: 1.2;
        }
        .analysis-stat-label {
          font-size: 0.75rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .analysis-filters {
          display: flex;
          gap: 6px;
          margin-bottom: 20px;
          padding: 4px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          width: fit-content;
        }
        .filter-tab {
          padding: 6px 16px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          background: none;
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .filter-tab:hover { color: var(--text-primary); background: var(--bg-tertiary); }
        .filter-tab.active { color: white; }
        .analysis-results-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .analysis-card {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-base);
        }
        .analysis-card:hover {
          border-color: var(--border-secondary);
        }
        .analysis-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          cursor: pointer;
          transition: background var(--transition-fast);
        }
        .analysis-card-header:hover {
          background: var(--bg-hover);
        }
        .analysis-type-icon {
          width: 44px;
          height: 44px;
          background: currentColor;
          background: rgba(59,130,246,0.1);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .analysis-file-name {
          font-size: 0.95rem;
          font-weight: 700;
        }
        .risk-meter {
          width: 80px;
          height: 28px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
          position: relative;
          overflow: hidden;
        }
        .risk-meter span {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          font-size: 0.75rem;
          font-weight: 700;
          font-family: var(--font-mono);
        }
        .risk-meter-fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          border-radius: var(--radius-sm);
          transition: width 1s ease-out;
        }
        .risk-high .risk-meter-fill { background: rgba(239, 68, 68, 0.3); }
        .risk-medium .risk-meter-fill { background: rgba(245, 158, 11, 0.3); }
        .risk-low .risk-meter-fill { background: rgba(16, 185, 129, 0.3); }
        .analysis-summary-text {
          padding: 0 24px 16px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          display: flex;
          align-items: flex-start;
          gap: 8px;
          line-height: 1.5;
        }
        .analysis-summary-text svg {
          color: var(--accent-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .analysis-details {
          padding: 0 24px 24px;
          border-top: 1px solid var(--border-primary);
          padding-top: 20px;
        }
        .detail-section {
          margin-bottom: 24px;
        }
        .detail-section:last-child { margin-bottom: 0; }
        .detail-section h4 {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-primary);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .detection-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 12px;
        }
        .detection-card {
          padding: 14px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
        }
        .detection-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        .detection-object {
          font-size: 0.85rem;
          font-weight: 600;
        }
        .detection-count {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-primary);
          font-weight: 700;
        }
        .detection-confidence {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .detection-timestamps {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        .entity-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 12px;
        }
        .entity-card {
          padding: 14px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
        }
        .entity-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          color: var(--accent-secondary);
        }
        .entity-type {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
        }
        .entity-count {
          margin-left: auto;
          font-size: 0.7rem;
          padding: 2px 6px;
          background: var(--bg-elevated);
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
        }
        .entity-values {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .entity-value {
          padding: 3px 10px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--text-primary);
        }
        .json-output {
          padding: 16px;
          background: var(--bg-primary);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-secondary);
          overflow-x: auto;
          max-height: 300px;
          overflow-y: auto;
          line-height: 1.6;
        }
      `}</style>
    </div>
  );
}
