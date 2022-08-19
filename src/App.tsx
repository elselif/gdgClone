import React from 'react';

import './App.css';
import FixedBottomNavigation from './components/BottomApBar';
import DrawerAppBar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     
   <DrawerAppBar/>
    <Home/>
   <FixedBottomNavigation/>
    </div>
  );
}

export default App;
