
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';
import 'animate.css';

function App(props) {
  // const timer = function(){
  //   let time = new Date();
  //   return

 
    
  // };

  // return timer();
  return <Clock date={new Date()}/>;
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);