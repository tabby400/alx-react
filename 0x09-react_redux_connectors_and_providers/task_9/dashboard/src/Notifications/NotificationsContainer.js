import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchNotifications } from '../actions/notificationActionCreators';
import { getUnreadNotificationsByType } from '../selectors/notificationSelector';
import Notifications from './Notifications';

const NotificationsContainer = ({ notifications, fetchNotifications }) => {
  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  return <Notifications notifications={notifications} />;
};

const mapStateToProps = (state) => ({
  notifications: getUnreadNotificationsByType(state),
});

export default connect(mapStateToProps, { fetchNotifications })(NotificationsContainer);
