// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Plans from './pages/Plans';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/herosection" element={<HeroSection />} />
      </Routes>
    </Router>
  );
}

export default App;
