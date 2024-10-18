// src/components/HeroSection.js
import React, { useState } from 'react';
import './HeroSection.css'; // Ensure you have this CSS file in the same directory

const HeroSection = () => {
  const [activeTaskImage, setActiveTaskImage] = useState(''); // State for active task image

  // Function to handle image change based on task type
  const handleImageChange = (taskType) => {
    switch (taskType) {
      case 'boards':
        setActiveTaskImage('images/drag1 (1).png'); // Path to the boards image
        break;
      case 'lists':
        setActiveTaskImage('images/drag1 (2).png'); // Path to the lists image
        break;
      case 'cards':
        setActiveTaskImage('images/drag1 (3).png'); // Path to the cards image
        break;
      default:
        setActiveTaskImage(''); // Clear image if no match
    }
  };

  return (
    <>
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
          <img src="images/hero.png" alt="Hero" /> {/* Keep the hero image unchanged */}
        </div>
      </div>

      {/* New Trello 101 Section */}
      <div className="trello-101-container">
        <h2>Trello 101</h2>
        <h3>A productivity powerhouse</h3>
        <p>
          Simple, flexible, and powerful. All it takes are boards, lists, and cards 
          to get a clear view of who’s doing what and what needs to get done. 
          Learn more in our guide for getting started.
        </p>
      </div>

      {/* Task Section with Image Display */}
      <div className="task-section">
        <div className="task-content">
          <div className="task-items">
            <div className="task-item" onClick={() => handleImageChange('boards')}>
              <h3>Boards</h3>
              <p>Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”</p>
            </div>
            <div className="task-item" onClick={() => handleImageChange('lists')}>
              <h3>Lists</h3>
              <p>The different stages of a task. Start as simple as To Do, Doing, or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.</p>
            </div>
            <div className="task-item" onClick={() => handleImageChange('cards')}>
              <h3>Cards</h3>
              <p>Cards are where the real work happens. Add checklists, labels, due dates, and more to each card to keep everything on track.</p>
            </div>
          </div>

          {/* Image display for the selected task type */}
          {activeTaskImage && (
            <div className="task-image-content">
              <img src={activeTaskImage} alt="Task representation" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
