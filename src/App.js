import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Peers from './components/Peers/Peers';
import 'bootstrap'
import Projects from './components/Projects/Projects';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Resume' element={<Resume />} />
          <Route path='/Peers' element={<Peers />} />
          <Route path='/Projects' element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
