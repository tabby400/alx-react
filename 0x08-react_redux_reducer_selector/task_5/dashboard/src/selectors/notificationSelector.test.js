import { fromJS } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications
} from './notificationSelector';

describe('notificationSelector', () => {
  const initialState = fromJS({
    filter: 'DEFAULT',
    notifications: {
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: true }
    }
  });

  it('should return filter value', () => {
    expect(filterTypeSelected(initialState)).toEqual('DEFAULT');
  });

  it('should return list of notifications', () => {
    expect(getNotifications(initialState).toJS()).toEqual({
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
      3: { id: 3, type: 'urgent', value: 'New data available', isRead: true }
    });
  });

  it('should return list of unread notifications', () => {
    expect(getUnreadNotifications(initialState).toJS()).toEqual({
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false }
    });
  });
});
