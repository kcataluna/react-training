import React from 'react';

import logo from '../logo.svg';

import request from '../../requests/newsapi';
import NewsAPI from './NewsAPI';

class News extends React.Component {
    render = () => {
        return (
            <div>
                <img src={logo} className="App-logo-sm mx-auto d-block" alt="logo" />
                <NewsAPI {... request} />
            </div>
        );
    }
}

export default News;