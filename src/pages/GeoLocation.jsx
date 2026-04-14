import { useState, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet';
import L from 'leaflet';
import { useData } from '../context/DataContext';
import { MapPin, Phone, Clock, Radio, Filter, Eye } from 'lucide-react';

// Fix leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

const suspectColors = {
  'Rajesh Kumar': '#ef4444',
  'Vikram Patel': '#f59e0b',
  'Mohammad Ali': '#8b5cf6',
  'Deepak Verma': '#06b6d4',
  'Amit Sharma': '#10b981',
};

export default function GeoLocation() {
  const { cdrData, towerLocations, suspects } = useData();
  const [selectedSuspect, setSelectedSuspect] = useState('all');
  const [showPaths, setShowPaths] = useState(true);
  const [showTowers, setShowTowers] = useState(true);

  const suspectList = useMemo(() => [...new Set(cdrData.map(c => c.caller))], [cdrData]);

  const filteredCdr = selectedSuspect === 'all'
    ? cdrData
    : cdrData.filter(c => c.caller === selectedSuspect || c.receiver === selectedSuspect);

  // Build paths per suspect
  const paths = useMemo(() => {
    const p = {};
    cdrData.forEach(record => {
      if (!p[record.caller]) p[record.caller] = [];
      p[record.caller].push([record.lat, record.lng]);
    });
    return p;
  }, [cdrData]);

  // Frequent locations
  const locationFrequency = useMemo(() => {
    const freq = {};
    cdrData.forEach(r => {
      const key = r.towerId;
      if (!freq[key]) freq[key] = { ...towerLocations[key], count: 0, towerId: key };
      freq[key].count++;
    });
    return Object.values(freq).sort((a, b) => b.count - a.count);
  }, [cdrData, towerLocations]);

  // Meeting points (2+ suspects at same tower at similar time)
  const meetingPoints = useMemo(() => {
    const meetings = [];
    const byTower = {};
    cdrData.forEach(r => {
      if (!byTower[r.towerId]) byTower[r.towerId] = [];
      byTower[r.towerId].push(r);
    });
    Object.entries(byTower).forEach(([towerId, records]) => {
      const uniqueCallers = [...new Set(records.map(r => r.caller))];
      if (uniqueCallers.length >= 2) {
        meetings.push({
          towerId,
          location: towerLocations[towerId],
          suspects: uniqueCallers,
          records: records.length,
        });
      }
    });
    return meetings;
  }, [cdrData, towerLocations]);

  const center = [28.6200, 77.2500];

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Geo-Location Analysis</h1>
        <p>CDR-based movement tracking, tower triangulation, and meeting point detection.</p>
      </div>

      {/* Controls */}
      <div className="geo-controls animate-fade-in-up">
        <div className="filter-group">
          <span className="filter-label"><Filter size={14} /> Suspect</span>
          <select className="input" value={selectedSuspect} onChange={e => setSelectedSuspect(e.target.value)}
            style={{ width: 200, padding: '8px 12px' }}>
            <option value="all">All Suspects</option>
            {suspectList.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="geo-toggles">
          <label className="geo-toggle">
            <input type="checkbox" checked={showPaths} onChange={e => setShowPaths(e.target.checked)} />
            <span>Movement Paths</span>
          </label>
          <label className="geo-toggle">
            <input type="checkbox" checked={showTowers} onChange={e => setShowTowers(e.target.checked)} />
            <span>Tower Locations</span>
          </label>
        </div>
      </div>

      <div className="geo-layout animate-fade-in-up delay-2">
        {/* Map */}
        <div className="geo-map-container">
          <MapContainer center={center} zoom={12} style={{ height: '100%', width: '100%', borderRadius: '10px' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap'
            />

            {/* Tower markers */}
            {showTowers && Object.entries(towerLocations).map(([id, tower]) => {
              const freq = locationFrequency.find(l => l.towerId === id);
              return (
                <CircleMarker key={id}
                  center={[tower.lat, tower.lng]}
                  radius={8 + (freq?.count || 0) * 2}
                  pathOptions={{
                    fillColor: (freq?.count || 0) > 3 ? '#ef4444' : (freq?.count || 0) > 1 ? '#f59e0b' : '#3b82f6',
                    fillOpacity: 0.5,
                    stroke: true,
                    color: '#fff',
                    weight: 2,
                  }}
                >
                  <Popup>
                    <div style={{ fontFamily: 'Inter, sans-serif', color: '#1e293b' }}>
                      <strong>{tower.name}</strong><br />
                      Tower ID: {id}<br />
                      Area: {tower.area}<br />
                      Pings: {freq?.count || 0}<br />
                      Lat: {tower.lat}, Lng: {tower.lng}
                    </div>
                  </Popup>
                </CircleMarker>
              );
            })}

            {/* Movement paths */}
            {showPaths && Object.entries(paths).map(([suspect, coords]) => {
              if (selectedSuspect !== 'all' && suspect !== selectedSuspect) return null;
              const color = suspectColors[suspect] || '#3b82f6';
              return (
                <Polyline key={suspect}
                  positions={coords}
                  pathOptions={{ color, weight: 3, opacity: 0.7, dashArray: '8, 4' }}
                />
              );
            })}

            {/* Meeting points */}
            {meetingPoints.map((mp, i) => (
              <CircleMarker key={i}
                center={[mp.location.lat, mp.location.lng]}
                radius={18}
                pathOptions={{
                  fillColor: '#ef4444',
                  fillOpacity: 0.2,
                  stroke: true,
                  color: '#ef4444',
                  weight: 2,
                  dashArray: '5, 5'
                }}
              >
                <Popup>
                  <div style={{ fontFamily: 'Inter, sans-serif', color: '#1e293b' }}>
                    <strong>⚠ Meeting Point</strong><br />
                    {mp.location.name}<br />
                    Suspects: {mp.suspects.join(', ')}<br />
                    Records: {mp.records}
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>

        {/* CDR Panel */}
        <div className="geo-panel">
          {/* Frequent Locations */}
          <div className="geo-section">
            <h3><MapPin size={16} /> Frequent Locations</h3>
            {locationFrequency.slice(0, 5).map((loc, i) => (
              <div key={i} className="freq-location">
                <div className="freq-rank">{i + 1}</div>
                <div className="freq-info">
                  <span className="freq-name">{loc.name}</span>
                  <span className="text-xs text-muted">{loc.area}</span>
                </div>
                <div className="freq-count">{loc.count} pings</div>
              </div>
            ))}
          </div>

          {/* Meeting Points */}
          <div className="geo-section">
            <h3><Radio size={16} /> Meeting Points</h3>
            {meetingPoints.map((mp, i) => (
              <div key={i} className="meeting-point">
                <div className="meeting-location">{mp.location.name}</div>
                <div className="meeting-suspects">
                  {mp.suspects.map(s => (
                    <span key={s} className="meeting-suspect-tag" style={{ borderColor: suspectColors[s] || 'var(--border-primary)' }}>
                      {s.split(' ')[0]}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CDR Table */}
          <div className="geo-section">
            <h3><Phone size={16} /> CDR Records</h3>
            <div className="cdr-list">
              {filteredCdr.slice(0, 8).map(record => (
                <div key={record.id} className="cdr-record">
                  <div className="cdr-time">{record.time.split(' ')[1]}</div>
                  <div className="cdr-details">
                    <span className="cdr-parties">
                      <span style={{ color: suspectColors[record.caller] }}>{record.caller.split(' ')[0]}</span>
                      {' → '}
                      <span style={{ color: suspectColors[record.receiver] }}>{record.receiver.split(' ')[0]}</span>
                    </span>
                    <span className="text-xs text-muted">{record.duration} • {record.towerId}</span>
                  </div>
                  <span className={`tag ${record.type === 'outgoing' ? '' : ''}`}>{record.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .geo-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 20px;
          padding: 14px 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          flex-wrap: wrap;
        }
        .geo-toggles {
          display: flex;
          gap: 16px;
        }
        .geo-toggle {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          cursor: pointer;
        }
        .geo-toggle input {
          accent-color: var(--accent-primary);
        }
        .geo-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 20px;
          min-height: 600px;
        }
        @media (max-width: 1100px) {
          .geo-layout { grid-template-columns: 1fr; }
        }
        .geo-map-container {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          overflow: hidden;
          min-height: 600px;
        }
        .geo-panel {
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow-y: auto;
          max-height: 650px;
        }
        .geo-section {
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          padding: 16px;
        }
        .geo-section h3 {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--accent-primary);
          margin-bottom: 12px;
        }
        .freq-location {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          border-bottom: 1px solid var(--border-primary);
        }
        .freq-location:last-child { border-bottom: none; }
        .freq-rank {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: var(--bg-elevated);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-secondary);
        }
        .freq-info { flex: 1; }
        .freq-name { font-size: 0.85rem; font-weight: 600; display: block; }
        .freq-count {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-warning);
        }
        .meeting-point {
          padding: 10px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
          margin-bottom: 8px;
          border-left: 3px solid var(--accent-danger);
        }
        .meeting-location {
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .meeting-suspects {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        .meeting-suspect-tag {
          padding: 2px 8px;
          border: 1px solid;
          border-radius: var(--radius-sm);
          font-size: 0.7rem;
          font-weight: 500;
          color: var(--text-secondary);
        }
        .cdr-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .cdr-record {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
        }
        .cdr-time {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-tertiary);
          min-width: 44px;
        }
        .cdr-details { flex: 1; min-width: 0; }
        .cdr-parties {
          font-size: 0.8rem;
          font-weight: 600;
          display: block;
        }
      `}</style>
    </div>
  );
}
