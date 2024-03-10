import * as types from '../actions/uiActionTypes';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null, // Change user initial state to null
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true,
      };
    case types.HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
        user: action.user, // Set user to the one passed within the action
      };
    case types.LOGIN_FAILURE:
    case types.LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
        user: null, // Set user to null on logout
      };
    default:
      return state;
  }
};

export default uiReducer;
