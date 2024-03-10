import { fromJS } from 'immutable';
import { getUnreadNotificationsByType } from './notificationSelector';

describe('getUnreadNotificationsByType Selector', () => {
  const state = fromJS({
    notifications: [
      { id: 1, value: 'Notification 1', isRead: false, type: 'default' },
      { id: 2, value: 'Notification 2', isRead: false, type: 'urgent' },
      { id: 3, value: 'Notification 3', isRead: true, type: 'default' },
    ],
    filter: { type: 'DEFAULT' },
  });

  it('returns unread notifications when filter is DEFAULT', () => {
    const result = getUnreadNotificationsByType(state);
    expect(result.size).toBe(2);
    expect(result.get(0).id).toBe(1);
    expect(result.get(1).id).toBe(2);
  });

  it('returns unread urgent notifications when filter is URGENT', () => {
    const stateWithUrgentFilter = state.setIn(['filter', 'type'], 'URGENT');
    const result = getUnreadNotificationsByType(stateWithUrgentFilter);
    expect(result.size).toBe(1);
    expect(result.get(0).id).toBe(2);
  });
});
