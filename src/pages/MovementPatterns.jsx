import { useData } from '../context/DataContext';
import { Route, MapPin, Clock, AlertTriangle, RotateCw, TrendingUp, ArrowRight, Users, Repeat } from 'lucide-react';
import { useState } from 'react';

const patternConfig = {
  repeated_visit: { icon: Repeat, color: 'var(--accent-warning)', label: 'Repeated Visit' },
  route_change: { icon: Route, color: 'var(--accent-danger)', label: 'Route Change' },
  sudden_movement: { icon: TrendingUp, color: 'var(--accent-danger)', label: 'Sudden Movement' },
  convergence: { icon: Users, color: 'var(--accent-tertiary)', label: 'Convergence Point' },
};

export default function MovementPatterns() {
  const { movementPatterns, suspects } = useData();
  const [filterPattern, setFilterPattern] = useState('all');
  const [filterSeverity, setFilterSeverity] = useState('all');

  const filtered = movementPatterns.filter(p => {
    if (filterPattern !== 'all' && p.pattern !== filterPattern) return false;
    if (filterSeverity !== 'all' && p.severity !== filterSeverity) return false;
    return true;
  });

  const patternCounts = {
    repeated_visit: movementPatterns.filter(p => p.pattern === 'repeated_visit').length,
    route_change: movementPatterns.filter(p => p.pattern === 'route_change').length,
    sudden_movement: movementPatterns.filter(p => p.pattern === 'sudden_movement').length,
    convergence: movementPatterns.filter(p => p.pattern === 'convergence').length,
  };

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Movement Pattern Detection</h1>
        <p>Analysis of repeated visits, sudden movement changes, and convergence patterns from CDR data.</p>
      </div>

      {/* Pattern Type Cards */}
      <div className="pattern-types animate-fade-in-up">
        {Object.entries(patternConfig).map(([type, config]) => {
          const Icon = config.icon;
          const count = patternCounts[type];
          return (
            <div key={type}
              className={`pattern-type-card ${filterPattern === type ? 'active' : ''}`}
              onClick={() => setFilterPattern(filterPattern === type ? 'all' : type)}
              style={filterPattern === type ? { borderColor: config.color, background: `${config.color}08` } : {}}>
              <div className="pattern-type-icon" style={{ color: config.color, background: `${config.color}15` }}>
                <Icon size={22} />
              </div>
              <div className="pattern-type-info">
                <span className="pattern-type-count">{count}</span>
                <span className="pattern-type-label">{config.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Severity Filter */}
      <div className="movement-filters animate-fade-in-up delay-1">
        <span className="filter-label">Severity:</span>
        <div className="filter-tabs">
          {['all', 'high', 'medium', 'low'].map(s => (
            <button key={s}
              className={`filter-tab ${filterSeverity === s ? 'active' : ''}`}
              onClick={() => setFilterSeverity(s)}
              style={filterSeverity === s && s !== 'all' ? {
                background: s === 'high' ? 'var(--accent-danger)' : s === 'medium' ? 'var(--accent-warning)' : 'var(--accent-success)'
              } : {}}>
              {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Pattern Cards */}
      <div className="patterns-list animate-fade-in-up delay-2">
        {filtered.map((pattern, i) => {
          const config = patternConfig[pattern.pattern] || { icon: Route, color: 'var(--accent-primary)', label: 'Unknown' };
          const Icon = config.icon;
          const suspect = suspects.find(s => s.name === pattern.suspect);

          return (
            <div key={i} className={`pattern-card animate-fade-in-up delay-${Math.min(i + 1, 6)}`}>
              <div className="pattern-card-left" style={{ borderColor: config.color }}>
                <div className="pattern-icon" style={{ color: config.color, background: `${config.color}12` }}>
                  <Icon size={24} />
                </div>
                <span className="pattern-label" style={{ color: config.color }}>{config.label}</span>
              </div>

              <div className="pattern-card-body">
                <div className="pattern-card-header">
                  <div className="pattern-suspect">
                    <div className="pattern-avatar" style={{
                      background: `${pattern.severity === 'high' ? 'var(--accent-danger)' : pattern.severity === 'medium' ? 'var(--accent-warning)' : 'var(--accent-success)'}20`,
                      color: pattern.severity === 'high' ? 'var(--accent-danger)' : pattern.severity === 'medium' ? 'var(--accent-warning)' : 'var(--accent-success)'
                    }}>
                      {pattern.suspect.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3>{pattern.suspect}</h3>
                      <span className="text-xs text-muted">{suspect?.phone || 'Unknown'}</span>
                    </div>
                  </div>
                  <span className={`badge badge-${pattern.severity}`}>{pattern.severity}</span>
                </div>

                <p className="pattern-description">{pattern.description}</p>

                <div className="pattern-details">
                  <div className="pattern-detail">
                    <MapPin size={14} />
                    <span><strong>Location:</strong> {pattern.location}</span>
                  </div>
                  <div className="pattern-detail">
                    <Clock size={14} />
                    <span><strong>Timeframe:</strong> {pattern.timeframe}</span>
                  </div>
                  {pattern.visits && (
                    <div className="pattern-detail">
                      <RotateCw size={14} />
                      <span><strong>Visit Count:</strong> {pattern.visits}</span>
                    </div>
                  )}
                  {pattern.times && (
                    <div className="pattern-detail">
                      <Clock size={14} />
                      <span><strong>Common Times:</strong></span>
                      <div className="pattern-times">
                        {pattern.times.map((t, ti) => (
                          <span key={ti} className="time-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="empty-state">
          <Route size={48} />
          <h3>No patterns match your filters</h3>
          <p>Try adjusting the pattern type or severity filters.</p>
        </div>
      )}

      <style>{`
        .pattern-types {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-bottom: 20px;
        }
        .pattern-type-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 20px;
          background: var(--bg-card);
          border: 2px solid var(--border-primary);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .pattern-type-card:hover {
          border-color: var(--border-secondary);
          transform: translateY(-1px);
        }
        .pattern-type-card.active {
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }
        .pattern-type-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .pattern-type-count {
          font-size: 1.5rem;
          font-weight: 800;
          display: block;
        }
        .pattern-type-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .movement-filters {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .patterns-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .pattern-card {
          display: flex;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: all var(--transition-base);
        }
        .pattern-card:hover {
          border-color: var(--border-secondary);
          box-shadow: var(--shadow-glow);
        }
        .pattern-card-left {
          width: 100px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--bg-tertiary);
          border-right: 2px solid;
          padding: 20px 12px;
          flex-shrink: 0;
        }
        .pattern-icon {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pattern-label {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          text-align: center;
        }
        .pattern-card-body {
          flex: 1;
          padding: 20px 24px;
        }
        .pattern-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .pattern-suspect {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .pattern-avatar {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 800;
          flex-shrink: 0;
        }
        .pattern-card-header h3 {
          font-size: 0.95rem;
          font-weight: 700;
        }
        .pattern-description {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 14px;
        }
        .pattern-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-top: 14px;
          border-top: 1px solid var(--border-primary);
        }
        .pattern-detail {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .pattern-detail svg {
          color: var(--text-tertiary);
          flex-shrink: 0;
        }
        .pattern-times {
          display: flex;
          gap: 4px;
        }
        .time-tag {
          padding: 2px 8px;
          background: var(--bg-elevated);
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--accent-secondary);
        }
        @media (max-width: 768px) {
          .pattern-types { grid-template-columns: repeat(2, 1fr); }
          .pattern-card { flex-direction: column; }
          .pattern-card-left {
            width: 100%;
            flex-direction: row;
            border-right: none;
            border-bottom: 2px solid;
            padding: 12px 20px;
          }
        }
      `}</style>
    </div>
  );
}
