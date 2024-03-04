import { Map } from 'immutable';
import * as types from '../actions/uiActionTypes';

const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: Map({})
});

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case types.HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case types.LOGIN_SUCCESS:
      return state.set('isUserLoggedIn', true);
    case types.LOGIN_FAILURE:
    case types.LOGOUT:
      return state.set('isUserLoggedIn', false);
    default:
      return state;
  }
};

export default uiReducer;
