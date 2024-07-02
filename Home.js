import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    
    <header className="home">
      <nav className="navbar">
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <h1>Gautam Naik</h1>
      <p>Software Developer</p>
      <p>Connect with me</p>
      <ul className="social-links">
        <li>
          <a href="https://github.com/Gautam0820" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/gautam-naik-0820gn" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
      
    </header>
  );
}

export default Header;
