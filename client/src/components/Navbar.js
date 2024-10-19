
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null); // Track the active dropdown
  const location = useLocation(); // Get the current route

  // Don't render the Navbar on the Header page
  if (location.pathname === '/Header') {
    return null;
  }
  

  // Function to handle dropdown toggle
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img 
            src="https://cdn.worldvectorlogo.com/logos/trello.svg" 
            alt="Trello Logo" 
            className="logo"
          />
          <h1>Trello Clone</h1>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to="/" onClick={() => toggleDropdown('features')}>Features</Link>
            <span className="dropdown-icon">▼</span>
            {activeDropdown === 'features' && (
              <div className="dropdown-content">
                <h3>Explore the features that help your team succeed</h3>
                <h4>Views</h4>
                <p>View your team’s projects from every angle.</p>
                <h4>Automation</h4>
                <p>Automate tasks and workflows with Butler automation.</p>
                <h4>Power-Ups</h4>
                <p>Power up your teams by linking their favorite tools with Trello plugins.</p>
                <h4>Templates</h4>
                <p>Give your team a blueprint for success with easy-to-use templates from industry leaders and the Trello community.</p>
                <h4>Integrations</h4>
                <p>Find the apps your team is already using or discover new ways to get work done in Trello.</p>
                <p>Meet Trello: Trello makes it easy for your team to get work done. No matter the project, workflow, or type of team, Trello can help keep things organized. It’s simple – sign-up, create a board, and you’re off! Productivity awaits.</p>
              </div>
            )}
          </li>
          <li>
            <Link to="/" onClick={() => toggleDropdown('solutions')}>Solutions</Link>
            <span className="dropdown-icon">▼</span>
            {activeDropdown === 'solutions' && (
              <div className="dropdown-content">
                <h3>Take a page out of these pre-built Trello playbooks designed for all teams</h3>
                <h4>Marketing teams</h4>
                <p>Whether launching a new product, campaign, or creating content, Trello helps marketing teams succeed.</p>
                <h4>Product management</h4>
                <p>Use Trello’s management boards and roadmap features to simplify complex projects and processes.</p>
                <h4>Engineering teams</h4>
                <p>Ship more code, faster, and give your developers the freedom to be more agile with Trello.</p>
                <h4>Design teams</h4>
                <p>Empower your design teams by using Trello to streamline creative requests and promote more fluid cross-team collaboration.</p>
                <h4>Startups</h4>
                <p>From hitting revenue goals to managing workflows, small businesses thrive with Trello.</p>
                <h4>Remote teams</h4>
                <p>Keep your remote team connected and motivated, no matter where they’re located around the world.</p>
              </div>
            )}
          </li>
          <li>
            <Link to="/" onClick={() => toggleDropdown('plans')}>Plans</Link>
            <span className="dropdown-icon">▼</span>
            {activeDropdown === 'plans' && (
              <div className="dropdown-content">
                <h3>Choose a plan that works for you</h3>
                <h4>Standard</h4>
                <p>For teams that need to manage more work and scale collaboration.</p>
                <h4>Premium</h4>
                <p>Best for teams up to 100 that need to track multiple projects and visualize work in a variety of ways.</p>
                <h4>Enterprise</h4>
                <p>Everything your enterprise teams and admins need to manage projects.</p>
                <h4>Free plan</h4>
                <p>For individuals or small teams looking to keep work organized.</p>
                <p>Compare plans & pricing</p>
              </div>
            )}
          </li>
          <li>
  <Link to="/pricing">Pricing</Link> {/* Update this link */}
</li>
          <li>
            <Link to="/" onClick={() => toggleDropdown('resources')}>Resources</Link>
            <span className="dropdown-icon">▼</span>
            {activeDropdown === 'resources' && (
              <div className="dropdown-content">
                <h3>Learn & connect</h3>
                <h4>Trello guide</h4>
                <p>Our easy to follow workflow guide will take you from project set-up to Trello expert in no time.</p>
                <h4>Remote work guide</h4>
                <p>The complete guide to setting up your team for remote work success.</p>
                <h4>Webinars</h4>
                <p>Enjoy our free Trello webinars and become a productivity professional.</p>
                <h4>Customer stories</h4>
                <p>See how businesses have adopted Trello as a vital part of their workflow.</p>
                <h4>Developers</h4>
                <p>The sky's the limit in what you can deliver to Trello users in your Power-Up!</p>
                <h4>Help resources</h4>
                <p>Need help? Articles and FAQs to get you unstuck.</p>
                <p>Helping teams work better, together. Discover Trello use cases, productivity tips, best practices for team collaboration, and expert remote work advice.</p>
              </div>
            )}
          </li>
        </ul>
        <div className="navbar-actions">
          <Link to="/login" className="login">Log in</Link>
          <Link to="/signup" className="cta-button">Get Trello for free</Link>
        </div>
      </nav>
      <div className="navbar-notification">
        Accelerate your teams' work with Atlassian Intelligence (AI) features 🤖 now available for all Premium and Enterprise! 
        <a href="/learn-more">Learn more.</a>
      </div>
    </>
  );
}

export default Navbar;
