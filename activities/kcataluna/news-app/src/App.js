import React from 'react';
import logo from './logo.svg';
import './App.css';

import NewsAPI from './NewsAPI';
import Moment from 'moment';

function App() {
    let date = Moment().subtract(1, 'months').format('YYYY-MM-DD');
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <NewsAPI apiKey="823f05b6c6c24507970500959a2ab12b" query="ReactJS" from={date} pageSize={50} />
            </header>
        </div>
    );
}

export default App;
