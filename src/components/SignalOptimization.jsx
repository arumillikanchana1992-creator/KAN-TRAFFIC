import React, { useState } from 'react';
import { FaBrain, FaPowerOff, FaSync } from 'react-icons/fa';

const SignalOptimization = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="signal-optimization card-glass p-3 h-100">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="mb-0 fw-bold d-flex align-items-center gap-2">
          <FaBrain className={isActive ? 'text-info pulse' : 'text-secondary'} /> AI Signal Optimization
        </h6>
        <div className="form-check form-switch m-0">
          <input 
            className="form-check-input bg-info border-info cursor-pointer" 
            type="checkbox" 
            role="switch" 
            checked={isActive}
            onChange={() => setIsActive(!isActive)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>

      <div className={`p-3 rounded mb-3 transition-all ${isActive ? 'bg-info bg-opacity-10 border border-info border-opacity-25' : 'bg-dark bg-opacity-50 border border-secondary border-opacity-25'}`}>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <span className={`d-block fw-bold ${isActive ? 'text-info' : 'text-muted'}`}>
              {isActive ? 'System Active' : 'System Standby'}
            </span>
            <small className="text-muted">Dynamic routing & light timing</small>
          </div>
          <FaPowerOff size={24} className={isActive ? 'text-info opacity-75' : 'text-secondary opacity-50'} />
        </div>
      </div>

      <div className="row g-2 text-center mt-auto">
        <div className="col-6">
          <div className="p-2 bg-dark rounded h-100">
            <small className="text-muted d-block mb-1">Efficiency Gain</small>
            <span className={`fw-bold fs-5 ${isActive ? 'text-success' : 'text-secondary'}`}>
              {isActive ? '+18%' : '0%'}
            </span>
          </div>
        </div>
        <div className="col-6">
          <div className="p-2 bg-dark rounded h-100">
            <small className="text-muted d-block mb-1">Last Sync</small>
            <span className="fw-bold fs-6 text-light d-flex align-items-center justify-content-center gap-1">
              <FaSync size={10} className={isActive ? 'spin text-info' : ''} /> 2m ago
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .spin { animation: spin 2s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default SignalOptimization;
