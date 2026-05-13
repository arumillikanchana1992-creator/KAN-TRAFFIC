import React from 'react';
import './StatCard.scss';

const StatCard = ({ title, value, icon, color, trend }) => {
  return (
    <div className="stat-card card-glass">
      <div className="stat-card-content">
        <div className="stat-info">
          <p className="stat-title">{title}</p>
          <h3 className="stat-value">{value}</h3>
          {trend && (
            <p className={`stat-trend ${trend.startsWith('+') ? 'text-success' : 'text-warning'}`}>
              {trend} vs last hour
            </p>
          )}
        </div>
        <div className="stat-icon" style={{ color: color }}>
          {icon}
        </div>
      </div>
      <div className="stat-progress-bg">
        <div 
          className="stat-progress-bar" 
          style={{ backgroundColor: color, width: '70%' }}
        ></div>
      </div>
    </div>
  );
};

export default StatCard;
