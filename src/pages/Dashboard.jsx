import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import {
  FileStack, Users, AlertTriangle, MapPin, Activity, TrendingUp,
  Clock, Upload, ScanSearch, Link2, Eye, ChevronRight, Database
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const { user } = useAuth();
  const { evidenceFiles, suspects, recentActivity, timelineEvents } = useData();
  const navigate = useNavigate();
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateStats(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const highRiskCount = suspects.filter(s => s.risk === 'high').length;
  const analyzedCount = evidenceFiles.filter(e => e.status === 'analyzed').length;
  const hasData = evidenceFiles.length > 0 || suspects.length > 0;

  const stats = [
    { label: 'Total Evidence', value: evidenceFiles.length, icon: FileStack, color: 'blue', change: hasData ? `${evidenceFiles.length} files` : 'No data', positive: hasData },
    { label: 'Active Suspects', value: suspects.length, icon: Users, color: 'purple', change: hasData ? `${suspects.length} profiled` : 'No data', positive: hasData },
    { label: 'High Risk Alerts', value: highRiskCount, icon: AlertTriangle, color: 'red', change: hasData ? `${highRiskCount} flagged` : 'No data', positive: false },
    { label: 'Cases Analyzed', value: analyzedCount, icon: ScanSearch, color: 'green', change: hasData ? `${evidenceFiles.length > 0 ? Math.round(analyzedCount / evidenceFiles.length * 100) : 0}% complete` : 'No data', positive: hasData },
  ];

  const quickActions = [
    { label: 'Import Datasets', icon: Database, path: '/import', desc: 'Load CSV/JSON data files' },
    { label: 'Upload Evidence', icon: Upload, path: '/evidence', desc: 'Add new files to case' },
    { label: 'View Analysis', icon: ScanSearch, path: '/analysis', desc: 'AI detection results' },
    { label: 'Network Graph', icon: Link2, path: '/network', desc: 'Suspect relationships' },
    { label: 'Geo Tracking', icon: MapPin, path: '/geolocation', desc: 'CDR movement map' },
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'upload': return <Upload size={16} />;
      case 'analysis': return <ScanSearch size={16} />;
      case 'alert': return <AlertTriangle size={16} />;
      case 'link': return <Link2 size={16} />;
      case 'financial': return <TrendingUp size={16} />;
      default: return <Activity size={16} />;
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'alert': return 'var(--accent-danger)';
      case 'analysis': return 'var(--accent-success)';
      case 'upload': return 'var(--accent-primary)';
      case 'link': return 'var(--accent-secondary)';
      case 'financial': return 'var(--accent-warning)';
      default: return 'var(--text-tertiary)';
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="flex justify-between items-center">
          <div>
            <h1>Command Center</h1>
            <p>Welcome back, {user?.name || 'Officer'}. Case overview and real-time intelligence feed.</p>
          </div>
          <div className="dashboard-time">
            <Clock size={16} />
            <span>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </div>

      {/* No Data Banner */}
      {!hasData && (
        <div className="no-data-banner animate-fade-in-up">
          <div className="no-data-icon">
            <Database size={32} />
          </div>
          <div className="no-data-text">
            <h3>No Datasets Loaded</h3>
            <p>Import your investigation datasets (CSV/JSON) to populate the dashboard with real data.</p>
          </div>
          <button className="btn btn-primary" onClick={() => navigate('/import')}>
            <Database size={16} /> Import Datasets
          </button>
        </div>
      )}

      {/* Stats */}
      <div className="grid-4" style={{ marginBottom: 28 }}>
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className={`stat-card animate-fade-in-up delay-${i + 1}`}>
              <div className={`stat-icon ${stat.color}`}>
                <Icon size={24} />
              </div>
              <div className="stat-info">
                <h3>{stat.label}</h3>
                <div className="stat-value">{animateStats ? stat.value : '—'}</div>
                <div className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                  <TrendingUp size={12} />
                  {stat.change}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="dashboard-grid">
        {/* Quick Actions */}
        <div className="card animate-fade-in-up delay-3">
          <div className="card-header">
            <h2><Activity size={18} /> Quick Actions</h2>
          </div>
          <div className="quick-actions-grid">
            {quickActions.map(action => {
              const Icon = action.icon;
              return (
                <button key={action.path} className="quick-action-btn" onClick={() => navigate(action.path)}>
                  <div className="quick-action-icon">
                    <Icon size={22} />
                  </div>
                  <span className="quick-action-label">{action.label}</span>
                  <span className="quick-action-desc">{action.desc}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="card animate-fade-in-up delay-4">
          <div className="card-header">
            <h2><Clock size={18} /> Recent Activity</h2>
            <button className="btn btn-ghost btn-sm" onClick={() => navigate('/timeline')}>
              View All <ChevronRight size={14} />
            </button>
          </div>
          <div className="activity-feed">
            {recentActivity.length === 0 ? (
              <div className="empty-state-sm">
                <Clock size={24} />
                <p>No activity yet. Import datasets to begin.</p>
              </div>
            ) : (
              recentActivity.map((item, i) => (
                <div key={i} className="activity-item">
                  <div className="activity-icon" style={{ color: getActivityColor(item.type), background: `${getActivityColor(item.type)}15` }}>
                    {getActivityIcon(item.type)}
                  </div>
                  <div className="activity-content">
                    <span className="activity-action">{item.action}</span>
                    <span className="activity-detail">{item.detail}</span>
                  </div>
                  <span className="activity-time">{item.time}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Suspects Overview */}
        <div className="card animate-fade-in-up delay-5">
          <div className="card-header">
            <h2><Users size={18} /> Top Suspects</h2>
            <button className="btn btn-ghost btn-sm" onClick={() => navigate('/scores')}>
              View All <ChevronRight size={14} />
            </button>
          </div>
          <div className="suspects-list">
            {suspects.filter(s => s.risk === 'high').length === 0 ? (
              <div className="empty-state-sm">
                <Users size={24} />
                <p>No suspects loaded. Import suspects dataset.</p>
              </div>
            ) : (
              suspects.filter(s => s.risk === 'high').map(s => (
                <div key={s.id} className="suspect-item">
                  <div className="suspect-avatar">{s.name.split(' ').map(n => n[0]).join('')}</div>
                  <div className="suspect-details">
                    <span className="suspect-name">{s.name}</span>
                    <span className="suspect-location">{s.lastSeen}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <span className={`badge badge-${s.risk}`}>{s.risk}</span>
                    <span className="score-mini">{s.score}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Evidence Summary */}
        <div className="card animate-fade-in-up delay-6">
          <div className="card-header">
            <h2><FileStack size={18} /> Evidence Summary</h2>
            <button className="btn btn-ghost btn-sm" onClick={() => navigate('/evidence')}>
              Upload <ChevronRight size={14} />
            </button>
          </div>
          <div className="evidence-summary">
            {evidenceFiles.length === 0 ? (
              <div className="empty-state-sm">
                <FileStack size={24} />
                <p>No evidence loaded. Import evidence dataset.</p>
              </div>
            ) : (
              <>
                {[
                  { type: 'Video', count: evidenceFiles.filter(e => e.type === 'video').length, color: 'var(--accent-primary)' },
                  { type: 'Images', count: evidenceFiles.filter(e => e.type === 'image').length, color: 'var(--accent-secondary)' },
                  { type: 'Documents', count: evidenceFiles.filter(e => e.type === 'pdf').length, color: 'var(--accent-warning)' },
                  { type: 'Text/Logs', count: evidenceFiles.filter(e => e.type === 'text').length, color: 'var(--accent-success)' },
                ].map(item => (
                  <div key={item.type} className="evidence-type-row">
                    <div className="evidence-type-info">
                      <span className="evidence-type-dot" style={{ background: item.color }} />
                      <span>{item.type}</span>
                    </div>
                    <span className="evidence-type-count">{item.count} files</span>
                    <div className="progress-bar" style={{ width: 80 }}>
                      <div className="progress-fill" style={{ width: `${evidenceFiles.length > 0 ? item.count / evidenceFiles.length * 100 : 0}%`, background: item.color }} />
                    </div>
                  </div>
                ))}
                <div className="section-divider" />
                <div className="evidence-total">
                  <span>Total Files</span>
                  <span className="font-bold">{evidenceFiles.length}</span>
                </div>
                <div className="evidence-total">
                  <span>Analyzed</span>
                  <span style={{ color: 'var(--accent-success)' }}>{analyzedCount} / {evidenceFiles.length}</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .no-data-banner {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px 28px;
          background: linear-gradient(135deg, var(--bg-card), rgba(59,130,246,0.06));
          border: 1px dashed var(--accent-primary);
          border-radius: var(--radius-lg);
          margin-bottom: 24px;
        }
        .no-data-icon {
          width: 56px;
          height: 56px;
          background: rgba(59,130,246,0.1);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        .no-data-text { flex: 1; }
        .no-data-text h3 { font-size: 1rem; font-weight: 700; margin-bottom: 4px; }
        .no-data-text p { font-size: 0.85rem; color: var(--text-secondary); }
        .empty-state-sm {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 32px 16px;
          color: var(--text-tertiary);
          text-align: center;
        }
        .empty-state-sm p { font-size: 0.8rem; }
        .dashboard-time {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-tertiary);
          font-size: 0.85rem;
          font-family: var(--font-mono);
        }
        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        @media (max-width: 1100px) {
          .dashboard-grid { grid-template-columns: 1fr; }
        }
        .quick-actions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .quick-action-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          padding: 20px 12px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .quick-action-btn:hover {
          background: var(--bg-elevated);
          border-color: var(--accent-primary);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59,130,246,0.15);
        }
        .quick-action-icon {
          width: 44px;
          height: 44px;
          background: rgba(59,130,246,0.1);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
        }
        .quick-action-label {
          font-size: 0.85rem;
          font-weight: 600;
        }
        .quick-action-desc {
          font-size: 0.7rem;
          color: var(--text-tertiary);
        }
        .activity-feed {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .activity-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid var(--border-primary);
        }
        .activity-item:last-child { border-bottom: none; }
        .activity-icon {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .activity-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .activity-action {
          font-size: 0.85rem;
          font-weight: 600;
        }
        .activity-detail {
          font-size: 0.75rem;
          color: var(--text-tertiary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .activity-time {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          white-space: nowrap;
        }
        .suspects-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .suspect-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          border: 1px solid var(--border-primary);
          transition: all var(--transition-fast);
        }
        .suspect-item:hover {
          border-color: var(--border-secondary);
          background: var(--bg-elevated);
        }
        .suspect-avatar {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, var(--accent-danger), #dc2626);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }
        .suspect-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .suspect-name {
          font-size: 0.9rem;
          font-weight: 600;
        }
        .suspect-location {
          font-size: 0.75rem;
          color: var(--text-tertiary);
        }
        .score-mini {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-danger);
        }
        .evidence-summary {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .evidence-type-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .evidence-type-info {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          font-size: 0.85rem;
        }
        .evidence-type-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .evidence-type-count {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          min-width: 50px;
          text-align: right;
        }
        .evidence-total {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }
      `}</style>
    </div>
  );
}
