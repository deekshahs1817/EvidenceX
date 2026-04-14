import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { useData } from '../context/DataContext';
import { Network, User, MapPin, ZoomIn, ZoomOut, Maximize2, Info, X } from 'lucide-react';

export default function SuspectNetwork() {
  const { networkData } = useData();
  const svgRef = useRef(null);
  const containerRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 900, height: 600 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: Math.max(rect.height, 550) });
      }
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!svgRef.current || dimensions.width < 100) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const { width, height } = dimensions;
    svg.attr('viewBox', `0 0 ${width} ${height}`);

    // Gradient definitions
    const defs = svg.append('defs');

    const grad = defs.append('linearGradient').attr('id', 'link-gradient');
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#3b82f6').attr('stop-opacity', 0.5);
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#06b6d4').attr('stop-opacity', 0.5);

    // Glow filter
    const filter = defs.append('filter').attr('id', 'glow');
    filter.append('feGaussianBlur').attr('stdDeviation', '3').attr('result', 'blur');
    filter.append('feMerge').selectAll('feMergeNode')
      .data(['blur', 'SourceGraphic']).enter()
      .append('feMergeNode').attr('in', d => d);

    const g = svg.append('g');

    // Zoom
    const zoom = d3.zoom()
      .scaleExtent([0.3, 4])
      .on('zoom', (event) => g.attr('transform', event.transform));
    svg.call(zoom);

    // Force simulation
    const simulation = d3.forceSimulation(networkData.nodes)
      .force('link', d3.forceLink(networkData.links).id(d => d.id).distance(d => {
        return d.strength === 'strong' ? 100 : d.strength === 'medium' ? 150 : 200;
      }))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(40));

    // Links
    const link = g.append('g').selectAll('line')
      .data(networkData.links).enter()
      .append('line')
      .attr('stroke', d => d.strength === 'strong' ? '#3b82f6' : d.strength === 'medium' ? '#f59e0b' : '#475569')
      .attr('stroke-width', d => d.strength === 'strong' ? 3 : d.strength === 'medium' ? 2 : 1)
      .attr('stroke-opacity', d => d.strength === 'strong' ? 0.7 : d.strength === 'medium' ? 0.5 : 0.3)
      .attr('stroke-dasharray', d => d.strength === 'weak' ? '4,4' : null);

    // Link labels
    const linkLabel = g.append('g').selectAll('text')
      .data(networkData.links).enter()
      .append('text')
      .attr('font-size', 9)
      .attr('fill', '#64748b')
      .attr('text-anchor', 'middle')
      .attr('font-family', 'Inter, sans-serif')
      .text(d => d.label);

    // Nodes
    const nodeColors = {
      high: '#ef4444',
      medium: '#f59e0b',
      low: '#10b981',
    };

    const node = g.append('g').selectAll('g')
      .data(networkData.nodes).enter()
      .append('g')
      .attr('cursor', 'pointer')
      .call(d3.drag()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x; d.fy = d.y;
        })
        .on('drag', (event, d) => {
          d.fx = event.x; d.fy = event.y;
        })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null; d.fy = null;
        })
      );

    // Node shapes
    node.each(function(d) {
      const el = d3.select(this);
      const color = nodeColors[d.risk] || '#64748b';

      if (d.type === 'person') {
        // Outer glow ring
        el.append('circle')
          .attr('r', 26)
          .attr('fill', 'none')
          .attr('stroke', color)
          .attr('stroke-width', 1.5)
          .attr('stroke-opacity', 0.3)
          .attr('filter', 'url(#glow)');
        // Inner circle
        el.append('circle')
          .attr('r', 20)
          .attr('fill', `${color}20`)
          .attr('stroke', color)
          .attr('stroke-width', 2);
        // Label
        el.append('text')
          .attr('text-anchor', 'middle')
          .attr('dy', 4)
          .attr('font-size', 11)
          .attr('font-weight', 700)
          .attr('fill', color)
          .attr('font-family', 'Inter, sans-serif')
          .text(d.id.split(' ').map(n => n[0]).join(''));
      } else {
        // Location diamond
        el.append('rect')
          .attr('width', 28)
          .attr('height', 28)
          .attr('x', -14)
          .attr('y', -14)
          .attr('transform', 'rotate(45)')
          .attr('fill', `${color}20`)
          .attr('stroke', color)
          .attr('stroke-width', 2)
          .attr('rx', 3);
      }

      // Name label below
      el.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', d.type === 'person' ? 36 : 30)
        .attr('font-size', 10)
        .attr('fill', '#94a3b8')
        .attr('font-family', 'Inter, sans-serif')
        .attr('font-weight', 500)
        .text(d.id.length > 18 ? d.id.substring(0, 16) + '…' : d.id);
    });

    // Hover and click
    node.on('mouseover', function(event, d) {
      d3.select(this).select('circle:nth-child(2), rect')
        .transition().duration(200)
        .attr('stroke-width', 3);
      link.attr('stroke-opacity', l =>
        l.source.id === d.id || l.target.id === d.id ? 1 : 0.1
      ).attr('stroke-width', l =>
        l.source.id === d.id || l.target.id === d.id ? 4 : 1
      );
      node.attr('opacity', n => {
        if (n.id === d.id) return 1;
        const connected = networkData.links.some(l =>
          (l.source.id || l.source) === d.id && (l.target.id || l.target) === n.id ||
          (l.target.id || l.target) === d.id && (l.source.id || l.source) === n.id
        );
        return connected ? 1 : 0.2;
      });
    }).on('mouseout', function() {
      node.attr('opacity', 1);
      link.attr('stroke-opacity', d => d.strength === 'strong' ? 0.7 : d.strength === 'medium' ? 0.5 : 0.3)
        .attr('stroke-width', d => d.strength === 'strong' ? 3 : d.strength === 'medium' ? 2 : 1);
      node.selectAll('circle:nth-child(2), rect').transition().duration(200).attr('stroke-width', 2);
    }).on('click', (event, d) => {
      const connections = networkData.links.filter(l =>
        (l.source.id || l.source) === d.id || (l.target.id || l.target) === d.id
      );
      setSelectedNode({ ...d, connections });
    });

    // Simulation tick
    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      linkLabel
        .attr('x', d => (d.source.x + d.target.x) / 2)
        .attr('y', d => (d.source.y + d.target.y) / 2);

      node.attr('transform', d => `translate(${d.x},${d.y})`);
    });

    return () => simulation.stop();
  }, [dimensions]);

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <h1>Suspect Network Graph</h1>
        <p>Interactive relationship graph showing connections between suspects and locations.</p>
      </div>

      {/* Legend */}
      <div className="network-legend animate-fade-in-up">
        <div className="legend-section">
          <span className="legend-title">Nodes</span>
          <div className="legend-items">
            <span className="legend-item"><span className="legend-circle" style={{ background: '#ef4444' }} /> High Risk</span>
            <span className="legend-item"><span className="legend-circle" style={{ background: '#f59e0b' }} /> Medium Risk</span>
            <span className="legend-item"><span className="legend-circle" style={{ background: '#10b981' }} /> Low Risk</span>
            <span className="legend-item"><span className="legend-diamond" /> Location</span>
          </div>
        </div>
        <div className="legend-section">
          <span className="legend-title">Edges</span>
          <div className="legend-items">
            <span className="legend-item"><span className="legend-line strong" /> Strong (Frequent)</span>
            <span className="legend-item"><span className="legend-line medium" /> Medium</span>
            <span className="legend-item"><span className="legend-line weak" /> Weak (Rare)</span>
          </div>
        </div>
      </div>

      <div className="network-container animate-fade-in-up delay-2">
        <div ref={containerRef} className="network-graph-wrapper">
          <svg ref={svgRef} className="network-svg" />
        </div>

        {/* Detail Panel */}
        {selectedNode && (
          <div className="network-detail-panel animate-slide-right">
            <div className="detail-panel-header">
              <div className="flex items-center gap-2">
                {selectedNode.type === 'person' ? <User size={18} /> : <MapPin size={18} />}
                <h3>{selectedNode.id}</h3>
              </div>
              <button className="btn btn-ghost btn-sm" onClick={() => setSelectedNode(null)}><X size={16} /></button>
            </div>
            <div className="detail-panel-body">
              <div className="detail-row">
                <span className="detail-label">Type</span>
                <span className="tag">{selectedNode.type}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Risk Level</span>
                <span className={`badge badge-${selectedNode.risk}`}>{selectedNode.risk}</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Connections</span>
                <span className="font-bold">{selectedNode.connections?.length || 0}</span>
              </div>
              <div className="section-divider" />
              <h4 style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: 8 }}>CONNECTIONS</h4>
              {selectedNode.connections?.map((c, i) => (
                <div key={i} className="connection-item">
                  <span className="connection-target">
                    {(c.source.id || c.source) === selectedNode.id ? (c.target.id || c.target) : (c.source.id || c.source)}
                  </span>
                  <span className={`badge badge-${c.strength === 'strong' ? 'high' : c.strength === 'medium' ? 'medium' : 'low'}`}>
                    {c.strength}
                  </span>
                  {c.calls && <span className="text-xs text-mono text-muted">{c.calls} calls</span>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .network-legend {
          display: flex;
          gap: 32px;
          padding: 14px 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-md);
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .legend-title {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-right: 12px;
        }
        .legend-items {
          display: flex;
          gap: 16px;
          align-items: center;
          flex-wrap: wrap;
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .legend-circle {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .legend-diamond {
          width: 10px;
          height: 10px;
          background: var(--accent-primary);
          transform: rotate(45deg);
          border-radius: 2px;
        }
        .legend-line {
          width: 24px;
          height: 0;
          border-top: 2px solid;
        }
        .legend-line.strong { border-color: #3b82f6; border-width: 3px; }
        .legend-line.medium { border-color: #f59e0b; }
        .legend-line.weak { border-color: #475569; border-style: dashed; }
        .network-container {
          display: flex;
          gap: 0;
          background: var(--bg-card);
          border: 1px solid var(--border-primary);
          border-radius: var(--radius-lg);
          overflow: hidden;
          min-height: 550px;
        }
        .network-graph-wrapper {
          flex: 1;
          min-height: 550px;
        }
        .network-svg {
          width: 100%;
          height: 100%;
          min-height: 550px;
        }
        .network-detail-panel {
          width: 300px;
          border-left: 1px solid var(--border-primary);
          background: var(--bg-secondary);
          overflow-y: auto;
        }
        .detail-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          border-bottom: 1px solid var(--border-primary);
        }
        .detail-panel-header h3 {
          font-size: 0.95rem;
          font-weight: 700;
        }
        .detail-panel-body {
          padding: 16px 20px;
        }
        .detail-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
        }
        .detail-label {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }
        .connection-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-sm);
          margin-bottom: 6px;
          flex-wrap: wrap;
        }
        .connection-target {
          font-size: 0.82rem;
          font-weight: 600;
          flex: 1;
        }
        .legend-section {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
