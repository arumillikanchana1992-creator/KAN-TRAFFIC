import React from 'react';
import { FaCloudSun, FaThermometerHalf, FaWind } from 'react-icons/fa';

const WeatherWidget = () => {
  return (
    <div className="weather-widget d-flex align-items-center gap-3 px-3 py-1 card-glass border-0">
      <div className="d-flex align-items-center gap-2">
        <FaCloudSun className="text-warning" size={20} />
        <span className="fw-bold">Partly Cloudy</span>
      </div>
      <div className="d-flex align-items-center gap-2 border-start border-secondary ps-3">
        <FaThermometerHalf className="text-info" />
        <span>28°C</span>
      </div>
      <div className="d-flex align-items-center gap-2 border-start border-secondary ps-3 d-none d-md-flex">
        <FaWind className="text-light opacity-50" />
        <span className="small text-muted">12 km/h NW</span>
      </div>
    </div>
  );
};

export default WeatherWidget;
