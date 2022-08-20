import React from 'react';
import './App.css';
import FixedBottomNavigation from './components/BottomApBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <Home/>  
      <FixedBottomNavigation />

      


    </div>
  );
}

export default App;
