import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/'></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
