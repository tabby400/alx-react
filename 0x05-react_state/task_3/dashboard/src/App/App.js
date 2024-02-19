import React, { useState } from 'react';
import Notifications from '../Notifications/Notifications';

export const AppContext = React.createContext();

export const App = () => {
  const [listNotifications, setListNotifications] = useState([]);

  const markNotificationAsRead = (id) => {
    setListNotifications(listNotifications.filter(notification => notification.id !== id));
  };

  return (
    <AppContext.Provider value={{ listNotifications, markNotificationAsRead }}>
      <Notifications />
    </AppContext.Provider>
  );
};

export default App;