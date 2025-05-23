
import './App.css'
import React from "react";
import Home from "./components/Home";
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experince';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
function App() {
  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

