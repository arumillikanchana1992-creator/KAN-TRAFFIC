import React from 'react';

const VehicleSpeedCard = ({ vehicleId, type, speed, limit }) => {
  const isOverspeed = speed > limit;
  const percentage = Math.min((speed / 150) * 100, 100);

  return (
    <div className={`card-glass p-3 mb-3 ${isOverspeed ? 'border-danger' : ''}`}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div>
          <span className="badge bg-secondary me-2">{type}</span>
          <span className="fw-bold">#{vehicleId}</span>
        </div>
        <span className={`fw-bold ${isOverspeed ? 'text-warning blink' : 'text-success'}`}>
          {speed} km/h
        </span>
      </div>
      <div className="progress bg-dark" style={{ height: '8px' }}>
        <div 
          className={`progress-bar ${isOverspeed ? 'bg-danger' : 'bg-info'}`}
          role="progressbar" 
          style={{ width: `${percentage}%` }}
          aria-valuenow={speed} 
          aria-valuemin="0" 
          aria-valuemax="150"
        ></div>
      </div>
      {isOverspeed && (
        <small className="text-danger mt-1 d-block">
          Overspeed Warning: Limit {limit} km/h
        </small>
      )}
    </div>
  );
};

export default VehicleSpeedCard;
