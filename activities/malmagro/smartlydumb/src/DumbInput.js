import React from 'react';
import './App.css';

function DumbInput(props) {
  return (
    <input onChange={props.onTextChange}/>
  );
}

export default DumbInput;