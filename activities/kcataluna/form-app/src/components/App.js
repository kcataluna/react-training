import React from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from '../components/Clock/';
import Forms from '../components/Forms/';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Clock />
                <Forms />
            </header>
        </div>
    );
}

export default App;
