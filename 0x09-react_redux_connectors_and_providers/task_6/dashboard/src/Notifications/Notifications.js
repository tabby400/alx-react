import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators';
import { StyleSheet, css } from 'aphrodite';
import { getUnreadNotifications } from '../selectors/notificationSelector';

const Notifications = ({ notifications, fetchNotifications, markAsRead }) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  const handleClick = (id) => {
    markAsRead(id);
  };

  return (
    <div className={css(styles.notifications)}>
      <p className={css(styles.header)}>Here are the notifications</p>
      {notifications.map((notification) => (
        <div key={notification.id} onClick={() => handleClick(notification.id)} className={css(styles.notification)}>
          <p>{notification.value}</p>
        </div>
      ))}
    </div>
  );
};

Notifications.propTypes = {
  notifications: PropTypes.array.isRequired,
  fetchNotifications: PropTypes.func.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  notifications: getUnreadNotifications(state).valueSeq().toArray(),
});

export default connect(mapStateToProps, { fetchNotifications, markAsRead })(Notifications);

const styles = StyleSheet.create({
  notifications: {
    border: '2px dashed #e14852',
    padding: '10px',
    margin: '10px 0',
  },
  header: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  notification: {
    padding: '5px',
    backgroundColor: '#f5f5f5',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#e1e1e1',
    },
  },
});
