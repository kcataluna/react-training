import React from 'react';
import './App.css';

function DumbHeader(props) {
  return (
    <div className="App">
      <h1>{props.title}</h1>
    </div>
  );
}

export default DumbHeader;