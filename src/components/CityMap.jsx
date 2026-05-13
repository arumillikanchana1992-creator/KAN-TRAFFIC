import React from 'react';
import { FaMapMarkedAlt, FaCircle } from 'react-icons/fa';

const CityMap = () => {
  return (
    <div className="city-map card-glass p-3 h-100 position-relative overflow-hidden">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="mb-0 fw-bold d-flex align-items-center gap-2">
          <FaMapMarkedAlt className="text-info" /> Traffic Heatmap
        </h6>
        <span className="badge bg-dark border border-secondary text-light">Live Grid</span>
      </div>
      
      <div className="map-container position-relative bg-dark rounded" style={{ height: '220px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
        {/* SVG Grid simulating a city map */}
        <svg width="100%" height="100%" viewBox="0 0 400 220" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            </pattern>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Main Arteries */}
          <line x1="0" y1="110" x2="400" y2="110" stroke="#333" strokeWidth="12" />
          <line x1="200" y1="0" x2="200" y2="220" stroke="#333" strokeWidth="12" />
          <line x1="80" y1="0" x2="80" y2="220" stroke="#222" strokeWidth="8" />
          <line x1="320" y1="0" x2="320" y2="220" stroke="#222" strokeWidth="8" />
          
          {/* Active Traffic Flows (Green = clear, Yellow = moderate, Red = heavy) */}
          <path d="M 0 110 L 150 110" stroke="#00e5ff" strokeWidth="4" filter="url(#glow)" />
          <path d="M 150 110 L 200 110" stroke="#ff9f43" strokeWidth="4" filter="url(#glow)" />
          <path d="M 200 110 L 400 110" stroke="#ff3b30" strokeWidth="4" filter="url(#glow)" className="blink" />
          
          <path d="M 200 0 L 200 110" stroke="#00e5ff" strokeWidth="4" filter="url(#glow)" />
          <path d="M 200 110 L 200 220" stroke="#00e5ff" strokeWidth="4" filter="url(#glow)" />

          {/* Junction Nodes */}
          <circle cx="200" cy="110" r="8" fill="#111" stroke="#ff3b30" strokeWidth="2" filter="url(#glow)" />
          <circle cx="80" cy="110" r="6" fill="#111" stroke="#00e5ff" strokeWidth="2" />
          <circle cx="320" cy="110" r="6" fill="#111" stroke="#ff9f43" strokeWidth="2" />
        </svg>
        
        {/* Floating Tooltips */}
        <div className="position-absolute px-2 py-1 bg-dark bg-opacity-75 rounded border border-danger text-danger" style={{ top: '80px', left: '220px', fontSize: '0.65rem' }}>
          Heavy Congestion
        </div>
      </div>
      
      <div className="d-flex justify-content-between mt-3 px-2 small text-muted">
        <span><FaCircle className="text-info me-1" size={8} /> Clear</span>
        <span><FaCircle className="text-warning me-1" size={8} /> Moderate</span>
        <span><FaCircle className="text-danger me-1" size={8} /> Congested</span>
      </div>
    </div>
  );
};

export default CityMap;
