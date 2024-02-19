import React, { createContext, useState } from 'react';

const AppContext = createContext();

const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  const logOut = () => {

    localStorage.removeItem('authToken');

    setUser(defaultUser);
    window.location.href = '/login';
  };

  return (
    <AppContext.Provider value={{ user, logOut }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;