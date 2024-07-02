import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="about section">
       <nav className="navbar">
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <h2>About Me</h2>
      <p> Passionate and skilled Software Developer  in designing, developing, and maintaining robust software solutions.
 Proficient in a variety of programming languages including Java and Python, with a strong background in frontend
 development. Adept at working in agile environments, collaborating with cross-functional teams to deliver high
quality software products.</p>
    </section>
  );
}

export default About;
