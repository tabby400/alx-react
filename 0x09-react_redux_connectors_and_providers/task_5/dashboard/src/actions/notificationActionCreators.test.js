import { setLoadingState, setNotifications, fetchNotifications } from './notificationActionCreators';
import * as types from './actionTypes';

describe('Notification Action Creators', () => {
  it('should create an action to set loading state', () => {
    const isLoading = true;
    const expectedAction = {
      type: types.SET_LOADING_STATE,
      isLoading,
    };
    expect(setLoadingState(isLoading)).toEqual(expectedAction);
  });

  it('should create an action to set notifications', () => {
    const notifications = [{ id: 1, message: 'Notification 1' }];
    const expectedAction = {
      type: types.FETCH_NOTIFICATIONS_SUCCESS,
      notifications,
    };
    expect(setNotifications(notifications)).toEqual(expectedAction);
  });
});
