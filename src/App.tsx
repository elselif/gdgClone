import React from 'react';
import './App.css';
import Footer from './components/Footer';
import MobilMenu from './components/MobilMenu';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
      <MobilMenu />
      <Footer/>
    </div>
  );
}

export default App;
