import { Map, fromJS } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import { notificationSchema, notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
  filter: 'DEFAULT',
  notifications: Map()
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      return state.mergeIn(['notifications'], fromJS(normalizedData.entities.notifications));
    // Handle other actions...
    default:
      return state;
  }
};

export default notificationReducer;
