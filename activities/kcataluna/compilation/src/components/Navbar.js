import React from 'react';

import logo from './logo.svg';

class Navbar extends React.Component {
    render = () =>{
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
                <a class="navbar-brand" href="javascript:void(0)">
                    <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" />
                    React Training
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link active" href="javascript:void(0)">Activity 1 - Hello World!</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Activity 2 - Components</a>
                        <a class="nav-item nav-link" href="javascript:void(0)">Activity 3 - Forms</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;