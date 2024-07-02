import React from 'react';
import './App.css';
import './Navbar.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        
        <main>
          <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/skills" element={<Skills />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/footer" element={<Footer />} />
     </Routes>
     </main>

 </div>
 </Router>
    
  );
}

export default App;
