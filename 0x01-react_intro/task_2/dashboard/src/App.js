import React from 'react';
import './App.css';
import HolbertonLogo from './holberton-logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={HolbertonLogo} className="App-logo" alt="Holberton Logo" />
        <h1>School Dashboard</h1>
      </header>
      <div className="App-body">
        <div>
          <p>Login to access the full dashboard</p>
          {/* Email input */}
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          {/* Password input */}
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          {/* OK button */}
          <button>OK</button>
        </div>
      </div>
      <footer className="App-footer">
        <div>
          <p>Copyright 2020 - Holberton School</p>
        </div>
      </footer>
    </div>
  );
}
