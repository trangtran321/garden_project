import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Stuff} from './components/Stuff'
import {NewStuff} from './components/NewStuff'
import Example from './components/Example'
import Example2 from './components/Example2'
import Example3 from './components/Example3'

function App() {
  return (
    <div className="App" >
      {/* <NewStuff/> */}
      <Example/>
      <Example2/>
      <Example3/>


    </div>

  );
}

export default App;
