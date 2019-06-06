import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
// const Message = () => <p>Hello World, I am Chienih Louise Bunao</p> // component with no properties.
const Message = (props) => <p>Hello World,I am {props.name}</p>
function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Hello World, I am Chienih Louise Bunao
        </p> */}
        <Message name="Chienih Louise Bunao"/>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <img src="https://adobochroniclesdotcom.files.wordpress.com/2018/11/b13f4fda-e6a8-41e1-ac1f-3b2fa4efabf2.jpeg?w=474&h=267"/>
      </header>
    </div>
  );
}

export default App;
