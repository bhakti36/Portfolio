import './App.css';
import About from './components/About';
import Contact from './components/Contact';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';
import Education from './components/Education';
import Skills from './components/Skills'; 
import Certifications from './components/Certifications'; 
import Achievements from './components/Achievements'; 

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills /> 
      <Service />
      <Projects />
      <Certifications /> 
      <Achievements /> 
      <Contact />
     
    </div>
  );
}

export default App;
