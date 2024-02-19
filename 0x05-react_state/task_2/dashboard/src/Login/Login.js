import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Login = ({ logIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn(email, password);
  };

  return (
    <div>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
};

export default Login;