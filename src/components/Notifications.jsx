import React from 'react';
import './Notifications.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Notifications = () => {
  const notifications = [
    { id: 1, message: 'Time for lunch', time: '12:00 PM' },
    { id: 2, message: 'Don\'t miss your workout', time: '5:00 PM' },
    { id: 3, message: 'Congratulations, you reached your target!', time: '8:00 PM' },
  ];

  return (
    <div className="notifications-container">
      <h2 className="notifications-title">Notifications</h2>

      <div className="notifications-list">
        {notifications.map((notification) => (
          <div key={notification.id} className="notification-card">
            <FontAwesomeIcon icon={faBell} className="notification-icon" />
            <div className="notification-content">
              <p className="notification-message">{notification.message}</p>
              <p className="notification-time">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
