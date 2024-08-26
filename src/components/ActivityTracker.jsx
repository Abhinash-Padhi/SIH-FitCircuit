import React from 'react';
import './ActivityTracker.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', steps: 3200 },
  { name: 'Tue', steps: 4500 },
  { name: 'Wed', steps: 3000 },
  { name: 'Thu', steps: 5000 },
  { name: 'Fri', steps: 4000 },
  { name: 'Sat', steps: 6000 },
  { name: 'Sun', steps: 7000 },
];

const ActivityTracker = () => {
  return (
    <div className="activity-tracker-container">
      <h2 className="activity-tracker-title">Activity Tracker</h2>

      <div className="target-section">
        <div className="target-card">
          <h3>Today’s Target</h3>
          <p>4,500 Steps</p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
        </div>
      </div>

      <div className="progress-section">
        <h3 className="progress-title">Activity Progress</h3>
        <div className="progress-chart">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="steps" fill="#6c63ff" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="latest-activity-section">
        <h3>Latest Activity</h3>
        <div className="activity-card">
          <p>Morning Run</p>
          <p>2,500 Steps</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityTracker;
