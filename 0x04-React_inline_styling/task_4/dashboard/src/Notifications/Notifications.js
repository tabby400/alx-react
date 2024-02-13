import React from "react";
import PropTypes from "prop-types";
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css, keyframes } from 'aphrodite';

function Notifications({ listNotifications, isOpen }) {
  const fadeIn = keyframes({
    '0%': { opacity: 0.5 },
    '100%': { opacity: 1 },
  });

  const bounce = keyframes({
    '0%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-5px)' },
    '100%': { transform: 'translateY(5px)' },
  });

  return (
    <div className={css(styles.notificationsPanel, isOpen && styles.openPanel)}>
      {listNotifications.length === 0 ? (
        <p>No new notification for now</p>
      ) : (
        listNotifications.map(notification => (
          <NotificationItem
            key={notification.id}
            id={notification.id}
            type={notification.type}
            value={notification.value}
            html={notification.html}
            notification={notification}
          />
        ))
      )}
      <div className={css(styles.menuItem)}></div>
    </div>
  );
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  isOpen: PropTypes.bool.isRequired,
};

Notifications.defaultProps = {
  listNotifications: [],
};

const styles = StyleSheet.create({
  notificationsPanel: {
    position: 'relative',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    padding: '10px',
  },
  openPanel: {
    position: 'relative',
    zIndex: '9999',
    overflow: 'auto',
    fontSize: '20px',
    padding: '0', // Remove padding for ul
  },
  menuItem: {
    position: 'fixed',
    top: '10px',
    right: '10px',
    width: '50px',
    height: '50px',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',
    borderRadius: '50%',
    animationName: [fadeIn, bounce],
    animationDuration: '1s, 0.5s',
    animationTimingFunction: 'linear, ease-in-out',
    animationIterationCount: '3',
    ':hover': {
      animationName: [fadeIn, bounce],
      animationDuration: '1s, 0.5s',
      animationTimingFunction: 'linear, ease-in-out',
      animationIterationCount: '3',
    },
    '@media (max-width: 900px)': {
      display: 'none', // Hide menu item on smaller screens
    },
  },
});

export default Notifications;