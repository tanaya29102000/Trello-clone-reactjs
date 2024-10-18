// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // Use createRoot from react-dom/client
import App from './App';
import './index.css'; // Optional if you are using global styles

const container = document.getElementById('root'); // Get the root element
const root = ReactDOM.createRoot(container); // Create a root

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
