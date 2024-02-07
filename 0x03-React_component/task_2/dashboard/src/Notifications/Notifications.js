import React, { Component } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: [
        { id: 1, content: "Notification 1" },
        { id: 2, content: "Notification 2" },
        // Add more notifications as needed
      ],
    };
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
    // Add logic to update notification status as read
  };

  render() {
    return (
      <ul>
        {this.state.notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            markAsRead={this.markAsRead}
          />
        ))}
      </ul>
    );
  }
}

export default Notifications;