import React from 'react';
import logo from './tenor.gif';
import './App.css';
import Header from './header.js';

const Greeting = () => <h1>Hello People!</h1>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ang Pambansang Ibon ng Pilipinas!
        </p>
        <Greeting />
      </header>
    </div>
  );
}

export default App;
