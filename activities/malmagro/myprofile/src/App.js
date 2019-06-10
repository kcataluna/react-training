import React from 'react';
import './App.css';
import ReactLiveClock from 'react-live-clock'
import Main from './Main'

function App() {
  return (
    <div className="App">
      <div>
          <h1><ReactLiveClock format={'hh:mm:ss'} ticking={true} timezone={'Asia/Manila' }/></h1>
      </div>
      <Main/>
    </div>
  );
}

export default App;