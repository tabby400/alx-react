import notificationReducer from './notificationReducer';
import * as types from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should return default state when no action is passed', () => {
    expect(notificationReducer(undefined, {})).toEqual({
      filter: 'DEFAULT',
      notifications: []
    });
  });

  it('should update state with notifications when FETCH_NOTIFICATIONS_SUCCESS action is passed', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' }
    ];
    expect(
      notificationReducer(undefined, {
        type: types.FETCH_NOTIFICATIONS_SUCCESS,
        data
      })
    ).toEqual({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false }
      ]
    });
  });

  it('should mark notification as read when MARK_AS_READ action is passed', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false }
      ]
    };
    expect(
      notificationReducer(initialState, { type: types.MARK_AS_READ, index: 2 })
    ).toEqual({
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false }
      ]
    });
  });

  it('should update filter when SET_TYPE_FILTER action is passed', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: []
    };
    expect(
      notificationReducer(initialState, {
        type: types.SET_TYPE_FILTER,
        filter: 'URGENT'
      })
    ).toEqual({
      filter: 'URGENT',
      notifications: []
    });
  });
});
