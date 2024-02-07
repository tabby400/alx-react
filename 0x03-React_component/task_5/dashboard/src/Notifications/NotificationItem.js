import React from "react";
import PropTypes from "prop-types";

const NotificationItem = React.memo(({ id, type, value, html, markAsRead }) => {
  const handleClick = () => {
    markAsRead(id);
  };

  return (
    <li data-notification-type={type} onClick={handleClick} dangerouslySetInnerHTML={html}></li>
  );
});

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }).isRequired,
  markAsRead: PropTypes.func.isRequired,
};

export default NotificationItem;