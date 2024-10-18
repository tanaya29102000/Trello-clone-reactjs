
import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/users/signup', { email, password });
      alert('User registered successfully');
    } catch (error) {
      console.error('Signup Error:', error.response?.data || error.message);
      alert(error.response?.data || 'Error registering user');
    }
  };

  return (
    <div className="signup-container">
      {/* Left side image */}
      <div className="side-image left-image" />

      {/* Signup card in the center */}
      <div className="signup-card">
        <div className="logo-container">
          <img
            src="https://cdn.worldvectorlogo.com/logos/trello.svg"
            alt="Trello Logo"
            className="logo"
          />
          <h1 className="trello-title">Trello</h1>
        </div>
        <h2>Sign up to continue</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Signup</button>
        </form>
      </div>

      {/* Right side image */}
      <div className="side-image right-image" />
    </div>
  );
}

export default Signup;
