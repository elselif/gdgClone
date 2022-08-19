import React from 'react';

import './App.css';
import FixedBottomNavigation from './components/BottomApBar';
import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <FixedBottomNavigation />
    </div>
  );
}

export default App;
