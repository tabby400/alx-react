

import React from 'react';
import PropTypes from 'prop-types';

const Notifications = ({ notifications }) => {
  return (
    <div>
      <p>Here is the list of notifications:</p>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.value}</li>
        ))}
      </ul>
    </div>
  );
};

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
};

export default Notifications;
