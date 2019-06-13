import React from 'react';

import logo from '../logo.svg';

import Clock from './Clock';
import Input from './Input';

class Forms extends React.Component {
    render = () => {
        return (
            <div className="container">
                <img src={logo} className="App-logo-sm mx-auto d-block" alt="logo" />
                <Clock />
                <div className="row text-dark mt-4">
                    <div className="col-md">
                        <Input />
                    </div>
                    <div className="col-md"></div>
                </div>
            </div>
        );
    }
}

export default Forms;