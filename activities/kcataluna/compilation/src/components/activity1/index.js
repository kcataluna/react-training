import React from 'react';

import logo from '../logo.svg';

class HelloWorld extends React.Component {
    render = () => {
        const style = {fontSize: 'calc(10px + 2vmin)'};
        return (
            <div className="text-center" style={style}>
                <img src={logo} className="App-logo-lg" alt="logo" />
                <p>Hello World, I am <code>Keven Client</code> !</p>
                <p className="App-link">hajimemashite</p>
            </div>
        );
    }
}

export default HelloWorld;