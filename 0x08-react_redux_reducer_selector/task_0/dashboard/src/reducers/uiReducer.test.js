import uiReducer from './uiReducer';
import * as types from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('should return initial state when SELECT_COURSE action is passed', () => {
    expect(uiReducer(undefined, { type: types.SELECT_COURSE })).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {}
    });
  });

  it('should set isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    expect(
      uiReducer(undefined, { type: types.DISPLAY_NOTIFICATION_DRAWER })
    ).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {}
    });
  });
});
