import { useState } from 'react';
import { useData } from '../context/DataContext';
import { Clock, Video, Phone, MapPin, FileText, AlertTriangle, Filter, ChevronDown } from 'lucide-react';

const typeConfig = {
  cctv: { icon: Video, color: 'var(--accent-primary)', label: 'CCTV Detection' },
  call: { icon: Phone, color: 'var(--accent-secondary)', label: 'Call Intercept' },
  location: { icon: MapPin, color: 'var(--accent-warning)', label: 'Location Ping' },
  document: { icon: FileText, color: 'var(--accent-success)', label: 'Document Analysis' },
};

const severityColors = {
  high: 'var(--accent-danger)',
  medium: 'var(--accent-warning)',
  low: 'var(--accent-success)',
};

export default function Timeline() {
  const { timelineEvents } = useData();
  const [filterType, setFilterType] = useState('all');
  const [filterSeverity, setFilterSeverity] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const filtered = timelineEvents.filter(e => {
    if (filterType !== 'all' && e.type !== filterType) return false;
    if (filterSeverity !== 'all' && e.severity !== filterSeverity) return false;
    return true;
  });

  // Group by date
  const grouped = {};
  filtered.forEach(e => {
    const date = e.time.split(' ')[0];
    if (!grouped[date]) grouped[date] = [];
    grouped[date].push(e);
  });

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Investigation Timeline</h1>
        <p>Chronological view of all events from CCTV, call logs, location pings, and document analysis.</p>
      </div>

      {/* Timeline Stats */}
      <div className="timeline-stats animate-fade-in-up">
        {Object.entries(typeConfig).map(([type, config]) => {
          const count = timelineEvents.filter(e => e.type === type).length;
          const Icon = config.icon;
          return (
            <div key={type} className="timeline-stat" onClick={() => setFilterType(filterType === type ? 'all' : type)}
              style={{ borderColor: filterType === type ? config.color : 'var(--border-primary)' }}>
              <Icon size={20} style={{ color: config.color }} />
              <div>
                <span className="timeline-stat-value">{count}</span>
                <span className="timeline-stat-label">{config.label}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="timeline-filters animate-fade-in-up delay-1">
        <div className="filter-group">
          <span className="filter-label">Type</span>
          <div className="filter-tabs">
            {['all', 'cctv', 'call', 'location', 'document'].map(t => (
              <button key={t} className={`filter-tab ${filterType === t ? 'active' : ''}`}
                onClick={() => setFilterType(t)}>
                {t === 'all' ? 'All' : typeConfig[t]?.label || t}
              </button>
            ))}
          </div>
        </div>
        <div className="filter-group">
          <span className="filter-label">Severity</span>
          <div className="filter-tabs">
            {['all', 'high', 'medium', 'low'].map(s => (
              <button key={s} className={`filter-tab ${filterSeverity === s ? 'active' : ''}`}
                onClick={() => setFilterSeverity(s)}
                style={filterSeverity === s && s !== 'all' ? { background: severityColors[s] } : {}}>
                {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="timeline-container animate-fade-in-up delay-2">
        {Object.entries(grouped).map(([date, events]) => (
          <div key={date} className="timeline-date-group">
            <div className="timeline-date-header">
              <span className="timeline-date-badge">{new Date(date).toLocaleDateString('en-IN', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}</span>
              <span className="timeline-date-count">{events.length} events</span>
            </div>

            <div className="timeline-track">
              {events.map((event, i) => {
                const config = typeConfig[event.type];
                const Icon = config.icon;
                const isExpanded = expandedId === event.id;

                return (
                  <div key={event.id} className={`timeline-event animate-fade-in-up delay-${Math.min(i + 1, 6)}`}
                    onClick={() => setExpandedId(isExpanded ? null : event.id)}>
                    <div className="timeline-time">
                      <span className="time-value">{event.time.split(' ')[1]}</span>
                    </div>

                    <div className="timeline-connector">
                      <div className="timeline-dot" style={{ background: config.color, boxShadow: `0 0 10px ${config.color}60` }} />
                      <div className="timeline-line" />
                    </div>

                    <div className={`timeline-card ${isExpanded ? 'expanded' : ''}`}>
                      <div className="timeline-card-header">
                        <div className="timeline-icon" style={{ color: config.color, background: `${config.color}15` }}>
                          <Icon size={18} />
                        </div>
                        <div className="timeline-card-info">
                          <h4>{event.title}</h4>
                          <div className="timeline-meta">
                            <span className={`badge badge-${event.severity}`}>{event.severity}</span>
                            <span className="tag">{config.label}</span>
                            {event.suspect && <span className="text-xs text-muted">Suspect: {event.suspect}</span>}
                          </div>
                        </div>
                        <ChevronDown size={16} className={`timeline-chevron ${isExpanded ? 'rotated' : ''}`} />
                      </div>

                      {isExpanded && (
                        <div className="timeline-card-body animate-fade-in">
                          <p>{event.description}</p>
                          {event.location && (
                            <div className="timeline-location">
                              <MapPin size={14} />
                              <span>{event.location}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .timeline-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }
        .timeline-stat {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          background: var(--bg-card);
          border: 2px solid var(--border-primary);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .timeline-stat:hover {
          background: var(--bg-hover);
        }
        .timeline-stat-value {
          font-size: 1.25rem;
          font-weight: 800;
          display: block;
        }
        .timeline-stat-label {
          font-size: 0.7rem;
          color: var(--text-tertiary);
          display: block;
        }
        .timeline-filters {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .filter-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .filter-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .timeline-container {
          position: relative;
        }
        .timeline-date-group {
          margin-bottom: 32px;
        }
        .timeline-date-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .timeline-date-badge {
          padding: 6px 16px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .timeline-date-count {
          font-size: 0.75rem;
          color: var(--text-tertiary);
        }
        .timeline-track {
          position: relative;
          padding-left: 20px;
        }
        .timeline-event {
          display: flex;
          gap: 16px;
          margin-bottom: 8px;
        }
        .timeline-time {
          width: 60px;
          flex-shrink: 0;
          padding-top: 14px;
        }
        .time-value {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .timeline-connector {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex-shrink: 0;
          padding-top: 14px;
        }
        .timeline-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
          z-index: 1;
        }
        .timeline-line {
          width: 2px;
          flex: 1;
          background: var(--border-primary);
          margin-top: 4px;
        }
        .timeline-card {
          flex: 1;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          padding: 14px 18px;
          cursor: pointer;
          transition: all var(--transition-fast);
          margin-bottom: 4px;
        }
        .timeline-card:hover {
          border-color: var(--border-secondary);
          background: var(--bg-hover);
        }
        .timeline-card.expanded {
          border-color: var(--border-accent);
        }
        .timeline-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .timeline-icon {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .timeline-card-info {
          flex: 1;
          min-width: 0;
        }
        .timeline-card-info h4 {
          font-size: 0.88rem;
          font-weight: 600;
          margin-bottom: 4px;
        }
        .timeline-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }
        .timeline-chevron {
          color: var(--text-tertiary);
          transition: transform var(--transition-fast);
          flex-shrink: 0;
        }
        .timeline-chevron.rotated {
          transform: rotate(180deg);
        }
        .timeline-card-body {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border-primary);
        }
        .timeline-card-body p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }
        .timeline-location {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 8px;
          font-size: 0.8rem;
          color: var(--accent-warning);
        }
        @media (max-width: 768px) {
          .timeline-stats { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  );
}
