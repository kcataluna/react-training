import React from 'react';

import logo from '../logo.svg';

import Clock from './Clock';

class Forms extends React.Component {
    render = () => {
        return (
            <div>
                <img src={logo} className="App-logo-sm mx-auto d-block" alt="logo" />
                <Clock />
            </div>
        );
    }
}

export default Forms;