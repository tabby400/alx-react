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
      <div className="App-body"> {/* Changed from body to div */}
        <div>
          <p>Login to access the full dashboard</p>
        </div>
      </div> {/* Closed the div for App-body */}
      <footer className="App-footer">
        <div>
          <p>Copyright 2020 - Holberton School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;