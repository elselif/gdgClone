import React from 'react';

import './App.css';
import BottomAppBar from './components/BottomApBar';
import DrawerAppBar from './components/Navbar';

function App() {
  return (
    <div className="App">
     
    <DrawerAppBar></DrawerAppBar>
    <BottomAppBar/>
    </div>
  );
}

export default App;
