import React from 'react'; 
import { Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project.js';
import Navbar from './nav/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
     <Footer />
     <Routes>
         <Route path="/" element= {<Home />} />
         <Route path="/about" element= {<About />} />
         <Route path="/skills" element= {<Skills />} />
         <Route path="/project" element= {<Project  />} />
     </Routes>
    </div>
  )
}

export default App