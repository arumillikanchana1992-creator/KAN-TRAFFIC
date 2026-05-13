import React, { useState } from 'react';
import { FaSearch, FaBell, FaUserCircle, FaBars } from 'react-icons/fa';
import dayjs from 'dayjs';
import { useUI } from '../context/UIContext';
import WeatherWidget from './WeatherWidget';
import './Navbar.scss';

const Navbar = () => {
  const [time, setTime] = useState(dayjs().format('HH:mm:ss'));
  const { toggleSidebar } = useUI();

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(dayjs().format('HH:mm:ss'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <nav className="navbar bg-primary-bg py-2 px-3 d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-light me-2 d-md-none" onClick={toggleSidebar} aria-label="Toggle sidebar">
            <FaBars />
          </button>
          <span className="navbar-clock neon fw-bold">{time}</span>
        </div>
        <div className="d-none d-lg-block">
          <WeatherWidget />
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="position-relative me-3">
          <button className="btn btn-outline-light" aria-label="Notifications">
            <FaBell />
          </button>
          <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle p-1 blink" aria-label="New alerts">3</span>
        </div>
        <div className="d-flex align-items-center">
          <FaUserCircle size={28} className="text-light me-2" />
          <span className="text-light">Admin</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
