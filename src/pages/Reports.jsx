import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend, PieChart, Pie, Cell
} from 'recharts';
import { FaDownload, FaFilter, FaRobot } from 'react-icons/fa';
import { trafficDensityData, predictionData } from '../utils/mockData';

const COLORS = ['#00e5ff', '#007bff', '#ff3b30', '#ffcc00'];

const Reports = () => {
  const pieData = [
    { name: 'Private Cars', value: 65 },
    { name: 'Public Transport', value: 20 },
    { name: 'Emergency', value: 5 },
    { name: 'Heavy Vehicles', value: 10 },
  ];

  return (
    <div className="container-fluid py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-0">Traffic Intelligence Reports</h2>
          <p className="text-muted">Comprehensive AI-driven traffic analysis and forecasting</p>
        </div>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-secondary btn-sm d-flex align-items-center gap-2">
            <FaFilter /> Filter
          </button>
          <button className="btn btn-cyan btn-sm d-flex align-items-center gap-2">
            <FaDownload /> Export PDF
          </button>
        </div>
      </div>

      <div className="row g-4">
        {/* AI Insight Card */}
        <div className="col-12">
          <div className="card-glass p-4 border-accent-left">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="icon-box bg-cyan-soft text-cyan">
                <FaRobot size={24} />
              </div>
              <h5 className="mb-0 fw-bold text-cyan">AI Traffic Executive Summary</h5>
            </div>
            <p className="mb-0 text-light opacity-75">
              Based on the last 24 hours of data, AI models have detected a 15% increase in traffic density during morning peak hours (07:00 - 09:00). 
              Our predictive algorithms suggest a high probability (88%) of congestion on North Boulevard within the next 45 minutes due to a stalled vehicle on the shoulder.
              Optimization recommendation: Extend green light duration at Sector 4 by 12 seconds.
            </p>
          </div>
        </div>

        {/* Traffic Density Trends */}
        <div className="col-lg-8">
          <div className="card-glass h-100 p-4">
            <h5 className="fw-bold mb-4">Weekly Traffic Density Trends</h5>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trafficDensityData}>
                  <defs>
                    <linearGradient id="colorDensity" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00e5ff" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00e5ff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
                    itemStyle={{ color: '#00e5ff' }}
                  />
                  <Area type="monotone" dataKey="density" stroke="#00e5ff" fillOpacity={1} fill="url(#colorDensity)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Vehicle Composition */}
        <div className="col-lg-4">
          <div className="card-glass h-100 p-4">
            <h5 className="fw-bold mb-4">Vehicle Composition</h5>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
                  />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Peak Hour Performance */}
        <div className="col-12">
          <div className="card-glass p-4">
            <h5 className="fw-bold mb-4">Peak Hour Performance (Sector Comparison)</h5>
            <div style={{ height: '300px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={predictionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1f2e', border: '1px solid rgba(255,255,255,0.1)', color: '#fff' }}
                  />
                  <Bar dataKey="flow" fill="#007bff" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="prediction" fill="#ff3b30" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
