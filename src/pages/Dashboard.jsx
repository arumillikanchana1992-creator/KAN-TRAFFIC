import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { FaCar, FaAmbulance, FaExclamationTriangle, FaVolumeUp } from 'react-icons/fa';
import StatCard from '../components/StatCard';
import VehicleSpeedCard from '../components/VehicleSpeedCard';
import EmergencyAlert from '../components/EmergencyAlert';
import SignalControl from '../components/SignalControl';
import PredictionChart from '../components/PredictionChart';
import CCTVPreview from '../components/CCTVPreview';
import ActivityLog from '../components/ActivityLog';
import CityMap from '../components/CityMap';
import SignalOptimization from '../components/SignalOptimization';
import { mockStats, liveTraffic, chartData } from '../utils/mockData';

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="mb-0 fw-bold">Smart City Traffic Overview</h2>
          <p className="text-muted">Real-time AI-powered monitoring</p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="row mb-4">
        {mockStats.map((stat, idx) => (
          <div className="col-xl-3 col-md-6 mb-3" key={idx}>
            <StatCard 
              title={stat.title} 
              value={stat.value} 
              color={stat.color} 
              trend={stat.trend}
              icon={idx === 0 ? <FaCar/> : idx === 1 ? <FaAmbulance/> : idx === 2 ? <FaExclamationTriangle/> : <FaVolumeUp/>}
            />
          </div>
        ))}
      </div>

      <div className="row mb-4">
        {/* Analytics Section */}
        <div className="col-xl-9 col-lg-8 mb-4">
          <div className="row g-4">
            <div className="col-12 col-xl-8">
              <div className="card-glass p-4 h-100">
                <h5 className="mb-4">Traffic Density Trends</h5>
                <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorVehicles" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00e5ff" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#00e5ff" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                      <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" />
                      <YAxis stroke="rgba(255,255,255,0.5)" />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1a1d2d', border: '1px solid rgba(255,255,255,0.1)' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Area type="monotone" dataKey="vehicles" stroke="#00e5ff" fillOpacity={1} fill="url(#colorVehicles)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <PredictionChart />
            </div>
          </div>
        </div>

        {/* Live Signal Control & Noise */}
        <div className="col-xl-3 col-lg-4 mb-4">
          <div className="row g-3">
            <div className="col-6 col-xl-12">
              <SignalControl junction="Main St. Crossing" state="green" />
            </div>
            <div className="col-6 col-xl-12">
              <div className="card-glass p-3 h-100">
                <h5>Sound Monitoring</h5>
                <div className="d-flex align-items-end gap-2" style={{ height: '100px' }}>
                  {[40, 70, 45, 90, 65, 30, 85, 50, 75, 40].map((h, i) => (
                    <div 
                      key={i} 
                      className={`flex-grow-1 rounded-top ${h > 80 ? 'bg-danger' : 'bg-info'}`} 
                      style={{ height: `${h}%`, opacity: 0.7 }}
                    ></div>
                  ))}
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <small>65 dB (Average)</small>
                  <small className="text-danger">Peak 90 dB</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Live Traffic Monitoring */}
        <div className="col-xl-4 col-lg-6 mb-4">
          <div className="card-glass p-4 h-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="mb-0">Live Vehicles</h5>
              <span className="badge bg-success">Active</span>
            </div>
            {liveTraffic.map((vehicle, idx) => (
              <VehicleSpeedCard key={idx} {...vehicle} />
            ))}
          </div>
        </div>

        {/* Emergency Alerts & CCTV */}
        <div className="col-xl-4 col-lg-6 mb-4">
          <div className="d-flex flex-column gap-4 h-100">
            <div className="card-glass p-4">
              <h5 className="mb-4">Visual Monitoring</h5>
              <CCTVPreview junctionName="Main Crossing" />
              <CCTVPreview junctionName="North Avenue" />
            </div>
            <div className="flex-grow-1">
              <CityMap />
            </div>
          </div>
        </div>

        {/* Alerts & Activity Log */}
        <div className="col-xl-4 col-lg-12 mb-4">
          <div className="d-flex flex-column gap-4 h-100">
            <div className="card-glass p-4">
              <h5 className="mb-4 text-danger">Critical Alerts</h5>
              <EmergencyAlert 
                vehicleType="Ambulance" 
                location="Sector 7 - Junction B" 
                distance={450} 
              />
            </div>
            <div className="flex-grow-1">
              <SignalOptimization />
            </div>
            <ActivityLog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
