import { createSelector } from 'reselect';


const getNotifications = (state) => state.notifications;
const getFilter = (state) => state.filter;

// the selector
export const getUnreadNotificationsByType = createSelector(
  [getNotifications, getFilter],
  (notifications, filter) => {
    const { type } = filter;
    const unreadNotifications = notifications.filter((notification) => !notification.isRead);

    if (type === 'urgent') {
      return unreadNotifications.filter((notification) => notification.type === 'urgent');
    }

    
    return unreadNotifications;
  }
);
