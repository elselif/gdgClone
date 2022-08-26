import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Layouts/Footer';
import MobilMenu from './Layouts/MobilMenu';
import Navbar from './Layouts/Navbar';
import EventsPage from './pages/EventsPage';
import ThemeContext from './context/ThemeContext';

//Routers link
import Home from './pages/HomePage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import SpeakersPage from './pages/SpeakersPage';
import ContactPage from './pages/ContactPage';
import BlogsPage from './pages/BlogsPage';

function App() {
  return (
    <ThemeContext.Provider value={{ name: 'React', author: 'React', url: 'https://reactjs.org/' }}>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/home' element={<HomePage />}> </Route>
        <Route path='/about' element={<AboutPage />}> </Route>
        <Route path='/team' element={<TeamPage />}> </Route>
        <Route path='/speakers' element={<SpeakersPage />}> </Route>
        <Route path='/events' element={<EventsPage />}> </Route>
        <Route path='/contact' element={<ContactPage />}> </Route>
        <Route path='/blogs' element={<BlogsPage />}> </Route>
      </Routes>
      <MobilMenu />
      <Footer />
    </div>
  </ThemeContext.Provider>
  );
}

export default App;
