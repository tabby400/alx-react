import * as types from '../actions/uiActionTypes';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true
      };
    case types.HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true
      };
    case types.LOGIN_FAILURE:
    case types.LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false
      };
    default:
      return state;
  }
};

export default uiReducer;
