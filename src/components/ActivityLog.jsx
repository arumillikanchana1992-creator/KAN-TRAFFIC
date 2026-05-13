import React from 'react';
import { FaHistory, FaCheckCircle, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';

const logItems = [
  { id: 1, type: 'success', time: '14:45:02', message: 'Signal Junction A synced with Central Hub' },
  { id: 2, type: 'warning', time: '14:44:15', message: 'Congestion detected at North Avenue (Lane 2)' },
  { id: 3, type: 'info', time: '14:42:10', message: 'Maintenance crew dispatched to Signal #42' },
  { id: 4, type: 'danger', time: '14:40:55', message: 'Overspeed Alert: TX-402 (112 km/h)' },
  { id: 5, type: 'info', time: '14:38:20', message: 'Emergency vehicle prioritization active at Sector 7' },
];

const ActivityLog = () => {
  return (
    <div className="activity-log card-glass p-3">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <h6 className="mb-0 fw-bold d-flex align-items-center gap-2">
          <FaHistory className="text-info" /> Live Activity Feed
        </h6>
        <span className="badge bg-info small">Real-time</span>
      </div>
      <div className="log-container overflow-auto" style={{ maxHeight: '300px' }}>
        {logItems.map((item) => (
          <div key={item.id} className="log-item d-flex gap-3 mb-3 pb-2 border-bottom border-secondary border-opacity-10">
            <div className="log-icon mt-1">
              {item.type === 'success' && <FaCheckCircle className="text-success" />}
              {item.type === 'warning' && <FaExclamationCircle className="text-warning" />}
              {item.type === 'danger' && <FaExclamationCircle className="text-danger" />}
              {item.type === 'info' && <FaInfoCircle className="text-info" />}
            </div>
            <div className="log-content">
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted fw-bold" style={{ fontSize: '0.7rem' }}>{item.time}</small>
              </div>
              <p className="mb-0 small text-light opacity-75">{item.message}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-sm btn-outline-info w-100 mt-2 py-1" style={{ fontSize: '0.8rem' }}>
        View Full Log
      </button>
    </div>
  );
};

export default ActivityLog;
