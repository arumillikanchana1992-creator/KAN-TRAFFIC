import React from 'react';

const SignalControl = ({ junction, state }) => {
  return (
    <div className="card-glass p-3 text-center">
      <h6 className="mb-3 text-light">{junction}</h6>
      <div className="signal-light-container d-inline-flex flex-column gap-2 p-2 bg-dark rounded-pill">
        <div className={`signal-light red ${state === 'red' ? 'active' : ''}`}></div>
        <div className={`signal-light yellow ${state === 'yellow' ? 'active' : ''}`}></div>
        <div className={`signal-light green ${state === 'green' ? 'active' : ''}`}></div>
      </div>
      <p className="mt-2 mb-0 small text-capitalize" style={{ color: 'var(--color-accent)' }}>
        {state} Light Active
      </p>
      <style jsx>{`
        .signal-light-container {
          border: 2px solid rgba(255,255,255,0.1);
        }
        .signal-light {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #222;
          box-shadow: inset 0 0 5px rgba(0,0,0,0.5);
          transition: all 0.3s ease;
        }
        .signal-light.red.active { background-color: #ff3b30; box-shadow: 0 0 15px #ff3b30; }
        .signal-light.yellow.active { background-color: #ffcc00; box-shadow: 0 0 15px #ffcc00; }
        .signal-light.green.active { background-color: #4caf50; box-shadow: 0 0 15px #4caf50; }
      `}</style>
    </div>
  );
};

export default SignalControl;
