import React from 'react';

function Contact() {
  return (
    <section className="contact section">
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
