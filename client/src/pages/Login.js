
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password });
      localStorage.setItem('token', data.token); // Save the token
      navigate('/Header'); // Redirect to Home page
    } catch (error) {
      alert(error.response?.data || 'Invalid login credentials');
    }
  };

  return (
    <div className="login-container">
      {/* Left side image */}
      <div className="side-image left-image" />

      {/* Login card in the center */}
      <div className="login-card">
        <div className="logo-container">
          <img
            src="https://cdn.worldvectorlogo.com/logos/trello.svg"
            alt="Trello Logo"
            className="logo"
          />
          <h1 className="trello-title">Trello</h1>
        </div>
        <h2>Log in to continue</h2>
        <form className="login-form" onSubmit={handleLogin}>
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
          <button type="submit">Login</button>
        </form>
      </div>

      {/* Right side image */}
      <div className="side-image right-image" />
    </div>
  );
}

export default Login;
