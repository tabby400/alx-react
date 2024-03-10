import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider from React Redux
import { createStore } from 'redux'; // Import createStore from Redux
import rootReducer from './reducers'; // Assuming you have a rootReducer combining all reducers including uiReducer
import App from './App/App';

// a store created using createStore from Redux
const store = createStore(rootReducer);

ReactDOM.render(
  // provider passing the store to the main App
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
