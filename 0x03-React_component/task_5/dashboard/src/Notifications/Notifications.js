import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { listNotifications, markNotificationAsRead } = this.props;

    return (
      <ul>
        {listNotifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            id={notification.id}
            type={notification.type}
            value={notification.value}
            html={notification.html}
            markAsRead={markNotificationAsRead}
          />
        ))}
      </ul>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.array.isRequired,
  markNotificationAsRead: PropTypes.func.isRequired,
};

export default Notifications;