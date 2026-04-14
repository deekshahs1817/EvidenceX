import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useData } from '../context/DataContext';
import {
  LayoutDashboard, Upload, ScanSearch, Network, Clock, MapPin,
  Gauge, Link2, Brain, Route, LogOut, Shield, ChevronLeft, ChevronRight,
  FileText, Database, Sun, Moon, FolderPlus, Trash2, ChevronDown, Pencil, Check, X, Camera
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const navItems = [
  { path: '/', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/import', label: 'Import Datasets', icon: Database },
  { path: '/evidence', label: 'Evidence Upload', icon: Upload },
  { path: '/cctv', label: 'CCTV Detection', icon: Camera },
  { path: '/analysis', label: 'AI Analysis', icon: ScanSearch },
  { path: '/network', label: 'Suspect Network', icon: Network },
  { path: '/timeline', label: 'Timeline View', icon: Clock },
  { path: '/geolocation', label: 'Geo-Location', icon: MapPin },
  { path: '/scores', label: 'Suspicion Scores', icon: Gauge },
  { path: '/cross-evidence', label: 'Cross-Evidence', icon: Link2 },
  { path: '/insights', label: 'AI Insights', icon: Brain },
  { path: '/movement', label: 'Movement Patterns', icon: Route },
  { path: '/report', label: 'Case Report', icon: FileText },
];

export default function Sidebar() {
  const { user, logout } = useAuth();
  const {
    theme, toggleTheme,
    investigations, activeInvestigation, activeInvestigationId,
    switchInvestigation, createInvestigation, deleteInvestigation, renameInvestigation,
  } = useData();
  const [collapsed, setCollapsed] = useState(false);
  const [showInvDropdown, setShowInvDropdown] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [showNewInput, setShowNewInput] = useState(false);
  const [newName, setNewName] = useState('');
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowInvDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleCreate = () => {
    const name = newName.trim() || `Investigation ${investigations.length + 1}`;
    createInvestigation(name);
    setNewName('');
    setShowNewInput(false);
  };

  const handleRename = (id) => {
    if (editName.trim()) {
      renameInvestigation(id, editName.trim());
    }
    setEditingId(null);
    setEditName('');
  };

  return (
    <aside className={`sidebar ${collapsed ? 'sidebar-collapsed' : ''}`}>
      <div className="sidebar-brand">
        <div className="sidebar-logo">
          <Shield size={28} strokeWidth={2.5} />
        </div>
        {!collapsed && (
          <div className="sidebar-brand-text">
            <span className="brand-name">EvidenceX</span>
            <span className="brand-tag">Investigation System</span>
          </div>
        )}
        <button className="sidebar-toggle" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Investigation Switcher */}
      {!collapsed && (
        <div className="inv-switcher" ref={dropdownRef}>
          <button className="inv-current" onClick={() => setShowInvDropdown(!showInvDropdown)}>
            <div className="inv-current-info">
              <span className="inv-current-label">Active Case</span>
              <span className="inv-current-name">{activeInvestigation?.name || 'No Investigation'}</span>
            </div>
            <ChevronDown size={14} className={`inv-chevron ${showInvDropdown ? 'open' : ''}`} />
          </button>

          {showInvDropdown && (
            <div className="inv-dropdown">
              <div className="inv-dropdown-header">
                <span>Investigations</span>
                <button className="inv-new-btn" onClick={() => setShowNewInput(true)} title="New Investigation">
                  <FolderPlus size={14} />
                </button>
              </div>

              {showNewInput && (
                <div className="inv-new-input">
                  <input
                    type="text"
                    value={newName}
                    onChange={e => setNewName(e.target.value)}
                    placeholder="Case name..."
                    autoFocus
                    onKeyDown={e => { if (e.key === 'Enter') handleCreate(); if (e.key === 'Escape') setShowNewInput(false); }}
                  />
                  <button onClick={handleCreate}><Check size={12} /></button>
                  <button onClick={() => setShowNewInput(false)}><X size={12} /></button>
                </div>
              )}

              <div className="inv-list">
                {investigations.map(inv => (
                  <div key={inv.id} className={`inv-item ${inv.id === activeInvestigationId ? 'active' : ''}`}>
                    {editingId === inv.id ? (
                      <div className="inv-edit-row">
                        <input
                          type="text"
                          value={editName}
                          onChange={e => setEditName(e.target.value)}
                          autoFocus
                          onKeyDown={e => { if (e.key === 'Enter') handleRename(inv.id); if (e.key === 'Escape') setEditingId(null); }}
                        />
                        <button onClick={() => handleRename(inv.id)}><Check size={12} /></button>
                      </div>
                    ) : (
                      <>
                        <button className="inv-item-btn" onClick={() => { switchInvestigation(inv.id); setShowInvDropdown(false); }}>
                          <span className="inv-item-name">{inv.name}</span>
                          {inv.id === activeInvestigationId && <span className="inv-active-dot" />}
                        </button>
                        <div className="inv-item-actions">
                          <button onClick={() => { setEditingId(inv.id); setEditName(inv.name); }} title="Rename">
                            <Pencil size={11} />
                          </button>
                          {investigations.length > 1 && (
                            <button onClick={() => deleteInvestigation(inv.id)} title="Delete" className="inv-delete">
                              <Trash2 size={11} />
                            </button>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <nav className="sidebar-nav">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={`sidebar-link ${isActive ? 'active' : ''}`}
              title={collapsed ? item.label : undefined}
            >
              <Icon size={20} />
              {!collapsed && <span>{item.label}</span>}
              {isActive && <div className="sidebar-active-indicator" />}
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        {/* Theme Toggle */}
        <button className="sidebar-link theme-toggle" onClick={toggleTheme} title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}>
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          {!collapsed && <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>}
        </button>

        {!collapsed && user && (
          <div className="sidebar-user">
            <div className="user-avatar">
              {user.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div className="user-info">
              <span className="user-name">{user.name}</span>
              <span className="user-role">{user.role}</span>
            </div>
          </div>
        )}
        <button className="sidebar-link logout-btn" onClick={logout} title="Logout">
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>

      <style>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: var(--sidebar-width);
          height: 100vh;
          background: var(--bg-secondary);
          border-right: 1px solid var(--border-primary);
          display: flex;
          flex-direction: column;
          z-index: 100;
          transition: width var(--transition-base);
          overflow: hidden;
        }
        .sidebar-collapsed {
          width: var(--sidebar-collapsed);
        }
        .sidebar-collapsed + .main-content {
          margin-left: var(--sidebar-collapsed);
        }
        .sidebar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 20px 18px;
          border-bottom: 1px solid var(--border-primary);
          position: relative;
        }
        .sidebar-logo {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }
        .sidebar-brand-text {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .brand-name {
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }
        .brand-tag {
          font-size: 0.65rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .sidebar-toggle {
          position: absolute;
          right: -12px;
          top: 50%;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
          z-index: 10;
        }
        .sidebar-toggle:hover {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
        }

        /* Investigation Switcher */
        .inv-switcher {
          padding: 10px 10px 0;
          position: relative;
        }
        .inv-current {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 10px 14px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          color: var(--text-primary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .inv-current:hover {
          border-color: var(--accent-primary);
          background: var(--bg-elevated);
        }
        .inv-current-info {
          display: flex;
          flex-direction: column;
          text-align: left;
        }
        .inv-current-label {
          font-size: 0.6rem;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 600;
        }
        .inv-current-name {
          font-size: 0.82rem;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 170px;
        }
        .inv-chevron {
          color: var(--text-tertiary);
          transition: transform var(--transition-fast);
          flex-shrink: 0;
        }
        .inv-chevron.open { transform: rotate(180deg); }
        .inv-dropdown {
          position: absolute;
          top: calc(100% + 4px);
          left: 10px;
          right: 10px;
          background: var(--bg-card);
          border: 1px solid var(--border-secondary);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          z-index: 200;
          overflow: hidden;
          animation: fadeInDown 0.2s ease-out;
        }
        .inv-dropdown-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border-bottom: 1px solid var(--border-primary);
        }
        .inv-new-btn {
          background: rgba(59,130,246,0.1);
          color: var(--accent-primary);
          border: none;
          border-radius: var(--radius-sm);
          padding: 4px 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .inv-new-btn:hover { background: rgba(59,130,246,0.2); }
        .inv-new-input {
          display: flex;
          gap: 4px;
          padding: 8px 10px;
          border-bottom: 1px solid var(--border-primary);
        }
        .inv-new-input input {
          flex: 1;
          padding: 5px 8px;
          background: var(--bg-input);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 0.8rem;
        }
        .inv-new-input input:focus { border-color: var(--accent-primary); }
        .inv-new-input button {
          background: var(--bg-tertiary);
          border: none;
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          padding: 4px 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        .inv-new-input button:hover { color: var(--accent-primary); }
        .inv-list {
          max-height: 200px;
          overflow-y: auto;
        }
        .inv-item {
          display: flex;
          align-items: center;
          padding: 0 6px;
        }
        .inv-item.active { background: rgba(59,130,246,0.08); }
        .inv-item-btn {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 8px;
          background: none;
          border: none;
          color: var(--text-primary);
          font-size: 0.82rem;
          cursor: pointer;
          text-align: left;
          min-width: 0;
        }
        .inv-item-btn:hover { color: var(--accent-primary); }
        .inv-item-name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .inv-active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-primary);
          flex-shrink: 0;
          box-shadow: 0 0 6px var(--accent-primary);
        }
        .inv-item-actions {
          display: flex;
          gap: 2px;
          opacity: 0;
          transition: opacity var(--transition-fast);
        }
        .inv-item:hover .inv-item-actions { opacity: 1; }
        .inv-item-actions button {
          background: none;
          border: none;
          color: var(--text-tertiary);
          cursor: pointer;
          padding: 4px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
        }
        .inv-item-actions button:hover { color: var(--accent-primary); background: var(--bg-tertiary); }
        .inv-delete:hover { color: var(--accent-danger) !important; }
        .inv-edit-row {
          display: flex;
          gap: 4px;
          flex: 1;
          padding: 6px 4px;
        }
        .inv-edit-row input {
          flex: 1;
          padding: 4px 8px;
          background: var(--bg-input);
          border: 1px solid var(--accent-primary);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 0.8rem;
        }
        .inv-edit-row button {
          background: var(--bg-tertiary);
          border: none;
          color: var(--accent-primary);
          border-radius: var(--radius-sm);
          padding: 4px 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .sidebar-nav {
          flex: 1;
          padding: 12px 10px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          transition: all var(--transition-fast);
          text-decoration: none;
          position: relative;
          white-space: nowrap;
        }
        .sidebar-link:hover {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }
        .sidebar-link.active {
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-primary);
          font-weight: 600;
        }
        .sidebar-active-indicator {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 20px;
          background: var(--accent-primary);
          border-radius: 0 2px 2px 0;
        }
        .sidebar-footer {
          padding: 12px 10px;
          border-top: 1px solid var(--border-primary);
        }
        .theme-toggle {
          margin-bottom: 4px;
          background: none;
          border: none;
          width: 100%;
          justify-content: flex-start;
          cursor: pointer;
        }
        .theme-toggle:hover {
          background: var(--bg-tertiary);
          color: var(--accent-warning) !important;
        }
        .sidebar-user {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          margin-bottom: 8px;
        }
        .user-avatar {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-md);
          background: linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }
        .user-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .user-name {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .user-role {
          font-size: 0.7rem;
          color: var(--text-tertiary);
        }
        .logout-btn {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          justify-content: flex-start;
        }
        .logout-btn:hover {
          color: var(--accent-danger) !important;
          background: rgba(239, 68, 68, 0.1) !important;
        }
      `}</style>
    </aside>
  );
}
