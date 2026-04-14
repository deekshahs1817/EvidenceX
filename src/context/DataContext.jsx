// ============================================
// EvidenceX – Data Context (User-Input Driven)
// Supports MULTIPLE investigations + Theme
// ============================================
import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const DataContext = createContext(null);

const INVESTIGATIONS_KEY = 'evidencex_investigations';
const ACTIVE_KEY = 'evidencex_active_investigation';
const THEME_KEY = 'evidencex_theme';

const EMPTY_STATE = {
  suspects: [],
  evidenceFiles: [],
  analysisResults: [],
  networkData: { nodes: [], links: [] },
  timelineEvents: [],
  cdrData: [],
  towerLocations: {},
  crossEvidenceLinks: [],
  aiInsights: [],
  movementPatterns: [],
  recentActivity: [],
};

function buildNetworkData(suspects, connections) {
  if (!connections || connections.length === 0) return { nodes: [], links: [] };
  const nodeSet = new Map();
  connections.forEach(c => {
    if (!nodeSet.has(c.source)) {
      const suspect = suspects.find(s => s.name === c.source);
      nodeSet.set(c.source, { id: c.source, type: suspect ? 'person' : 'location', risk: suspect?.risk || 'medium', group: suspect ? 1 : 4 });
    }
    if (!nodeSet.has(c.target)) {
      const suspect = suspects.find(s => s.name === c.target);
      nodeSet.set(c.target, { id: c.target, type: suspect ? 'person' : 'location', risk: suspect?.risk || 'medium', group: suspect ? 1 : 4 });
    }
  });
  const links = connections.map(c => ({
    source: c.source, target: c.target, strength: c.strength,
    calls: c.calls ? parseInt(c.calls) || null : null, label: c.label,
  }));
  return { nodes: Array.from(nodeSet.values()), links };
}

function buildTowerLocations(towers) {
  if (!towers || towers.length === 0) return {};
  const map = {};
  towers.forEach(t => {
    map[t.towerId] = { lat: parseFloat(t.lat), lng: parseFloat(t.lng), name: t.name, area: t.area };
  });
  return map;
}

// Generate unique ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 7);
}

// Load all investigations metadata
function loadInvestigations() {
  try {
    const stored = localStorage.getItem(INVESTIGATIONS_KEY);
    if (stored) return JSON.parse(stored);
  } catch { /* ignore */ }
  return [];
}

// Save investigations metadata
function saveInvestigations(investigations) {
  try {
    localStorage.setItem(INVESTIGATIONS_KEY, JSON.stringify(investigations));
  } catch { /* ignore */ }
}

// Load data for a specific investigation
function loadInvestigationData(id) {
  try {
    const stored = localStorage.getItem(`evidencex_data_${id}`);
    if (stored) {
      const parsed = JSON.parse(stored);
      return { ...EMPTY_STATE, ...parsed };
    }
  } catch { /* ignore */ }
  return { ...EMPTY_STATE };
}

// Save data for a specific investigation
function saveInvestigationData(id, data) {
  try {
    localStorage.setItem(`evidencex_data_${id}`, JSON.stringify(data));
  } catch { /* ignore */ }
}

export function DataProvider({ children }) {
  // Theme state
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem(THEME_KEY) || 'dark';
  });

  // Investigation management
  const [investigations, setInvestigations] = useState(() => {
    const loaded = loadInvestigations();
    if (loaded.length === 0) {
      // Create default investigation
      const defaultInv = { id: generateId(), name: 'Investigation 1', createdAt: new Date().toISOString() };
      saveInvestigations([defaultInv]);
      localStorage.setItem(ACTIVE_KEY, defaultInv.id);
      return [defaultInv];
    }
    return loaded;
  });

  const [activeInvestigationId, setActiveInvestigationId] = useState(() => {
    const stored = localStorage.getItem(ACTIVE_KEY);
    if (stored) return stored;
    const invs = loadInvestigations();
    return invs[0]?.id || '';
  });

  const [data, setData] = useState(() => loadInvestigationData(activeInvestigationId));

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  // Persist data whenever it changes
  useEffect(() => {
    if (activeInvestigationId) {
      saveInvestigationData(activeInvestigationId, data);
    }
  }, [data, activeInvestigationId]);

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setThemeState(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  // Switch investigation
  const switchInvestigation = useCallback((id) => {
    setActiveInvestigationId(id);
    localStorage.setItem(ACTIVE_KEY, id);
    setData(loadInvestigationData(id));
  }, []);

  // Create new investigation
  const createInvestigation = useCallback((name) => {
    const newInv = {
      id: generateId(),
      name: name || `Investigation ${investigations.length + 1}`,
      createdAt: new Date().toISOString(),
    };
    const updated = [...investigations, newInv];
    setInvestigations(updated);
    saveInvestigations(updated);
    // Switch to new investigation
    setActiveInvestigationId(newInv.id);
    localStorage.setItem(ACTIVE_KEY, newInv.id);
    setData({ ...EMPTY_STATE });
    return newInv;
  }, [investigations]);

  // Delete investigation
  const deleteInvestigation = useCallback((id) => {
    if (investigations.length <= 1) return; // Keep at least one
    const updated = investigations.filter(inv => inv.id !== id);
    setInvestigations(updated);
    saveInvestigations(updated);
    // Remove data
    try { localStorage.removeItem(`evidencex_data_${id}`); } catch { /* ignore */ }
    // Switch to another if deleting active
    if (id === activeInvestigationId) {
      const newActive = updated[0].id;
      setActiveInvestigationId(newActive);
      localStorage.setItem(ACTIVE_KEY, newActive);
      setData(loadInvestigationData(newActive));
    }
  }, [investigations, activeInvestigationId]);

  // Rename investigation
  const renameInvestigation = useCallback((id, newName) => {
    const updated = investigations.map(inv =>
      inv.id === id ? { ...inv, name: newName } : inv
    );
    setInvestigations(updated);
    saveInvestigations(updated);
  }, [investigations]);

  const importDataset = useCallback((type, records) => {
    setData(prev => {
      const next = { ...prev };
      switch (type) {
        case 'suspects':
          next.suspects = records.map(r => ({ ...r, age: parseInt(r.age) || 0, score: parseInt(r.score) || 0, image: null }));
          if (prev._rawConnections) next.networkData = buildNetworkData(next.suspects, prev._rawConnections);
          break;
        case 'cdr_data':
          next.cdrData = records.map((r, i) => ({ ...r, id: parseInt(r.id) || i + 1, lat: parseFloat(r.lat), lng: parseFloat(r.lng) }));
          break;
        case 'evidence_files':
          next.evidenceFiles = records.map(r => ({ ...r, uploadTime: r.uploadTime || new Date().toLocaleString() }));
          break;
        case 'timeline_events':
          next.timelineEvents = records;
          break;
        case 'tower_locations':
          next.towerLocations = buildTowerLocations(records);
          next._rawTowers = records;
          break;
        case 'network_connections':
          next._rawConnections = records;
          next.networkData = buildNetworkData(next.suspects, records);
          break;
        case 'movement_patterns':
          next.movementPatterns = records.map(r => ({ ...r, visits: r.visits ? parseInt(r.visits) : null, times: r.times ? r.times.split('|') : null }));
          break;
        case 'analysis_results':
          next.analysisResults = records;
          break;
        case 'cross_evidence_links':
          next.crossEvidenceLinks = records.map(r => ({
            ...r, confidence: parseInt(r.confidence) || 0,
            evidence: typeof r.evidence === 'string' ? r.evidence.split('|') : r.evidence || [],
            suspects: typeof r.suspects === 'string' ? r.suspects.split('|') : r.suspects || [],
          }));
          break;
        case 'ai_insights':
          next.aiInsights = records.map(r => ({
            ...r, confidence: parseInt(r.confidence) || 0,
            suspects: typeof r.suspects === 'string' ? r.suspects.split('|') : r.suspects || [],
          }));
          break;
        default: break;
      }
      next.recentActivity = [
        { time: 'Just now', action: `Dataset imported: ${type.replace(/_/g, ' ')}`, detail: `${records.length} records loaded`, type: 'upload' },
        ...prev.recentActivity.slice(0, 9),
      ];
      return next;
    });
  }, []);

  const clearDataset = useCallback((type) => {
    setData(prev => {
      const next = { ...prev };
      switch (type) {
        case 'suspects': next.suspects = []; break;
        case 'cdr_data': next.cdrData = []; break;
        case 'evidence_files': next.evidenceFiles = []; break;
        case 'timeline_events': next.timelineEvents = []; break;
        case 'tower_locations': next.towerLocations = {}; next._rawTowers = []; break;
        case 'network_connections': next._rawConnections = []; next.networkData = { nodes: [], links: [] }; break;
        case 'movement_patterns': next.movementPatterns = []; break;
        case 'analysis_results': next.analysisResults = []; break;
        case 'cross_evidence_links': next.crossEvidenceLinks = []; break;
        case 'ai_insights': next.aiInsights = []; break;
        default: break;
      }
      return next;
    });
  }, []);

  const clearAllData = useCallback(() => {
    setData({ ...EMPTY_STATE });
    if (activeInvestigationId) {
      saveInvestigationData(activeInvestigationId, { ...EMPTY_STATE });
    }
  }, [activeInvestigationId]);

  const getRecordCount = useCallback((type) => {
    switch (type) {
      case 'suspects': return data.suspects.length;
      case 'cdr_data': return data.cdrData.length;
      case 'evidence_files': return data.evidenceFiles.length;
      case 'timeline_events': return data.timelineEvents.length;
      case 'tower_locations': return Object.keys(data.towerLocations).length;
      case 'network_connections': return data.networkData.links.length;
      case 'movement_patterns': return data.movementPatterns.length;
      case 'analysis_results': return data.analysisResults.length;
      case 'cross_evidence_links': return data.crossEvidenceLinks.length;
      case 'ai_insights': return data.aiInsights.length;
      default: return 0;
    }
  }, [data]);

  const activeInvestigation = investigations.find(inv => inv.id === activeInvestigationId);

  return (
    <DataContext.Provider value={{
      ...data,
      importDataset, clearDataset, clearAllData, getRecordCount,
      // Theme
      theme, toggleTheme,
      // Investigations
      investigations, activeInvestigation, activeInvestigationId,
      switchInvestigation, createInvestigation, deleteInvestigation, renameInvestigation,
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be used within DataProvider');
  return ctx;
}
