import { useData } from '../context/DataContext';
import { Link2, Video, FileText, Phone, Camera, Shield, AlertTriangle, ChevronRight, Eye } from 'lucide-react';
import { useState } from 'react';

const linkTypeConfig = {
  'person-cctv-call': { icon: Video, label: 'CCTV + Call Records', color: 'var(--accent-primary)' },
  'person-financial-call': { icon: FileText, label: 'Financial + Call', color: 'var(--accent-warning)' },
  'location-cctv-cdr': { icon: Camera, label: 'CCTV + CDR Location', color: 'var(--accent-danger)' },
  'chat-call-match': { icon: Phone, label: 'Chat + Call Match', color: 'var(--accent-secondary)' },
  'person-photo-cctv': { icon: Camera, label: 'Photo + CCTV Match', color: 'var(--accent-tertiary)' },
  'movement-financial': { icon: FileText, label: 'Movement + Financial', color: 'var(--accent-success)' },
};

export default function CrossEvidence() {
  const { crossEvidenceLinks, evidenceFiles } = useData();
  const [selectedLink, setSelectedLink] = useState(null);
  const [filterSeverity, setFilterSeverity] = useState('all');

  const filtered = filterSeverity === 'all'
    ? crossEvidenceLinks
    : crossEvidenceLinks.filter(l => l.severity === filterSeverity);

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Cross-Evidence Linking</h1>
        <p>Automated connections between CCTV detections, extracted names, call records, and financial data.</p>
      </div>

      {/* Stats */}
      <div className="cross-stats animate-fade-in-up">
        <div className="cross-stat">
          <span className="cross-stat-value">{crossEvidenceLinks.length}</span>
          <span className="cross-stat-label">Total Links</span>
        </div>
        <div className="cross-stat">
          <span className="cross-stat-value" style={{ color: 'var(--accent-danger)' }}>
            {crossEvidenceLinks.filter(l => l.severity === 'high').length}
          </span>
          <span className="cross-stat-label">High Confidence</span>
        </div>
        <div className="cross-stat">
          <span className="cross-stat-value" style={{ color: 'var(--accent-primary)' }}>
            {[...new Set(crossEvidenceLinks.flatMap(l => l.suspects))].length}
          </span>
          <span className="cross-stat-label">Linked Suspects</span>
        </div>
        <div className="cross-stat">
          <span className="cross-stat-value" style={{ color: 'var(--accent-secondary)' }}>
            {[...new Set(crossEvidenceLinks.flatMap(l => l.evidence))].length}
          </span>
          <span className="cross-stat-label">Evidence Files</span>
        </div>
      </div>

      {/* Filter */}
      <div className="cross-filters animate-fade-in-up delay-1">
        {['all', 'high', 'medium'].map(s => (
          <button key={s} className={`filter-tab ${filterSeverity === s ? 'active' : ''}`}
            onClick={() => setFilterSeverity(s)}
            style={filterSeverity === s && s !== 'all' ? {
              background: s === 'high' ? 'var(--accent-danger)' : 'var(--accent-warning)'
            } : {}}>
            {s === 'all' ? 'All Links' : `${s.charAt(0).toUpperCase() + s.slice(1)} Confidence`}
          </button>
        ))}
      </div>

      {/* Links */}
      <div className="cross-links animate-fade-in-up delay-2">
        {filtered.map((link, i) => {
          const config = linkTypeConfig[link.type] || { icon: Link2, label: 'Connection', color: 'var(--accent-primary)' };
          const Icon = config.icon;

          return (
            <div key={link.id} className={`cross-link-card animate-fade-in-up delay-${Math.min(i + 1, 6)}`}
              style={{ borderLeftColor: config.color }}>
              <div className="cross-link-header">
                <div className="cross-link-icon" style={{ color: config.color, background: `${config.color}15` }}>
                  <Icon size={20} />
                </div>
                <div className="cross-link-info">
                  <span className="cross-link-type">{config.label}</span>
                  <span className={`badge badge-${link.severity}`}>{link.severity}</span>
                </div>
                <div className="cross-confidence">
                  <svg viewBox="0 0 36 36" className="confidence-ring">
                    <circle cx="18" cy="18" r="15" fill="none" stroke="var(--bg-tertiary)" strokeWidth="3" />
                    <circle cx="18" cy="18" r="15" fill="none" stroke={config.color} strokeWidth="3"
                      strokeDasharray={`${(link.confidence / 100) * 94.2} 94.2`}
                      strokeLinecap="round" transform="rotate(-90 18 18)" />
                  </svg>
                  <span className="confidence-value">{link.confidence}%</span>
                </div>
              </div>

              <p className="cross-link-description">{link.description}</p>

              <div className="cross-link-footer">
                <div className="cross-suspects">
                  <span className="cross-label">Suspects:</span>
                  {link.suspects.map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
                <div className="cross-evidence-refs">
                  <span className="cross-label">Evidence:</span>
                  {link.evidence.map(e => {
                    const file = evidenceFiles.find(f => f.id === e);
                    return (
                      <span key={e} className="evidence-ref">
                        {file ? file.name.substring(0, 20) + '...' : e}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .cross-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 20px;
        }
        .cross-stat {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          padding: 18px 20px;
          text-align: center;
        }
        .cross-stat-value {
          font-size: 2rem;
          font-weight: 800;
          display: block;
        }
        .cross-stat-label {
          font-size: 0.75rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .cross-filters {
          display: flex;
          gap: 6px;
          margin-bottom: 20px;
          padding: 4px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          width: fit-content;
        }
        .cross-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .cross-link-card {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-left: 4px solid;
          border-radius: var(--radius-md);
          padding: 20px 24px;
          transition: all var(--transition-fast);
        }
        .cross-link-card:hover {
          background: var(--bg-hover);
          border-color: var(--border-secondary);
          border-left-width: 4px;
        }
        .cross-link-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .cross-link-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cross-link-info {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .cross-link-type {
          font-size: 0.85rem;
          font-weight: 700;
        }
        .cross-confidence {
          position: relative;
          width: 44px;
          height: 44px;
          flex-shrink: 0;
        }
        .confidence-ring {
          width: 100%;
          height: 100%;
        }
        .confidence-value {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.6rem;
          font-weight: 700;
          font-family: var(--font-mono);
        }
        .cross-link-description {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 14px;
          padding: 10px 14px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
          border-left: 2px solid var(--accent-primary);
        }
        .cross-link-footer {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .cross-suspects, .cross-evidence-refs {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .cross-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          min-width: 65px;
        }
        .evidence-ref {
          padding: 3px 8px;
          background: var(--bg-elevated);
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          color: var(--accent-secondary);
          font-family: var(--font-mono);
        }
        @media (max-width: 768px) {
          .cross-stats { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  );
}
