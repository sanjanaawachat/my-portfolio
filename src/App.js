import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import Technology from './Pages/Technology';
import Navbar from './Component/Navbar';
import Intro from './Component/Intro';
import './style.css';
import Skill from './Component/Skill';
import Work from './Component/Work';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Intro/>
        <Skill/>
        <Work/>
        <Contact/>
        <Footer/>
        <Routes>
          <Route path='Home' element={<Home />} />
          <Route path='About' element={<About />} />
          <Route path='Services' element={<Services />} />
          <Route path='Projects' element={<Projects />} />
          <Route path='Technology' element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
