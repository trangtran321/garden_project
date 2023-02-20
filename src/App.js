import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Stuff} from './components/Stuff'
import {NewStuff} from './components/NewStuff'
import Example from './components/Example'
import Example2 from './components/Example2'

function App() {
  return (
    <div className="App" >
      <NewStuff/>
      <Example/>
      <Example2/>


    </div>

  );
}

export default App;
