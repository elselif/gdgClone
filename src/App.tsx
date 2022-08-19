import React from 'react';

import './App.css';
import FixedBottomNavigation from './components/BottomApBar';
import DrawerAppBar from './components/Navbar';

function App() {
  return (
    <div className="App">
     
    <DrawerAppBar></DrawerAppBar>
    <FixedBottomNavigation/>
    </div>
  );
}

export default App;
