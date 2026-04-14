import { useData } from '../context/DataContext';
import { Gauge, Phone, MapPin, Camera, TrendingUp, AlertTriangle, ChevronRight, Shield } from 'lucide-react';
import { useState } from 'react';

export default function SuspicionScore() {
  const { suspects, cdrData } = useData();
  const [selectedSuspect, setSelectedSuspect] = useState(null);

  const getScoreColor = (score) => {
    if (score >= 71) return 'var(--accent-danger)';
    if (score >= 31) return 'var(--accent-warning)';
    return 'var(--accent-success)';
  };

  const getRiskLabel = (score) => {
    if (score >= 71) return 'High Risk';
    if (score >= 31) return 'Medium Risk';
    return 'Low Risk';
  };

  const getFactors = (suspect) => {
    const calls = cdrData.filter(c => c.caller === suspect.name || c.receiver === suspect.name).length;
    const movement = Object.keys(cdrData.filter(c => c.caller === suspect.name).reduce((acc, c) => { acc[c.towerId] = true; return acc; }, {})).length;
    return {
      calls: { value: calls, max: 15, label: 'Call Frequency', weight: 40 },
      movement: { value: movement, max: 7, label: 'Movement Range', weight: 30 },
      detections: { value: suspect.risk === 'high' ? 4 : suspect.risk === 'medium' ? 2 : 1, max: 5, label: 'CCTV Detections', weight: 30 },
    };
  };

  const sorted = [...suspects].sort((a, b) => b.score - a.score);

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Suspicion Scores</h1>
        <p>Composite scoring system based on call frequency, movement patterns, and detection count.</p>
      </div>

      {/* Score Distribution */}
      <div className="score-distribution animate-fade-in-up">
        <div className="score-dist-item">
          <div className="score-dist-bar">
            <div className="score-dist-fill" style={{ width: `${(suspects.filter(s => s.risk === 'high').length / suspects.length) * 100}%`, background: 'var(--accent-danger)' }} />
          </div>
          <span className="score-dist-label">High Risk (71-100)</span>
          <span className="score-dist-count" style={{ color: 'var(--accent-danger)' }}>{suspects.filter(s => s.risk === 'high').length}</span>
        </div>
        <div className="score-dist-item">
          <div className="score-dist-bar">
            <div className="score-dist-fill" style={{ width: `${(suspects.filter(s => s.risk === 'medium').length / suspects.length) * 100}%`, background: 'var(--accent-warning)' }} />
          </div>
          <span className="score-dist-label">Medium Risk (31-70)</span>
          <span className="score-dist-count" style={{ color: 'var(--accent-warning)' }}>{suspects.filter(s => s.risk === 'medium').length}</span>
        </div>
        <div className="score-dist-item">
          <div className="score-dist-bar">
            <div className="score-dist-fill" style={{ width: `${(suspects.filter(s => s.risk === 'low').length / suspects.length) * 100}%`, background: 'var(--accent-success)' }} />
          </div>
          <span className="score-dist-label">Low Risk (0-30)</span>
          <span className="score-dist-count" style={{ color: 'var(--accent-success)' }}>{suspects.filter(s => s.risk === 'low').length}</span>
        </div>
      </div>

      <div className="score-layout">
        {/* Cards Grid */}
        <div className="score-cards">
          {sorted.map((suspect, i) => {
            const factors = getFactors(suspect);
            const isSelected = selectedSuspect?.id === suspect.id;
            const color = getScoreColor(suspect.score);

            return (
              <div key={suspect.id}
                className={`score-card animate-fade-in-up delay-${Math.min(i + 1, 6)} ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedSuspect(isSelected ? null : suspect)}
                style={{ borderColor: isSelected ? color : undefined }}
              >
                <div className="score-card-top">
                  <div className="score-avatar" style={{ background: `${color}20`, color }}>
                    {suspect.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="score-gauge">
                    <svg viewBox="0 0 80 80" className="gauge-svg">
                      <circle cx="40" cy="40" r="34" fill="none" stroke="var(--bg-tertiary)" strokeWidth="6" />
                      <circle cx="40" cy="40" r="34" fill="none" stroke={color} strokeWidth="6"
                        strokeDasharray={`${(suspect.score / 100) * 213.6} 213.6`}
                        strokeLinecap="round" transform="rotate(-90 40 40)"
                        style={{ transition: 'stroke-dasharray 1s ease-out' }} />
                    </svg>
                    <span className="gauge-value" style={{ color }}>{suspect.score}</span>
                  </div>
                </div>

                <div className="score-card-body">
                  <h3>{suspect.name}</h3>
                  <span className="text-xs text-muted">{suspect.phone}</span>
                  <div className="score-badges">
                    <span className={`badge badge-${suspect.risk}`}>{getRiskLabel(suspect.score)}</span>
                    <span className="tag">{suspect.alias}</span>
                  </div>
                </div>

                <div className="score-factors">
                  {Object.values(factors).map((factor, fi) => (
                    <div key={fi} className="score-factor">
                      <div className="factor-header">
                        <span className="factor-label">{factor.label}</span>
                        <span className="text-xs text-mono">{factor.value}/{factor.max}</span>
                      </div>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{
                          width: `${Math.min((factor.value / factor.max) * 100, 100)}%`,
                          background: (factor.value / factor.max) > 0.7 ? 'var(--accent-danger)' : (factor.value / factor.max) > 0.4 ? 'var(--accent-warning)' : 'var(--accent-success)'
                        }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="score-card-footer">
                  <span className="text-xs text-muted"><MapPin size={12} /> {suspect.lastSeen}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .score-distribution {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
          padding: 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
        }
        .score-dist-item {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .score-dist-bar {
          flex: 1;
          height: 8px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-full);
          overflow: hidden;
        }
        .score-dist-fill {
          height: 100%;
          border-radius: var(--radius-full);
          transition: width 1s ease-out;
        }
        .score-dist-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          min-width: 130px;
        }
        .score-dist-count {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 1.1rem;
        }
        .score-layout {
          display: flex;
          gap: 20px;
        }
        .score-cards {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 16px;
          flex: 1;
        }
        .score-card {
          background: var(--bg-card);
          border: 2px solid var(--border-primary);
          border-radius: var(--radius-lg);
          padding: 20px;
          cursor: pointer;
          transition: all var(--transition-base);
        }
        .score-card:hover {
          border-color: var(--border-secondary);
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }
        .score-card.selected {
          box-shadow: 0 0 20px rgba(59,130,246,0.2);
        }
        .score-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .score-avatar {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 800;
        }
        .score-gauge {
          position: relative;
          width: 68px;
          height: 68px;
        }
        .gauge-svg {
          width: 100%;
          height: 100%;
        }
        .gauge-value {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 800;
          font-family: var(--font-mono);
        }
        .score-card-body h3 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 2px;
        }
        .score-badges {
          display: flex;
          gap: 6px;
          margin-top: 8px;
        }
        .score-factors {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid var(--border-primary);
        }
        .score-factor { }
        .factor-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4px;
        }
        .factor-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }
        .score-card-footer {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--border-primary);
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .score-card-footer .text-xs {
          display: flex;
          align-items: center;
          gap: 4px;
        }
      `}</style>
    </div>
  );
}
