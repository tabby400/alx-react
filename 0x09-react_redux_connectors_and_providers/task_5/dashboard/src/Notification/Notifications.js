import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';

const Notifications = ({ notifications, fetchNotifications }) => {
  useEffect(() => {
    // Call fetchNotifications when component mounts
    fetchNotifications();
  }, [fetchNotifications]);

  return (
    <div>
      <p>Notifications:</p>
      <ul>
        {notifications.map((notification) => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
};

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
  fetchNotifications: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notifications: state.notifications.get('notifications').toJS(),
});

// Connect fetchNotifications action creator to the component
export default connect(mapStateToProps, { fetchNotifications })(Notifications);
