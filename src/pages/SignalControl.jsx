import React, { useState } from 'react';
import { FaSignal, FaHistory, FaBolt, FaMagic, FaExclamationTriangle } from 'react-icons/fa';

const SignalControl = () => {
  const [junctions, setJunctions] = useState([
    { id: 'J-101', name: 'Main St & 5th Ave', status: 'AI Optimized', mode: 'Auto', delay: 45, load: 'High' },
    { id: 'J-102', name: 'North Blvd & Oak', status: 'Manual Override', mode: 'Manual', delay: 30, load: 'Medium' },
    { id: 'J-103', name: 'East Gate Tunnel', status: 'Synchronized', mode: 'Auto', delay: 60, load: 'Low' },
    { id: 'J-104', name: 'West Bridge Entry', status: 'AI Optimized', mode: 'Auto', delay: 40, load: 'Medium' },
  ]);

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-0">City Signal Management</h2>
          <p className="text-muted">Direct control and AI optimization of traffic light sequences</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-light btn-sm d-flex align-items-center gap-2">
            <FaHistory /> Sequence History
          </button>
          <button className="btn btn-cyan btn-sm d-flex align-items-center gap-2">
            <FaMagic /> Global AI Optimize
          </button>
        </div>
      </div>

      <div className="row g-4">
        {/* Signal Overview Grid */}
        {junctions.map(junction => (
          <div key={junction.id} className="col-md-6 col-xl-3">
            <div className="card-glass p-4 h-100 border-top-accent">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h6 className="fw-bold mb-1">{junction.name}</h6>
                  <small className="text-muted">ID: {junction.id}</small>
                </div>
                <span className={`badge ${junction.mode === 'Auto' ? 'bg-success-soft text-success' : 'bg-warning-soft text-warning'}`}>
                  {junction.mode}
                </span>
              </div>

              <div className="signal-visualizer text-center py-4 my-3 bg-dark-soft rounded position-relative">
                <div className="d-flex justify-content-center gap-3">
                  <div className={`signal-light red ${junction.load === 'High' ? 'active shadow-red' : ''}`}></div>
                  <div className="signal-light yellow"></div>
                  <div className={`signal-light green ${junction.load !== 'High' ? 'active shadow-green' : ''}`}></div>
                </div>
                <div className="mt-3">
                  <span className="h4 fw-bold text-cyan">{junction.delay}s</span>
                  <p className="small text-muted mb-0">Cycle Remaining</p>
                </div>
              </div>

              <div className="mt-4">
                <div className="d-flex justify-content-between mb-2">
                  <small className="text-muted">Load Status</small>
                  <small className={junction.load === 'High' ? 'text-danger' : 'text-success'}>{junction.load}</small>
                </div>
                <div className="progress bg-dark" style={{ height: '4px' }}>
                  <div 
                    className={`progress-bar ${junction.load === 'High' ? 'bg-danger' : 'bg-success'}`} 
                    style={{ width: junction.load === 'High' ? '85%' : '35%' }}
                  ></div>
                </div>
              </div>

              <div className="mt-4 d-grid gap-2">
                <button className="btn btn-xs btn-outline-cyan">Manual Override</button>
                <button className="btn btn-xs btn-primary-bg border-white-10">Configure Schedule</button>
              </div>
            </div>
          </div>
        ))}

        {/* Global Statistics */}
        <div className="col-xl-8">
          <div className="card-glass p-4 h-100">
            <h5 className="fw-bold mb-4 d-flex align-items-center gap-2">
              <FaBolt className="text-warning" /> Signal Network Performance
            </h5>
            <div className="row g-4">
              <div className="col-sm-4">
                <div className="text-center p-3 bg-white-5 rounded">
                  <h3 className="fw-bold mb-0 text-cyan">94%</h3>
                  <p className="small text-muted mb-0">Sync Efficiency</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="text-center p-3 bg-white-5 rounded">
                  <h3 className="fw-bold mb-0 text-success">12.4s</h3>
                  <p className="small text-muted mb-0">Avg. Wait Reduction</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="text-center p-3 bg-white-5 rounded">
                  <h3 className="fw-bold mb-0 text-warning">3</h3>
                  <p className="small text-muted mb-0">Manual Overrides</p>
                </div>
              </div>
            </div>
            <div className="mt-5 p-4 border-accent-left bg-cyan-soft rounded">
              <h6 className="fw-bold text-cyan mb-2">AI Optimization Active</h6>
              <p className="small text-light mb-0 opacity-75">
                The neural network is currently adjusting cycle timings across 42 junctions to mitigate a rising congestion pattern in the Northern Sector. 
                Estimated completion: 8 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="col-xl-4">
          <div className="card-glass p-4 h-100">
            <h5 className="fw-bold mb-4">Controller Health</h5>
            {[1, 2, 3].map(i => (
              <div key={i} className="d-flex align-items-center justify-content-between mb-3 p-2 border-bottom border-white-5">
                <div className="d-flex align-items-center gap-3">
                  <div className="signal-dot bg-success"></div>
                  <div>
                    <h6 className="mb-0 small fw-bold">Node {i * 100 + i}</h6>
                    <small className="text-muted x-small">Firmware v2.4.1</small>
                  </div>
                </div>
                <span className="text-success small">Healthy</span>
              </div>
            ))}
            <div className="mt-4 p-3 bg-danger-soft rounded border-danger-left">
              <div className="d-flex align-items-center gap-2 mb-2">
                <FaExclamationTriangle className="text-danger" />
                <h6 className="mb-0 small fw-bold text-danger">Maintenance Alert</h6>
              </div>
              <p className="x-small text-light opacity-75 mb-0">
                Node 204 (South Gate) reported intermittent latency. Service scheduled for tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .border-top-accent { border-top: 3px solid var(--color-accent) !important; }
        .signal-light {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #1a1f2e;
          opacity: 0.3;
        }
        .signal-light.active { opacity: 1; }
        .signal-light.red.active { background: #ff3b30; }
        .signal-light.yellow.active { background: #ffcc00; }
        .signal-light.green.active { background: #4caf50; }
        .shadow-red { box-shadow: 0 0 15px rgba(255, 59, 48, 0.6); }
        .shadow-green { box-shadow: 0 0 15px rgba(76, 175, 80, 0.6); }
        .bg-white-5 { background: rgba(255, 255, 255, 0.05); }
        .signal-dot { width: 8px; height: 8px; border-radius: 50%; }
        .x-small { font-size: 0.7rem; }
        .border-danger-left { border-left: 3px solid #ff3b30; }
      `}</style>
    </div>
  );
};

export default SignalControl;
