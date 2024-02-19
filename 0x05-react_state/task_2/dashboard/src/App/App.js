import React, { useState } from 'react';
import { AppProvider } from './AppContext';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';

const App = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false,
  });

  const logIn = (email, password) => {
    setUser({ email, password, isLoggedIn: true });
  };

  const logOut = () => {
    setUser({ email: '', password: '', isLoggedIn: false });
  };

  return (
    <AppProvider>
      <div className="App">
        {user.isLoggedIn ? <CourseList /> : <Login logIn={logIn} />}
      </div>
    </AppProvider>
  );
};

export default App;