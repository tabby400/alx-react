import React, { useContext } from 'react';
import AppContext from '../App/AppContext';

const Header = () => {
  const { user, logOut } = useContext(AppContext);

  const handleLogout = () => {
    logOut();
  };

  return (
    <div className="header">
      {/* Header content */}
      {user.isLoggedIn && (
        <div id="logoutSection">
          Welcome {user.email} (<button onClick={handleLogout}>Logout</button>)
        </div>
      )}
    </div>
  );
};

export default Header;