import { useData } from '../context/DataContext';
import { Brain, Link2, MapPin, DollarSign, MessageSquare, Globe, BarChart3, AlertTriangle, Zap, TrendingUp, Network, Shield } from 'lucide-react';
import { useState } from 'react';

const insightIcons = {
  connection: Link2,
  movement: MapPin,
  financial: DollarSign,
  communication: MessageSquare,
  location: Globe,
  pattern: BarChart3,
  anomaly: AlertTriangle,
  network: Network,
};

const insightColors = {
  connection: 'var(--accent-primary)',
  movement: 'var(--accent-warning)',
  financial: 'var(--accent-success)',
  communication: 'var(--accent-secondary)',
  location: 'var(--accent-tertiary)',
  pattern: 'var(--accent-primary)',
  anomaly: 'var(--accent-danger)',
  network: 'var(--accent-secondary)',
};

export default function AIInsights() {
  const { aiInsights } = useData();
  const [filterType, setFilterType] = useState('all');
  const types = ['all', ...new Set(aiInsights.map(i => i.type))];

  const filtered = filterType === 'all' ? aiInsights : aiInsights.filter(i => i.type === filterType);

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>AI Insight Engine</h1>
        <p>Machine-learning generated insights from cross-referencing all evidence sources.</p>
      </div>

      {/* AI Summary */}
      <div className="insights-hero animate-fade-in-up">
        <div className="insights-hero-icon">
          <Brain size={40} />
          <div className="insights-pulse" />
        </div>
        <div className="insights-hero-text">
          <h2>{aiInsights.length} Insights Generated</h2>
          <p>AI engine has analyzed {aiInsights.length} patterns across CCTV, call records, CDR data, and financial records.</p>
        </div>
        <div className="insights-hero-stats">
          <div className="hero-stat">
            <Zap size={16} />
            <span>{aiInsights.filter(i => i.severity === 'high').length} Critical</span>
          </div>
          <div className="hero-stat">
            <TrendingUp size={16} />
            <span>{Math.round(aiInsights.reduce((a, i) => a + i.confidence, 0) / aiInsights.length)}% Avg Confidence</span>
          </div>
        </div>
      </div>

      {/* Type Filters */}
      <div className="insights-filters animate-fade-in-up delay-1">
        {types.map(t => (
          <button key={t} className={`insight-filter ${filterType === t ? 'active' : ''}`}
            onClick={() => setFilterType(t)}
            style={filterType === t && t !== 'all' ? { borderColor: insightColors[t], color: insightColors[t] } : {}}>
            {t === 'all' ? '🔍 All' : `${t.charAt(0).toUpperCase() + t.slice(1)}`}
          </button>
        ))}
      </div>

      {/* Insight Cards */}
      <div className="insights-grid animate-fade-in-up delay-2">
        {filtered.map((insight, i) => {
          const Icon = insightIcons[insight.type] || Brain;
          const color = insightColors[insight.type] || 'var(--accent-primary)';

          return (
            <div key={insight.id} className={`insight-card animate-fade-in-up delay-${Math.min(i + 1, 6)}`}
              style={{ '--insight-color': color }}>
              <div className="insight-header">
                <div className="insight-icon" style={{ color, background: `${color}15` }}>
                  <Icon size={22} />
                </div>
                <div className="insight-meta">
                  <span className="insight-type-tag" style={{ color, borderColor: `${color}40` }}>{insight.type}</span>
                  <span className={`badge badge-${insight.severity}`}>{insight.severity}</span>
                </div>
              </div>

              <h3 className="insight-title">{insight.title}</h3>
              <p className="insight-description">{insight.description}</p>

              <div className="insight-footer">
                <div className="insight-confidence">
                  <div className="progress-bar" style={{ flex: 1 }}>
                    <div className="progress-fill" style={{ width: `${insight.confidence}%`, background: color }} />
                  </div>
                  <span className="text-xs text-mono" style={{ color }}>{insight.confidence}%</span>
                </div>
                <div className="insight-suspects">
                  {insight.suspects.map(s => (
                    <span key={s} className="tag">{s.split(' ')[0]}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .insights-hero {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 28px 32px;
          background: linear-gradient(135deg, var(--bg-card), var(--bg-tertiary));
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;
        }
        .insights-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary), var(--accent-tertiary));
        }
        .insights-hero-icon {
          position: relative;
          width: 72px;
          height: 72px;
          background: rgba(59,130,246,0.1);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        .insights-pulse {
          position: absolute;
          inset: -4px;
          border: 2px solid var(--accent-primary);
          border-radius: var(--radius-lg);
          opacity: 0.3;
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .insights-hero-text {
          flex: 1;
        }
        .insights-hero-text h2 {
          font-size: 1.3rem;
          font-weight: 800;
          margin-bottom: 4px;
        }
        .insights-hero-text p {
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
        .insights-hero-stats {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .hero-stat {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 14px;
          background: var(--bg-card);
          border-radius: var(--radius-md);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-secondary);
        }
        .insights-filters {
          display: flex;
          gap: 8px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .insight-filter {
          padding: 8px 16px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .insight-filter:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
        .insight-filter.active {
          background: var(--bg-elevated);
          font-weight: 600;
        }
        .insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 16px;
        }
        .insight-card {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          padding: 24px;
          transition: all var(--transition-base);
          position: relative;
          overflow: hidden;
        }
        .insight-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--insight-color);
          opacity: 0;
          transition: opacity var(--transition-base);
        }
        .insight-card:hover {
          border-color: var(--border-secondary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }
        .insight-card:hover::after { opacity: 1; }
        .insight-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .insight-icon {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .insight-meta {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .insight-type-tag {
          padding: 3px 10px;
          border: 1px solid;
          border-radius: var(--radius-full);
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .insight-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .insight-description {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .insight-footer {
          padding-top: 14px;
          border-top: 1px solid var(--border-primary);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .insight-confidence {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .insight-suspects {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}
