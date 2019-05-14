import React from 'react';
import './App.css';

//We imported our component from Person.js and renamed it as People

import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main'

function App() {
  return ( 
    <div className = "App">
      <h1> Hello world </h1> 
      <Navbar/>
      <Sidebar/>
      <Main/>
    </div>
  );
}

export default App;