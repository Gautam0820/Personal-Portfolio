import React from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';

function Skills() {
  return (
    
    <section className="skills section">
      <nav className="nav">
        <ul className="nav-list">    
        <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/skills">Skills</Link></li>
          <li className="nav-item"><Link to="/projects">Projects</Link></li>
          <li className="nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div ><h2>Technical Skills</h2>
      <ul className='skills-list'>
      <li className="skills-item">JAVA</li>
      <li className="skills-item">Python</li>
        <li className="skills-item">HTML</li>
        <li className="skills-item">CSS</li>
        <li className="skills-item">JavaScript </li>
        <li className="skills-item">ReactJS</li>
        <li className="skills-item">NodeJS</li>
        <li className="skills-item">Wordpress</li>
        <li className="skills-item">SQL</li>
      </ul></div>
      
    </section>
  );
}

export default Skills;
