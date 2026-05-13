import React from 'react';
import { FaAmbulance } from 'react-icons/fa';

const EmergencyAlert = ({ vehicleType, location, distance }) => {
  return (
    <div className="emergency-alert-banner card-glass border-danger p-3 mb-3 d-flex align-items-center">
      <div className="alert-icon-container bg-danger p-3 rounded-circle me-3 blink">
        <FaAmbulance size={24} className="text-white" />
      </div>
      <div className="flex-grow-1">
        <h6 className="text-danger fw-bold mb-1">EMERGENCY VEHICLE APPROACHING</h6>
        <p className="mb-0 text-light small">
          {vehicleType} at <strong>{location}</strong> - Approaching in {distance}m
        </p>
      </div>
      <div className="status-indicator">
        <span className="badge bg-danger pulse">PRIORITY 1</span>
      </div>
    </div>
  );
};

export default EmergencyAlert;
