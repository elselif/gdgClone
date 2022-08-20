import React from 'react';

import './App.css';
import MobilMenu from './components/MobilMenu';
import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <MobilMenu />
    </div>
  );
}

export default App;
