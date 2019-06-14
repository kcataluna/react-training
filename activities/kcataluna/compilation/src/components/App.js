import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import './App.css';
import './Navbar.css';

import routes from '../routes';

import Navbar from './Navbar';

import HelloWorld from './activity1';
import News from './activity2';
import Forms from './activity3';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="App-content">
                    <Switch>
                        <Route path={routes.helloworld} component={HelloWorld} />
                        <Route path={routes.components} component={News} />
                        <Route path={routes.forms} component={Forms} />
                        <Redirect to={routes.helloworld} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
