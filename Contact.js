import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <section className="contact section">
       <nav className="navbar">
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="5" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
