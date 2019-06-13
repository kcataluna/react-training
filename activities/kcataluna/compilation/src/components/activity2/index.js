import React from 'react';

import logo from '../logo.svg';

class News extends React.Component {
    render = () => {
        return (
            <div className="text-center">
                <img src={logo} className="App-logo-sm" alt="logo" />
            </div>
        );
    }
}

export default News;