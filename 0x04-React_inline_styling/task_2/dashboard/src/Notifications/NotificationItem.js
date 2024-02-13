import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends Component {
  handleClick = () => {
    const { notification, markAsRead } = this.props;
    markAsRead(notification.id);
  };

  render() {
    const { notification } = this.props;
    const urgencyStyles = notification.urgent
      ? styles.urgentItem
      : styles.defaultItem;

    return (
      <li className={css(styles.notificationItem, urgencyStyles)} onClick={this.handleClick}>
        {notification.content}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  notification: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    urgent: PropTypes.bool,
  }).isRequired,
  markAsRead: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  notificationItem: {
    cursor: 'pointer',
    padding: '10px',
  },
  urgentItem: {
    backgroundColor: 'red',
    color: 'white',
  },
  defaultItem: {
    backgroundColor: 'lightgray',
  },
});

export default NotificationItem;