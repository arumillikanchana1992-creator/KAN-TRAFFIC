import React, { useState } from 'react';
import { FaRoad, FaCogs, FaShieldAlt, FaPlus, FaSave } from 'react-icons/fa';

const SpeedControl = () => {
  const [sectors, setSectors] = useState([
    { id: 'S-1', name: 'Downtown Core', currentLimit: 40, autoEnforce: true, status: 'Active' },
    { id: 'S-2', name: 'Highway 101 (Inbound)', currentLimit: 80, autoEnforce: true, status: 'Active' },
    { id: 'S-3', name: 'Residential Zone B', currentLimit: 30, autoEnforce: false, status: 'Alert' },
    { id: 'S-4', name: 'Industrial Bypass', currentLimit: 60, autoEnforce: true, status: 'Active' },
  ]);

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-0">Speed & Traffic Enforcement</h2>
          <p className="text-muted">Dynamic speed limit configuration and automated patrol management</p>
        </div>
        <button className="btn btn-cyan btn-sm d-flex align-items-center gap-2">
          <FaPlus /> Add New Sector
        </button>
      </div>

      <div className="row g-4">
        {/* Sector Control List */}
        <div className="col-lg-8">
          <div className="card-glass p-0 overflow-hidden">
            <div className="p-3 border-bottom border-white-10 d-flex justify-content-between align-items-center">
              <h5 className="mb-0 fw-bold">Sector Configuration</h5>
              <button className="btn btn-xs btn-outline-cyan">Batch Update</button>
            </div>
            <div className="table-responsive">
              <table className="table table-dark table-hover mb-0 bg-transparent">
                <thead>
                  <tr className="border-white-10">
                    <th className="px-4 py-3 border-0">Sector Name</th>
                    <th className="py-3 border-0">Speed Limit</th>
                    <th className="py-3 border-0">Auto-Enforce</th>
                    <th className="py-3 border-0">Status</th>
                    <th className="py-3 border-0 text-end px-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="border-0">
                  {sectors.map(sector => (
                    <tr key={sector.id} className="border-white-10 align-middle">
                      <td className="px-4 py-3 border-0">
                        <div className="fw-bold">{sector.name}</div>
                        <small className="text-muted">{sector.id}</small>
                      </td>
                      <td className="py-3 border-0">
                        <div className="d-flex align-items-center gap-2">
                          <input 
                            type="number" 
                            className="form-control form-control-sm bg-dark border-white-10 text-cyan text-center" 
                            value={sector.currentLimit}
                            style={{ width: '60px' }}
                            readOnly
                          />
                          <span className="small text-muted">km/h</span>
                        </div>
                      </td>
                      <td className="py-3 border-0">
                        <div className="form-check form-switch">
                          <input 
                            className="form-check-input bg-cyan" 
                            type="checkbox" 
                            checked={sector.autoEnforce}
                            readOnly
                          />
                        </div>
                      </td>
                      <td className="py-3 border-0">
                        <span className={`badge ${sector.status === 'Active' ? 'bg-success-soft text-success' : 'bg-warning-soft text-warning'}`}>
                          {sector.status}
                        </span>
                      </td>
                      <td className="py-3 border-0 text-end px-4">
                        <button className="btn btn-xs btn-outline-light me-2"><FaCogs /></button>
                        <button className="btn btn-xs btn-outline-danger"><FaShieldAlt /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Enforcement Summary */}
        <div className="col-lg-4">
          <div className="card-glass p-4 mb-4">
            <h5 className="fw-bold mb-4">Violation Detection</h5>
            <div className="text-center py-4 bg-white-5 rounded mb-4">
              <h2 className="fw-bold text-danger mb-0">142</h2>
              <p className="small text-muted mb-0">Infractions Detected (24h)</p>
            </div>
            <div className="d-flex flex-column gap-3">
              <div className="p-3 bg-white-5 rounded d-flex justify-content-between align-items-center">
                <span className="small">Automated Fines Issued</span>
                <span className="fw-bold text-cyan">98</span>
              </div>
              <div className="p-3 bg-white-5 rounded d-flex justify-content-between align-items-center">
                <span className="small">Patrol Interventions</span>
                <span className="fw-bold text-warning">12</span>
              </div>
              <div className="p-3 bg-white-5 rounded d-flex justify-content-between align-items-center">
                <span className="small">Severe Overspeeding</span>
                <span className="fw-bold text-danger">5</span>
              </div>
            </div>
          </div>

          <div className="card-glass p-4 border-warning-left bg-warning-soft">
            <h6 className="fw-bold text-warning mb-2 d-flex align-items-center gap-2">
              <FaShieldAlt /> Safety Protocol
            </h6>
            <p className="small text-light opacity-75 mb-0">
              High-risk weather detected in Sector 3. Recommended speed reduction to 20 km/h is being broadcasted to all smart vehicles.
            </p>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .bg-white-5 { background: rgba(255, 255, 255, 0.05); }
        .border-warning-left { border-left: 4px solid #ffcc00; }
        .table-dark { --bs-table-bg: transparent; }
        .form-check-input:checked {
          background-color: var(--color-cyan);
          border-color: var(--color-cyan);
        }
      `}</style>
    </div>
  );
};

export default SpeedControl;
