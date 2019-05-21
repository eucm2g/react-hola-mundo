import React from 'react';
import logo from './../logo.svg';
import './MiApp.css';

function MiApp() {
  return (
    <div className="MiApp">
      <header className="MiApp-header">
        <img src={logo} className="MiApp-logo" alt="logo" />
        <p>
          Edit <code>src/MiApp.js</code> and save to reload.
        </p>
        <a
          className="MiApp-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default MiApp;
