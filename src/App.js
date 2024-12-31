import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Fun from './components/Fun';
import logo from './images/VP Logo.png';
import bitmoji from './images/VihangiBitmoji.PNG';
import github from './images/github.png';
import linkedin from './images/linkedin.png';


function App() {
  const [active, setActive] = useState('about');
  
  useEffect(() => { 
    const content = document.querySelector('.content');
    const sections = document.querySelectorAll('.topic');
    const scrollActive = () => { 
      let scrollPos = content.scrollTop; 
      console.log(scrollPos)
      if (scrollPos < 400){ 
        setActive('about')
        console.log('about')
      } else if (scrollPos >= 400 && scrollPos < 1000) { 
        setActive('education') 
        console.log('education')
      } else if (scrollPos >= 1000 && scrollPos < 1600) { 
        setActive('experience')
        console.log('experience') 
      } else if (scrollPos >= 1600 && scrollPos < 2200) { 
        setActive('projects') 
        console.log('projects')
      } else if (scrollPos >= 2200) { 
        setActive('fun') 
        console.log('fun')
      }
      // sections.forEach(section => { 
      //   const sectionTop = section.getBoundingClientRect().top; 
      //   const sectionHeight = section.getBoundingClientRect().height; 
      //   if (sectionTop <= 0 && sectionTop + sectionHeight > 0) { 
      //     setActive(section.id); 
      //   } 
      // }); 
    }; 
    content.addEventListener('scroll', scrollActive); // Clean-up function to remove the event listener 
    return () => { 
      content.removeEventListener('scroll', scrollActive); 
    }; 
  }, []);


  return (
    <div>
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="connect">
          <a href="https://github.com/Vihangip" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="Github" className="github" />
          </a>
          <a href="https://www.linkedin.com/in/vihangiperera/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="Linkedin" className="linkedin" />
          </a>
        </div>
      </div>

      <div className="main">
      
        <div className="content">
          <div id="about" className="about"><About /></div>
          <div id="education" className="education"><Education /></div>
          <div id="experience" className="experience"><Experience /></div>
          <div id="projects" className="projects"><Projects /></div>
          <div id="fun" className="fun"><Fun /></div>
        </div>

        <div className="menu">
          <a href="#about" data-topic="about" className={`title ${active === 'about' ? 'active' : ''}`} onClick={() => setActive('about')}>About</a>
          <a href="#education" data-topic="education" className={`title ${active === 'education' ? 'active' : ''}`} onClick={() => setActive('education')}>Education</a>
          <a href="#experience" data-topic="experience" className={`title ${active === 'experience' ? 'active' : ''}`} onClick={() => setActive('experience')}>Experience</a>
          <a href="#projects" data-topic="projects" className={`title ${active === 'projects' ? 'active' : ''}`} onClick={() => setActive('projects')}>Projects</a>
          <a href="#fun" data-topic="fun" className={`title ${active === 'fun' ? 'active' : ''}`} onClick={() => setActive('fun')}>Fun</a>
        </div>

      </div>
    </div>
  );
}

export default App;
