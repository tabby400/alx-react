import { combineReducers } from 'redux';
import courseReducer from './courseReducer'; // Import courseReducer
import notificationReducer from './notificationReducer'; // Import notificationReducer
import uiReducer from './uiReducer'; // Import uiReducer

// Combining reducers into a single rootReducer
const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});

export default rootReducer;
