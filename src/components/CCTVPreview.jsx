import React, { useState, useEffect } from 'react';
import { FaVideo, FaCircle } from 'react-icons/fa';

const CCTVPreview = ({ junctionName }) => {
  const [glitch, setGlitch] = useState(false);

  // Simulate occasional camera glitch
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 200);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cctv-card card-glass p-2 position-relative overflow-hidden mb-3">
      <div 
        className="cctv-feed bg-dark rounded position-relative" 
        style={{ height: '160px', overflow: 'hidden' }}
      >
        {/* Placeholder for camera feed - using CSS pattern */}
        <div 
          className="w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ 
            background: 'linear-gradient(45deg, #111 25%, #151515 25%, #151515 50%, #111 50%, #111 75%, #151515 75%, #151515 100%)',
            backgroundSize: '20px 20px',
            opacity: glitch ? 0.8 : 0.4
          }}
        >
          <div className="text-center">
            <FaVideo size={40} className="text-secondary opacity-50 mb-2" />
            <div className="text-secondary small fw-bold" style={{ letterSpacing: '2px' }}>CAMERA FEED LIVE</div>
          </div>
        </div>

        {/* Overlay info */}
        <div className="position-absolute top-0 start-0 w-100 p-2 d-flex justify-content-between align-items-start pointer-events-none">
          <div className="bg-dark bg-opacity-75 px-2 py-1 rounded small" style={{ fontSize: '0.65rem' }}>
            <span className="text-danger me-2"><FaCircle size={8} className="blink" /> REC</span>
            <span className="text-light">{junctionName} - CAM 01</span>
          </div>
          <div className="bg-dark bg-opacity-75 px-2 py-1 rounded small text-light" style={{ fontSize: '0.65rem' }}>
            {new Date().toLocaleTimeString()}
          </div>
        </div>

        <div className="position-absolute bottom-0 end-0 p-2">
          <div className="bg-info bg-opacity-50 px-2 py-1 rounded small text-white" style={{ fontSize: '0.65rem' }}>
            AI ANALYZING...
          </div>
        </div>

        {/* Scanline effect */}
        <div className="scanline"></div>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-2 px-1">
        <small className="text-muted">Status: <span className="text-success fw-bold">Online</span></small>
        <div className="d-flex gap-2">
          <button className="btn btn-sm btn-outline-light p-1" style={{ fontSize: '0.6rem' }}>PAN</button>
          <button className="btn btn-sm btn-outline-light p-1" style={{ fontSize: '0.6rem' }}>ZOOM</button>
        </div>
      </div>

      <style jsx>{`
        .scanline {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
          background-size: 100% 4px, 3px 100%;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default CCTVPreview;
