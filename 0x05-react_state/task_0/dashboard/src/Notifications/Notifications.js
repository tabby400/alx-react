import React from "react";
import PropTypes from "prop-types";
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

function Notifications({ listNotifications, displayDrawer, handleDisplayDrawer, handleHideDrawer }) {
  return (
    <div className={css(styles.notificationsPanel)}>
      <button onClick={handleDisplayDrawer}>Your notifications</button>
      {displayDrawer && (
        <div>
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
              />
            ))
          )}
          <button onClick={handleHideDrawer}>Close</button>
        </div>
      )}
    </div>
  );
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  displayDrawer: PropTypes.bool.isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  listNotifications: [],
};

const styles = StyleSheet.create({
  notificationsPanel: {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
  },
});

export default Notifications;
