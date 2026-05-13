import React from 'react';
import { FaUser, FaBell, FaRobot, FaDatabase, FaShieldAlt, FaSave } from 'react-icons/fa';

const Settings = () => {
  return (
    <div className="container-fluid py-4">
      <div className="mb-4">
        <h2 className="fw-bold mb-0">System Settings</h2>
        <p className="text-muted">Manage dashboard preferences, AI models, and user access</p>
      </div>

      <div className="row g-4">
        {/* Navigation Sidebar for Settings */}
        <div className="col-lg-3">
          <div className="card-glass p-3 h-100">
            <div className="list-group list-group-flush bg-transparent">
              <a href="#" className="list-group-item bg-transparent text-cyan border-white-10 py-3 d-flex align-items-center gap-3">
                <FaUser /> Profile Details
              </a>
              <a href="#" className="list-group-item bg-transparent text-light opacity-75 border-white-10 py-3 d-flex align-items-center gap-3 hover-bg-white-5">
                <FaBell /> Notifications
              </a>
              <a href="#" className="list-group-item bg-transparent text-light opacity-75 border-white-10 py-3 d-flex align-items-center gap-3 hover-bg-white-5">
                <FaRobot /> AI Model Config
              </a>
              <a href="#" className="list-group-item bg-transparent text-light opacity-75 border-white-10 py-3 d-flex align-items-center gap-3 hover-bg-white-5">
                <FaDatabase /> Data Retention
              </a>
              <a href="#" className="list-group-item bg-transparent text-light opacity-75 border-0 py-3 d-flex align-items-center gap-3 hover-bg-white-5">
                <FaShieldAlt /> Security & Logs
              </a>
            </div>
          </div>
        </div>

        {/* Settings Content */}
        <div className="col-lg-9">
          <div className="card-glass p-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="fw-bold mb-0">General Configuration</h5>
              <button className="btn btn-cyan btn-sm d-flex align-items-center gap-2">
                <FaSave /> Save Changes
              </button>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <label className="form-label small text-muted">Dashboard Title</label>
                <input type="text" className="form-control bg-dark border-white-10 text-light" defaultValue="Kan Traffic - Central Hub" />
              </div>
              <div className="col-md-6">
                <label className="form-label small text-muted">Primary Sector</label>
                <select className="form-select bg-dark border-white-10 text-light">
                  <option>Downtown Core</option>
                  <option>Sector 4</option>
                  <option>North Bridge</option>
                </select>
              </div>
              <div className="col-12 mt-4">
                <h6 className="fw-bold text-cyan mb-3">AI Intelligence Settings</h6>
                <div className="form-check form-switch mb-3">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label ms-2">Enable Predictive Traffic Analysis</label>
                </div>
                <div className="form-check form-switch mb-3">
                  <input className="form-check-input" type="checkbox" defaultChecked />
                  <label className="form-check-label ms-2">Auto-Optimize Signal Cycles during Congestion</label>
                </div>
                <div className="form-check form-switch mb-3">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label ms-2">Send Mobile Alerts for Critical Incidents</label>
                </div>
              </div>

              <div className="col-12 mt-4">
                <h6 className="fw-bold text-warning mb-3">System Maintenance</h6>
                <div className="p-3 bg-white-5 rounded border-white-10 d-flex justify-content-between align-items-center">
                  <div>
                    <div className="fw-bold small">Database Synchronization</div>
                    <small className="text-muted">Last synced: 4 minutes ago</small>
                  </div>
                  <button className="btn btn-xs btn-outline-warning">Sync Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .bg-white-5 { background: rgba(255, 255, 255, 0.05); }
        .form-control:focus, .form-select:focus {
          background-color: #0b0f1a;
          border-color: var(--color-cyan);
          color: #fff;
          box-shadow: 0 0 10px rgba(0, 229, 255, 0.2);
        }
        .form-check-input:checked {
          background-color: var(--color-cyan);
          border-color: var(--color-cyan);
        }
      `}</style>
    </div>
  );
};

export default Settings;
