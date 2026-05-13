import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const predictionData = [
  { time: '17:00', predicted: 1450, status: 'high' },
  { time: '18:00', predicted: 1600, status: 'peak' },
  { time: '19:00', predicted: 1200, status: 'high' },
  { time: '20:00', predicted: 850, status: 'medium' },
  { time: '21:00', predicted: 600, status: 'low' },
];

const PredictionChart = () => {
  return (
    <div className="prediction-chart card-glass p-3 h-100">
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h6 className="fw-bold mb-1">AI Traffic Prediction</h6>
          <p className="text-muted small mb-0">Forecasted volume for next 4 hours</p>
        </div>
        <div className="badge bg-primary text-wrap" style={{ width: '6rem' }}>AI Conf. 94%</div>
      </div>
      
      <div style={{ width: '100%', height: '200px' }}>
        <ResponsiveContainer>
          <BarChart data={predictionData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis dataKey="time" stroke="rgba(255,255,255,0.4)" fontSize={10} axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip 
              cursor={{ fill: 'rgba(255,255,255,0.05)' }}
              contentStyle={{ backgroundColor: '#1a1d2d', border: '1px solid rgba(255,255,255,0.1)', fontSize: '12px' }}
            />
            <Bar dataKey="predicted" radius={[4, 4, 0, 0]}>
              {predictionData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.status === 'peak' ? '#ff3b30' : entry.status === 'high' ? '#ff9f43' : '#00e5ff'} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-3 p-2 bg-dark rounded bg-opacity-50">
        <div className="d-flex align-items-center gap-2">
          <div className="bg-warning rounded-circle" style={{ width: '8px', height: '8px' }}></div>
          <small className="text-light opacity-75" style={{ fontSize: '0.75rem' }}>
            Peak volume expected at <strong>18:00</strong>. Suggesting signal optimization.
          </small>
        </div>
      </div>
    </div>
  );
};

export default PredictionChart;
