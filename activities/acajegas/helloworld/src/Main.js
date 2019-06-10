import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from './Home';
import Components from './Components';
import Timer from './Timer';
import './style.css';

function NavBarList(props) {
  return (
    <div>
      <ul class="_nav mr-auto">
        <li>
          <NavLink id="navlink" to="/" class="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink id="navlink" to="/components" class="nav-link">Components</NavLink>
        </li>
        <li>
          <NavLink id="navlink" to="/timer" class="nav-link">Timer</NavLink>
        </li>
      </ul>
    </div>
  );
}

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {isActive: true};

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isActive: !state.isActive
    }));
  };



  render() {
    return (
      <HashRouter>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">AJC ReactJS Training</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <NavBarList/>

      </nav>
      <div class="container">
        
        <main>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/components" component={Components}/>
            <Route path="/timer" component={Timer}/>
          </div>
        </main>
      </div>
      </HashRouter>
    );
  }
}
export default Main;