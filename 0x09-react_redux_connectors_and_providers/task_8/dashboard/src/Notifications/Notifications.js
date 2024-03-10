import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setNotificationFilter } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';

const Notifications = ({ notifications, setNotificationFilter }) => {
  return (
    <div>
      <p>Here is the list of notifications:</p>
      <button onClick={() => setNotificationFilter('URGENT')}>‼️</button>
      <button onClick={() => setNotificationFilter('DEFAULT')}>💠</button>
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
  setNotificationFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state),
});

export default connect(mapStateToProps, { setNotificationFilter })(Notifications);
