import React from 'react';
import {Link, NavLink} from "react-router-dom";

import logo from './logo.svg';

import routes from '../routes';

class Navbar extends React.Component {
    render = () =>{
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                <Link className="navbar-brand" to={routes.helloworld}>
                    <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" />
                    React Training
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to={routes.helloworld}>Activity 1 - Hello World!</NavLink>
                        <NavLink className="nav-item nav-link" to={routes.components}>Activity 2 - Components</NavLink>
                        <NavLink className="nav-item nav-link" to={routes.forms}>Activity 3 - Forms</NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;