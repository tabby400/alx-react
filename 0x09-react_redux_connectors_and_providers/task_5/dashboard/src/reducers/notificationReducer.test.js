import notificationReducer from './notificationReducer';
import * as types from '../actions/actionTypes';
import { fromJS } from 'immutable';

describe('notificationReducer', () => {
  it('should return the initial state', () => {
    const initialState = fromJS({
      loading: false,
      notifications: [],
    });
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_LOADING_STATE', () => {
    const action = {
      type: types.SET_LOADING_STATE,
      isLoading: true,
    };
    const newState = notificationReducer(undefined, action);
    expect(newState.get('loading')).toEqual(true);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: types.FETCH_NOTIFICATIONS_SUCCESS,
      notifications: [{ id: 1, message: 'Notification 1' }],
    };
    const newState = notificationReducer(undefined, action);
    expect(newState.get('notifications').size).toEqual(1);
    expect(newState.get('notifications').get(0).get('message')).toEqual('Notification 1');
  });

});
