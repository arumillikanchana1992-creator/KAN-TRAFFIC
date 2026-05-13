import React, { useState } from 'react';
import { FaExclamationTriangle, FaBell, FaMapMarkerAlt, FaClock, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const EmergencyAlerts = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'CRITICAL', sector: 'Sector 4', incident: 'Major Accident', time: '12 mins ago', status: 'In Progress', color: 'danger' },
    { id: 2, type: 'WARNING', sector: 'North Bridge', incident: 'Debris on Road', time: '45 mins ago', status: 'Dispatched', color: 'warning' },
    { id: 3, type: 'INFO', sector: 'East Tunnel', incident: 'Maintenance Work', time: '2 hours ago', status: 'Scheduled', color: 'info' },
    { id: 4, type: 'CRITICAL', sector: 'West Plaza', incident: 'Fire Hydrant Leak', time: '5 mins ago', status: 'Reported', color: 'danger' },
  ]);

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-0">Emergency Response Center</h2>
          <p className="text-muted">Real-time incident management and dispatching</p>
        </div>
        <button className="btn btn-danger btn-sm d-flex align-items-center gap-2">
          <FaBell /> Raise Emergency
        </button>
      </div>

      <div className="row g-4">
        {/* Active Incident List */}
        <div className="col-lg-8">
          <div className="card-glass p-0 overflow-hidden">
            <div className="p-3 border-bottom border-white-10 d-flex justify-content-between align-items-center">
              <h5 className="mb-0 fw-bold">Active Incidents</h5>
              <span className="badge bg-danger-soft text-danger">{alerts.filter(a => a.type === 'CRITICAL').length} Critical</span>
            </div>
            <div className="list-group list-group-flush bg-transparent">
              {alerts.map(alert => (
                <div key={alert.id} className="list-group-item bg-transparent border-white-10 p-4 transition-all hover-bg-white-5">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex gap-4">
                      <div className={`icon-box bg-${alert.color}-soft text-${alert.color} rounded-circle`}>
                        {alert.type === 'CRITICAL' ? <FaExclamationTriangle size={20} /> : <FaExclamationCircle size={20} />}
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">{alert.incident}</h6>
                        <div className="d-flex gap-3 text-muted small">
                          <span className="d-flex align-items-center gap-1"><FaMapMarkerAlt /> {alert.sector}</span>
                          <span className="d-flex align-items-center gap-1"><FaClock /> {alert.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <span className={`badge bg-${alert.color}-soft text-${alert.color} mb-2`}>{alert.status}</span>
                      <div className="d-flex gap-2">
                        <button className="btn btn-xs btn-outline-light">Details</button>
                        <button className="btn btn-xs btn-cyan">Dispatch</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dispatch Summary */}
        <div className="col-lg-4">
          <div className="card-glass p-4 mb-4">
            <h5 className="fw-bold mb-4">Dispatch Summary</h5>
            <div className="mb-4">
              <div className="d-flex justify-content-between mb-1">
                <small>Ambulance Units</small>
                <small className="text-cyan">8 / 12 Available</small>
              </div>
              <div className="progress bg-dark" style={{ height: '6px' }}>
                <div className="progress-bar bg-cyan" style={{ width: '66%' }}></div>
              </div>
            </div>
            <div className="mb-4">
              <div className="d-flex justify-content-between mb-1">
                <small>Patrol Units</small>
                <small className="text-warning">15 / 20 Available</small>
              </div>
              <div className="progress bg-dark" style={{ height: '6px' }}>
                <div className="progress-bar bg-warning" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between mb-1">
                <small>Fire Response</small>
                <small className="text-success">5 / 5 Available</small>
              </div>
              <div className="progress bg-dark" style={{ height: '6px' }}>
                <div className="progress-bar bg-success" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>

          <div className="card-glass p-4 border-cyan-left">
            <h6 className="fw-bold mb-3 d-flex align-items-center gap-2">
              <FaCheckCircle className="text-success" /> System Integrity
            </h6>
            <p className="small text-muted mb-0">
              Emergency protocols are currently operating at 100% efficiency. All dispatch units are connected via satellite link.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyAlerts;
