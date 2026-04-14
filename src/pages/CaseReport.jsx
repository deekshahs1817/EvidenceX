import { useState } from 'react';
import { useData } from '../context/DataContext';
import { FileText, Download, Printer, Shield, Users, Clock, AlertTriangle, Link2, Brain, CheckCircle, BarChart3 } from 'lucide-react';

export default function CaseReport() {
  const { suspects, evidenceFiles, analysisResults, crossEvidenceLinks, aiInsights, cdrData, timelineEvents } = useData();
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const caseInfo = {
    id: 'CASE-2026-C001',
    title: 'Operation Shadow Net',
    officer: 'Inspector Arjun Mehta',
    badge: 'IPS-4521',
    dateOpened: 'March 10, 2026',
    lastUpdated: new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' }),
    status: 'Active Investigation',
    priority: 'HIGH',
  };

  const stats = {
    totalEvidence: evidenceFiles.length,
    analyzed: evidenceFiles.filter(e => e.status === 'analyzed').length,
    suspects: suspects.length,
    highRisk: suspects.filter(s => s.risk === 'high').length,
    crossLinks: crossEvidenceLinks.length,
    insights: aiInsights.length,
    callRecords: cdrData.length,
    events: timelineEvents.length,
  };

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 2500);
  };

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Case Report Generator</h1>
        <p>Compile a comprehensive investigation report from all analyzed evidence and AI findings.</p>
      </div>

      {/* Case Info Banner */}
      <div className="report-banner animate-fade-in-up">
        <div className="report-badge">
          <Shield size={32} />
        </div>
        <div className="report-case-info">
          <div className="report-case-id">{caseInfo.id}</div>
          <h2>{caseInfo.title}</h2>
          <div className="report-meta">
            <span>Officer: {caseInfo.officer}</span>
            <span>Badge: {caseInfo.badge}</span>
            <span>Opened: {caseInfo.dateOpened}</span>
          </div>
        </div>
        <div className="report-status">
          <span className="badge badge-high">{caseInfo.priority}</span>
          <span className="report-status-text">{caseInfo.status}</span>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="report-stats animate-fade-in-up delay-1">
        {[
          { icon: FileText, label: 'Evidence Files', value: `${stats.analyzed}/${stats.totalEvidence}`, sub: 'Analyzed' },
          { icon: Users, label: 'Suspects', value: stats.suspects, sub: `${stats.highRisk} High Risk` },
          { icon: Link2, label: 'Cross-Links', value: stats.crossLinks, sub: 'Connections' },
          { icon: Brain, label: 'AI Insights', value: stats.insights, sub: 'Generated' },
          { icon: Clock, label: 'Timeline Events', value: stats.events, sub: 'Tracked' },
          { icon: BarChart3, label: 'CDR Records', value: stats.callRecords, sub: 'Analyzed' },
        ].map((stat, i) => (
          <div key={i} className="report-stat-card">
            <stat.icon size={20} className="report-stat-icon" />
            <div className="report-stat-value">{stat.value}</div>
            <div className="report-stat-label">{stat.label}</div>
            <div className="text-xs text-muted">{stat.sub}</div>
          </div>
        ))}
      </div>

      {/* Report Sections Preview */}
      <div className="report-sections animate-fade-in-up delay-2">
        <h3>Report Sections</h3>
        <div className="report-section-list">
          {[
            { title: 'Executive Summary', desc: 'Case overview, key findings, and recommended actions', status: 'ready' },
            { title: 'Evidence Inventory', desc: `${stats.totalEvidence} evidence files catalogued and analyzed`, status: 'ready' },
            { title: 'Suspect Profiles', desc: `${stats.suspects} suspects profiled with risk assessments`, status: 'ready' },
            { title: 'AI Analysis Results', desc: 'Object detection, entity extraction, and risk scoring', status: 'ready' },
            { title: 'Network Analysis', desc: 'Suspect relationship mapping and connection strengths', status: 'ready' },
            { title: 'Timeline Reconstruction', desc: `${stats.events} events reconstructed chronologically`, status: 'ready' },
            { title: 'Geo-Location Analysis', desc: 'CDR-based movement tracking and tower triangulation', status: 'ready' },
            { title: 'Cross-Evidence Linking', desc: `${stats.crossLinks} automated evidence connections verified`, status: 'ready' },
            { title: 'AI Insights & Recommendations', desc: `${stats.insights} machine-generated intelligence points`, status: 'ready' },
            { title: 'Appendices', desc: 'Raw data tables, methodology notes, and glossary', status: 'ready' },
          ].map((section, i) => (
            <div key={i} className="report-section-item">
              <div className="report-section-num">{i + 1}</div>
              <div className="report-section-info">
                <span className="report-section-title">{section.title}</span>
                <span className="text-xs text-muted">{section.desc}</span>
              </div>
              <CheckCircle size={16} style={{ color: 'var(--accent-success)' }} />
            </div>
          ))}
        </div>
      </div>

      {/* Key Findings */}
      <div className="report-findings animate-fade-in-up delay-3">
        <h3>Key Findings Summary</h3>
        <div className="findings-grid">
          {aiInsights.filter(i => i.severity === 'high').slice(0, 4).map(insight => (
            <div key={insight.id} className="finding-card">
              <div className="finding-header">
                <AlertTriangle size={16} style={{ color: 'var(--accent-danger)' }} />
                <span className="badge badge-high">Critical</span>
              </div>
              <h4>{insight.title}</h4>
              <p>{insight.description.substring(0, 120)}...</p>
              <div className="finding-meta">
                <span>Confidence: {insight.confidence}%</span>
                <span>Suspects: {insight.suspects.length}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <div className="report-actions animate-fade-in-up delay-4">
        {!generated ? (
          <button className="btn btn-primary report-generate-btn" onClick={handleGenerate} disabled={generating}>
            {generating ? (
              <>
                <div className="loading-spinner" style={{ width: 20, height: 20, borderWidth: 2 }} />
                Compiling Report...
              </>
            ) : (
              <>
                <FileText size={20} />
                Generate Full Report
              </>
            )}
          </button>
        ) : (
          <div className="report-generated">
            <CheckCircle size={28} style={{ color: 'var(--accent-success)' }} />
            <div>
              <h3>Report Generated Successfully</h3>
              <p className="text-muted">Case report compiled with {stats.totalEvidence} evidence files, {stats.suspects} suspects, and {stats.insights} AI insights.</p>
            </div>
            <div className="report-download-actions">
              <button className="btn btn-primary" onClick={() => window.print()}>
                <Printer size={16} /> Print
              </button>
              <button className="btn btn-outline" onClick={() => setGenerated(false)}>
                <Download size={16} /> Export PDF
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .report-banner {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 28px 32px;
          background: linear-gradient(135deg, var(--bg-card), rgba(59,130,246,0.08));
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          margin-bottom: 20px;
          position: relative;
          overflow: hidden;
        }
        .report-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
        }
        .report-badge {
          width: 64px;
          height: 64px;
          border-radius: var(--radius-lg);
          background: rgba(59,130,246,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-primary);
          flex-shrink: 0;
        }
        .report-case-info { flex: 1; }
        .report-case-id {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--accent-primary);
          font-weight: 600;
          margin-bottom: 4px;
        }
        .report-case-info h2 {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 6px;
        }
        .report-meta {
          display: flex;
          gap: 18px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .report-status {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 6px;
        }
        .report-status-text {
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .report-stats {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 14px;
          margin-bottom: 20px;
        }
        .report-stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          padding: 16px;
          text-align: center;
        }
        .report-stat-icon {
          color: var(--accent-primary);
          margin-bottom: 8px;
        }
        .report-stat-value {
          font-size: 1.4rem;
          font-weight: 800;
          font-family: var(--font-mono);
        }
        .report-stat-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
        }
        .report-sections {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          padding: 24px;
          margin-bottom: 20px;
        }
        .report-sections h3 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--accent-primary);
        }
        .report-section-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .report-section-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 14px;
          border-radius: var(--radius-sm);
          transition: background var(--transition-fast);
        }
        .report-section-item:hover {
          background: var(--bg-tertiary);
        }
        .report-section-num {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--bg-elevated);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-secondary);
          flex-shrink: 0;
        }
        .report-section-info { flex: 1; }
        .report-section-title {
          font-size: 0.88rem;
          font-weight: 600;
          display: block;
          margin-bottom: 2px;
        }
        .report-findings {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          padding: 24px;
          margin-bottom: 24px;
        }
        .report-findings h3 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 16px;
          color: var(--accent-danger);
        }
        .findings-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .finding-card {
          padding: 18px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-md);
          border-left: 3px solid var(--accent-danger);
        }
        .finding-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .finding-card h4 {
          font-size: 0.9rem;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .finding-card p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 10px;
        }
        .finding-meta {
          display: flex;
          gap: 14px;
          font-size: 0.7rem;
          color: var(--text-tertiary);
          font-family: var(--font-mono);
        }
        .report-actions {
          text-align: center;
          padding: 20px 0;
        }
        .report-generate-btn {
          padding: 16px 48px;
          font-size: 1rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .report-generated {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px 32px;
          background: rgba(16,185,129,0.08);
          border: 1px solid rgba(16,185,129,0.3);
          border-radius: var(--radius-lg);
        }
        .report-generated h3 {
          font-size: 1rem;
          margin-bottom: 4px;
        }
        .report-download-actions {
          display: flex;
          gap: 10px;
          margin-left: auto;
        }
        @media (max-width: 1100px) {
          .report-stats { grid-template-columns: repeat(3, 1fr); }
          .findings-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .report-stats { grid-template-columns: repeat(2, 1fr); }
          .report-banner { flex-direction: column; text-align: center; }
          .report-meta { flex-direction: column; gap: 4px; }
        }
      `}</style>
    </div>
  );
}
