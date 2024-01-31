import React from 'react';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <footer className="App-footer">
      <div>
        <p>{getFooterCopy(false)}</p>
        <p>&copy; {getFullYear()}</p>
      </div>
    </footer>
  );
}

export default App;