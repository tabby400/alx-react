import React from "react";
import PropTypes from "prop-types";
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

function Notifications({ listNotifications }) {
  return (
    <div className={css(styles.notificationsPanel)}>
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
    </div>
  );
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
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