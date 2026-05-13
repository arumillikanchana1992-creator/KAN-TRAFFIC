import React, { useState, useEffect } from 'react';
import { FaVideo, FaExclamationCircle, FaLock, FaUnlock } from 'react-icons/fa';

const LaneMonitoring = () => {
  const [cameras, setCameras] = useState([
    { id: 1, name: 'North Boulevard - Cam 1', status: 'Online', occupancy: 'High', alert: false },
    { id: 2, name: 'South Junction - Cam 2', status: 'Online', occupancy: 'Medium', alert: true },
    { id: 3, name: 'East Bypass - Cam 3', status: 'Online', occupancy: 'Low', alert: false },
    { id: 4, name: 'West Bridge - Cam 4', status: 'Online', occupancy: 'Medium', alert: false },
    { id: 5, name: 'City Center - Cam 5', status: 'Online', occupancy: 'High', alert: false },
    { id: 6, name: 'Industrial Zone - Cam 6', status: 'Online', occupancy: 'Low', alert: false },
  ]);

  const [activeCam, setActiveCam] = useState(cameras[0]);

  return (
    <div className="container-fluid py-4">
      <div className="row g-4">
        {/* Main Feed */}
        <div className="col-xl-8">
          <div className="card-glass overflow-hidden h-100">
            <div className="card-header bg-transparent border-bottom border-white-10 d-flex justify-content-between align-items-center p-3">
              <div className="d-flex align-items-center gap-2">
                <div className="pulse-red"></div>
                <h5 className="mb-0 fw-bold">{activeCam.name}</h5>
              </div>
              <div className="d-flex gap-3">
                <span className="badge bg-success-soft text-success">4K Live</span>
                <span className="badge bg-secondary-soft text-light opacity-50">30 FPS</span>
              </div>
            </div>
            <div className="position-relative aspect-ratio-16-9 bg-dark">
              {/* Simulated Video Placeholder with Glitch Effect */}
              <div className="cctv-main-feed">
                <div className="scanlines"></div>
                <div className="vignette"></div>
                <div className="timestamp-overlay">
                  {new Date().toLocaleTimeString()} | SECTOR_{activeCam.id}
                </div>
                <div className="content-center text-center">
                  <FaVideo className="text-secondary opacity-25 mb-3" size={64} />
                  <p className="text-secondary opacity-50">ENCRYPTED FEED SIGNAL_0X{activeCam.id}AF</p>
                </div>
              </div>
              
              {/* AI Detection Overlays */}
              <div className="ai-overlay position-absolute top-0 start-0 w-100 h-100 p-4">
                <div className="detection-box border-cyan" style={{ top: '20%', left: '30%', width: '100px', height: '60px' }}>
                  <span className="label bg-cyan">CAR_082 [89%]</span>
                </div>
                <div className="detection-box border-warning" style={{ top: '50%', left: '60%', width: '120px', height: '80px' }}>
                  <span className="label bg-warning text-dark">TRUCK_014 [92%]</span>
                </div>
              </div>
            </div>
            <div className="p-3 bg-primary-bg d-flex justify-content-between align-items-center">
              <div className="d-flex gap-4">
                <div className="text-center">
                  <small className="d-block text-muted">Occupancy</small>
                  <span className={activeCam.occupancy === 'High' ? 'text-danger' : 'text-cyan'}>{activeCam.occupancy}</span>
                </div>
                <div className="text-center">
                  <small className="d-block text-muted">Vehicle Count</small>
                  <span className="text-light">1,284 / hr</span>
                </div>
                <div className="text-center">
                  <small className="d-block text-muted">Avg. Speed</small>
                  <span className="text-light">42 km/h</span>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button className="btn btn-sm btn-outline-danger">EMERGENCY LOCK</button>
                <button className="btn btn-sm btn-cyan">AI OPTIMIZE</button>
              </div>
            </div>
          </div>
        </div>

        {/* Camera Grid Sidebar */}
        <div className="col-xl-4">
          <div className="card-glass h-100 p-3 overflow-auto" style={{ maxHeight: 'calc(100vh - 120px)' }}>
            <h5 className="fw-bold mb-3 d-flex align-items-center gap-2">
              <FaVideo className="text-cyan" /> Feed Registry
            </h5>
            <div className="row g-2">
              {cameras.map(cam => (
                <div key={cam.id} className="col-6 col-xl-12">
                  <div 
                    className={`camera-item card-glass p-2 border-0 cursor-pointer transition-all ${activeCam.id === cam.id ? 'active-camera' : ''}`}
                    onClick={() => setActiveCam(cam)}
                  >
                    <div className="position-relative aspect-ratio-16-9 bg-dark-soft rounded overflow-hidden mb-2">
                      <div className="scanlines"></div>
                      {cam.alert && <div className="alert-blink position-absolute inset-0 border border-danger border-2"></div>}
                      <div className="p-1 position-absolute bottom-0 start-0 w-100 bg-dark-opaque">
                        <small className="text-white-50 x-small">{cam.name}</small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="x-small text-muted">{cam.status}</span>
                      {cam.alert && <FaExclamationCircle className="text-danger" size={12} />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .aspect-ratio-16-9 {
          padding-top: 56.25%;
        }
        .cctv-main-feed {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #05070a;
        }
        .timestamp-overlay {
          position: absolute;
          top: 10px;
          right: 15px;
          color: rgba(255, 255, 255, 0.5);
          font-family: 'Courier New', Courier, monospace;
          font-size: 0.8rem;
          z-index: 5;
        }
        .detection-box {
          position: absolute;
          border: 1px solid;
          pointer-events: none;
        }
        .detection-box .label {
          position: absolute;
          top: -15px;
          left: 0;
          font-size: 0.6rem;
          padding: 1px 4px;
          white-space: nowrap;
        }
        .camera-item {
          opacity: 0.7;
        }
        .camera-item:hover, .camera-item.active-camera {
          opacity: 1;
          background: rgba(0, 229, 255, 0.05);
          border-color: rgba(0, 229, 255, 0.3) !important;
        }
        .active-camera {
           box-shadow: 0 0 15px rgba(0, 229, 255, 0.1);
        }
        .x-small { font-size: 0.7rem; }
        .bg-dark-opaque { background: rgba(0,0,0,0.7); }
        .pulse-red {
          width: 8px;
          height: 8px;
          background: #ff3b30;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(255, 59, 48, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(255, 59, 48, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 59, 48, 0); }
        }
      `}</style>
    </div>
  );
};

export default LaneMonitoring;
