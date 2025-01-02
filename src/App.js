import React, { useEffect, useState } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Conferences from './components/Conferences';
import Fun from './components/Fun';
import logo from './images/VP Logo.png';
import github from './images/github.png';
import email from './images/mail.svg';
import linkedin from './images/linkedin.png';


function App() {
  const [active, setActive] = useState('about');
  
  useEffect(() => { 
    const content = document.querySelector('.content');

    const scrollActive = () => { 
      let scrollPos = content.scrollTop; 

      if (scrollPos < 500){ 
        setActive('about')
      } else if (scrollPos >= 500 && scrollPos < 1200) { 
        setActive('experience') 
      } else if (scrollPos >= 1200 && scrollPos < 1950) { 
        setActive('projects')
      } else if (scrollPos >= 1950 && scrollPos < 2600) { 
        setActive('hackathons') 
      } else if (scrollPos >= 2600 && scrollPos < 3250) { 
        setActive('conferences') 
      } else if (scrollPos >= 3250) { 
        setActive('fun') 
      }
    }; 
    content.addEventListener('scroll', scrollActive);  
    return () => { 
      content.removeEventListener('scroll', scrollActive); 
    }; 
  }, []);

  const copyToClipboard = () => { 
    const email = 'vihangiperera9@gmail.com'; 
    navigator.clipboard.writeText(email).then(() => { 
      alert('Email copied to clipboard!');
     }, () => { 
      alert('Failed to copy email.');
     });
  }


  return (
    <div>
      <div className="header">
        <img src={logo} alt="Logo" className="logo" />
        <div className="connect">
          <a onClick={copyToClipboard} target="_blank" rel="noopener noreferrer">
            <img src={email} alt="Resume" className="github" />
          </a>
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
          <div id="experience" className="experience"><Experience /></div>
          <div id="projects" className="projects"><Projects /></div>
          <div id="hackathons" className="hackathons"><Hackathons /></div>
          <div id="conferences" className="conferences"><Conferences /></div>
          <div id="fun" className="fun"><Fun /></div>
        </div>

        <div className="menu">
          <a href="#about" data-topic="about" className={`title ${active === 'about' ? 'active' : ''}`} onClick={() => setActive('about')}>about</a>
          <a href="#experience" data-topic="experience" className={`title ${active === 'experience' ? 'active' : ''}`} onClick={() => setActive('experience')}>experience</a>
          <a href="#projects" data-topic="projects" className={`title ${active === 'projects' ? 'active' : ''}`} onClick={() => setActive('projects')}>projects</a>
          <a href="#hackathons" data-topic="hackathons" className={`title ${active === 'hackathons' ? 'active' : ''}`} onClick={() => setActive('hackathons')}>hackathons</a>
          <a href="#conferences" data-topic="conferences" className={`title ${active === 'conferences' ? 'active' : ''}`} onClick={() => setActive('conferences')}>conferences</a>
          <a href="#fun" data-topic="fun" className={`title ${active === 'fun' ? 'active' : ''}`} onClick={() => setActive('fun')}>fun</a>
        </div>

      </div>
    </div>
  );
}

export default App;
