import { setLoadingState, setNotifications, fetchNotifications } from '../actions/notificationActionCreators';
import * as types from '../actions/actionTypes';
import { fetchNotifications as fetchNotificationsAPI } from '../api/notificationApi';

describe('Notifications component', () => {
  // Add a test to verify fetchNotifications is called when the component mounts
  it('should call fetchNotifications when component mounts', () => {
    jest.spyOn(fetchNotificationsAPI, 'fetchNotifications').mockResolvedValueOnce([]);
    const wrapper = shallow(<Notifications />);
    expect(fetchNotificationsAPI.fetchNotifications).toHaveBeenCalled();
  });

  // Add tests for action creators
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
  
  it('should handle SET_LOADING_STATE', () => {
    const action = {
      type: types.SET_LOADING_STATE,
      isLoading: true,
    };
    const newState = notificationReducer(undefined, action);
    expect(newState.get('loading')).toEqual(true);
  });
});
