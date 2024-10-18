// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css'; // Ensure you have this CSS file in the same directory

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="text-content">
        <h1>Trello brings all your tasks, teammates, and tools together</h1>
        <p>Keep everything in the same place—even if your team isn’t.</p>
        <div className="form-container">
          <input type="email" placeholder="Email" />
          <button className="signup-btn">Sign up – it’s free!</button>
        </div>
        <a href="#watch-video" className="watch-video-link">
          Watch video <span>▶</span>
        </a>
      </div>
      <div className="image-content">
        <img src="images/hero.png" alt="UI Cards" />
      </div>
    </div>
    
  );
};

export default HeroSection;
