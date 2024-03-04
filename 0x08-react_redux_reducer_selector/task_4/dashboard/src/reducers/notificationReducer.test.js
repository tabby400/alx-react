import { fromJS } from 'immutable';
import notificationReducer from './notificationReducer';
import * as types from '../actions/notificationActionTypes';
import { normalize, schema } from 'normalizr';
import { notificationsNormalizer } from '../schema/notifications';

describe('notificationReducer', () => {
  it('should return initial state when no action is passed', () => {
    expect(notificationReducer(undefined, {})).toEqual(fromJS({
      filter: 'DEFAULT',
      notifications: {}
    }));
  });

  it('should update state with normalized data when FETCH_NOTIFICATIONS_SUCCESS action is passed', () => {
    const data = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'New data available' }
    ];
    const notificationSchema = new schema.Entity('notifications');
    const normalizedData = normalize(data, [notificationSchema]);
    expect(
      notificationReducer(undefined, { type: types.FETCH_NOTIFICATIONS_SUCCESS, data })
    ).toEqual(fromJS({
      filter: 'DEFAULT',
      notifications: notificationsNormalizer(data)
    }));
  });

  it('should update filter value when SET_TYPE_FILTER action is passed', () => {
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: {}
    });
    const expectedState = fromJS({
      filter: 'URGENT',
      notifications: {}
    });
    expect(
      notificationReducer(initialState, { type: types.SET_TYPE_FILTER, filter: 'URGENT' })
    ).toEqual(expectedState);
  });

  it('should update isRead value when MARK_AS_READ action is passed', () => {
    const initialState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: false },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        3: { id: 3, type: 'urgent', value: 'New data available', isRead: false }
      }
    });
    const expectedState = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, type: 'default', value: 'New course available', isRead: true },
        2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        3: { id: 3, type: 'urgent', value: 'New data available', isRead: false }
      }
    });
    expect(
      notificationReducer(initialState, { type: types.MARK_AS_READ, index: 1 })
    ).toEqual(expectedState);
  });
});

