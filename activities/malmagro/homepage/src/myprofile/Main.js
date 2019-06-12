import React from 'react';
import './Main.css';
import Form from './Form.js'

class Main extends React.Component{
  render(){
    return (
      <div className="row">
          <div className="block">
            <Form header="Profile"/>
          </div>
          <div className="block">
            <Form header="Profile Viewer" readOnly={true}/>
          </div>
      </div>
    );
  }
}

export default Main;