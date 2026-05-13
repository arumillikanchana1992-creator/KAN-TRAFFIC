import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaRoad, FaExclamationTriangle, FaMotorcycle, FaSignal, FaChartBar, FaCog, FaBars } from 'react-icons/fa';
import { useUI } from '../context/UIContext';
import './Sidebar.scss';

const menuItems = [
  { name: 'Dashboard', path: '/', icon: <FaTachometerAlt /> },
  { name: 'Speed Control', path: '/speed', icon: <FaRoad /> },
  { name: 'Emergency Alerts', path: '/emergency', icon: <FaExclamationTriangle /> },
  { name: 'Lane Monitoring', path: '/lanes', icon: <FaMotorcycle /> },
  { name: 'Signal Control', path: '/signals', icon: <FaSignal /> },
  { name: 'Reports', path: '/reports', icon: <FaChartBar /> },
  { name: 'Settings', path: '/settings', icon: <FaCog /> },
];

const Sidebar = () => {
  const { isSidebarOpen, isSidebarCollapsed, toggleCollapse, closeSidebar } = useUI();

  return (
    <React.Fragment>
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.6)',
            zIndex: 998,
          }}
        />
      )}
      <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''} ${isSidebarOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="logo">Kan Traffic</h2>
          <button className="toggle-btn d-none d-md-flex" onClick={toggleCollapse} aria-label="Toggle collapse">
            <FaBars />
          </button>
        </div>
        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
            >
              <span className="icon">{item.icon}</span>
              {!isSidebarCollapsed && <span className="title">{item.name}</span>}
            </NavLink>
          ))}
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
