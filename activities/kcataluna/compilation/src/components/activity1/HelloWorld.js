import React from 'react';

import logo from '../logo.svg';

class HelloWorld extends React.Component {
    render = () => {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello World, I am <code>Keven Client</code> !</p>
                <p className="App-link text-decoration-none">hajimemashite</p>
            </header>
        );
    }
}

export default HelloWorld;