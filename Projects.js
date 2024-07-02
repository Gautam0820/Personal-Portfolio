import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <section className="projects section">
       <nav className="navbar">
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <h2>Projects</h2>
      <div className="project">
        <h3>Recyclable Waste Classifier Using ML</h3>
        <p>
          Designed and deployed an innovative system to automate waste sorting into distinct bins by material type. Technologies: Python, TensorFlow, Machine Learning.
        </p>
      </div>
      <div className="project">
        <h3>HUNGREZY - A Food Website</h3>
        <p>
          Developed a user-friendly e-commerce website for online food ordering using HTML, CSS, JavaScript, and SQL. Implemented responsive web design principles to ensure compatibility across devices.
        </p>
      </div>
      <div className="project">
        <h3>Personal Portfolio Website</h3>
        <p>
          Created a personal portfolio website to showcase projects and skills. Technologies: HTML5, CSS3, JavaScript, ReactJS.
        </p>
      </div>
    </section>
  );
}

export default Projects;
