import React from 'react';
import './App.css';
import HelloWorldApp from './helloworld/App'
import SmartlyDumbApp from './smartlydumb/App'
import MyProfile from './myprofile/App'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="row">
      <Router>
        <div className="block1">
          <li>
            <Link to="/helloworld">Go to Hello World</Link>
          </li>
          <li>
            <Link to="/smartlydumb">Go to SmartlydDumb</Link>
          </li>
          <li>
            <Link to="/myprofile">Go to My Profile</Link>
          </li>
        </div>
        <div className="block2">
          <Route path="/helloworld" component={HelloWorldApp}></Route>
          <Route path="/smartlydumb" component={SmartlyDumbApp}></Route>
          <Route path="/myprofile" component={MyProfile}></Route>
        </div>
      </Router>  
    </div>
  );
}

export default App;
