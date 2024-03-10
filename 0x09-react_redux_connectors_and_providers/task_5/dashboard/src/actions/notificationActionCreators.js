import * as types from './actionTypes';

export const setLoadingState = (isLoading) => ({
  type: types.SET_LOADING_STATE,
  isLoading,
});

export const setNotifications = (notifications) => ({
  type: types.FETCH_NOTIFICATIONS_SUCCESS,
  notifications,
});

export const fetchNotifications = () => {
  return (dispatch) => {
    // Set loading state to true
    dispatch(setLoadingState(true));

    // Fetch notifications from API
    fetch('/notifications.json')
      .then((response) => response.json())
      .then((data) => {
        // Dispatch setNotifications with fetched data
        dispatch(setNotifications(data));
        dispatch(setLoadingState(false));
      })
      .catch((error) => {
        // Handle errors if necessary
        console.error('Error fetching notifications:', error);
        dispatch(setLoadingState(false));
      });
  };
};
