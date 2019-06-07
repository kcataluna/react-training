import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Timer from './Timer.js'
import Form from './Form.js'
// const Message = () => <p>Hello World, I am Chienih Louise Bunao</p> // component with no properties.
const Message = (props) => <p>Hello World,I am {props.name}</p>
function App() {
  return (
    <div>
      <Header />
      <Timer />
      <Form />
    </div>
  );
}

export default App;
