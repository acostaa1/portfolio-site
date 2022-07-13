import React from 'react';

import "./app.scss"
import Nav from './components/nav-bar/Nav';
import Home from './components/home/Home';
import About from './components/about-me/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact-me/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="sections">
        Welcome to My Site!
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
