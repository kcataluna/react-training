import React from 'react';

import './App.css';
import './Navbar.css';

import Navbar from './Navbar';
import HelloWorld from './activity1/HelloWorld';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="container-fluid">
                <HelloWorld />
            </div>
        </div>
    );
}

export default App;
