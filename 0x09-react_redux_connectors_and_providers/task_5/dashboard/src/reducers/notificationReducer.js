import { fromJS } from 'immutable';
import * as types from '../actions/actionTypes';

const initialState = fromJS({
  loading: false, // attribute to initial state
  notifications: [], // notifications is an array
});

const notificationReducer = (state = initialState, action) => {
  switch

	(action.type) {
    case types.SET_LOADING_STATE:
      return state.set('loading', action.isLoading);

    case types.FETCH_NOTIFICATIONS_SUCCESS:
      // notifications is an array and data is also an array
      return state.mergeDeep({ notifications: action.notifications });


    default:
      return state;
  }
};

export default notificationReducer;
