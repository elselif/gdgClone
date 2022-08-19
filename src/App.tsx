import React from 'react';

import './App.css';
import FixedBottomNavigation from './components/BottomApBar';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">

      <Navbar />
      <FixedBottomNavigation />

      <Navbar />   
    
   <FixedBottomNavigation/>


    </div>
  );
}

export default App;
