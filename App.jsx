// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import LaneMonitoring from "./pages/LaneMonitoring";
import EmergencyAlerts from "./pages/EmergencyAlerts";
import SignalControl from "./pages/SignalControl";
import SpeedControl from "./pages/SpeedControl";
import Settings from "./pages/Settings";
import { UIProvider } from "./context/UIContext";

// Placeholder components for remaining pages
const Placeholder = ({ title }) => (
  <div className="container-fluid py-4">
    <h2 className="fw-bold mb-0">{title}</h2>
    <p className="text-muted">This section is currently under development.</p>
    <div className="card-glass p-5 text-center mt-4">
      <div className="spinner-border text-cyan mb-3" role="status"></div>
      <h4 className="text-secondary">Coming Soon</h4>
      <p className="text-muted small">We are integrating AI modules for this feature.</p>
    </div>
  </div>
);

const App = () => {
  return (
    <UIProvider>
      <Router>
        <div className="d-flex" style={{ minHeight: "100vh" }}>
          <Sidebar />
          <div className="flex-grow-1 d-flex flex-column bg-primary-bg">
            <Navbar />
            <main className="flex-grow-1 overflow-auto">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/speed" element={<SpeedControl />} />
                <Route path="/emergency" element={<EmergencyAlerts />} />
                <Route path="/lanes" element={<LaneMonitoring />} />
                <Route path="/signals" element={<SignalControl />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </UIProvider>
  );
};

export default App;
