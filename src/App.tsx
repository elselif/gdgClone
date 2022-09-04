import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Layouts/Footer';
import MobilMenu from './Layouts/MobilMenu';
import Navbar from './Layouts/Navbar';
import EventsPage from './Pages/EventsPage';

//Routers link
import Home from './Pages/HomePage';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import TeamPage from './Pages/TeamPage';
import SpeakersPage from './Pages/SpeakersPage';
import ContactPage from './Pages/ContactPage';
import BlogsPage from './Pages/BlogsPage';

//Context
import SiteProvider from './Context/SiteContext';
function App() {



  return (
    <SiteProvider>
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
    </SiteProvider>
  );
}

export default App;
