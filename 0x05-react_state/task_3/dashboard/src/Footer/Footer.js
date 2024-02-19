import React, { useContext } from 'react';
import AppContext from '../App/AppContext';

function Footer() {
  const { user } = useContext(AppContext);

  return (
    <footer>
      {user.isLoggedIn && (
        <p>
          Contact us at <a href="/contact">Contact Us</a>
        </p>
      )}
    </footer>
  );
}

export default Footer;