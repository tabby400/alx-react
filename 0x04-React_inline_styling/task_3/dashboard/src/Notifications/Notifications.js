import React from 'react';
import './Notifications.css';

function Notifications({ isOpen }) {
  return (
    <div className={`notifications-panel ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>No new notification for now</li>
      </ul>
    </div>
  );
}

export default Notifications;