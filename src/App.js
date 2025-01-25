import React, { useEffect, useRef,  useState } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Conferences from './components/Conferences';
import Skills from './components/Skills';
import logo from './images/VP Logo.png';
import github from './images/github.png';
import email from './images/mail.svg';
import linkedin from './images/linkedin.png';
import useWindowDimensions from './useWindowDimensions';
import TooSmallScreen from './components/TooSmallScreen';
import TooBigScreen from './components/TooBigScreen';


function App() {
  const [active, setActive] = useState('about');
  const {width, height} = useWindowDimensions();
  const contentRef = useRef(null);
  const zoom = window.outerWidth;

  const isSmallerScreenSize = (width < 1400 || zoom < 1400) && (height < 1400);

  const isBiggerScreenSize = (width > 1536 || zoom > 1920) && (height > 1536);

  console.log("width", width);
  console.log("height", height);
  console.log("zoom", zoom);
  console.log("smaller", isSmallerScreenSize);
  console.log("bigger", isBiggerScreenSize);
  
  
  useEffect(() => { 
    const content = contentRef.current;
    if (!content) return;

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
        setActive('skills') 
      }
    }; 
    content.addEventListener('scroll', scrollActive);  
    return () => { 
      content.removeEventListener('scroll', scrollActive); 
    }; 
  }, [width, height]);

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
      {isSmallerScreenSize ? (
        <TooSmallScreen />
      ) : isBiggerScreenSize ? (
        <TooBigScreen />
      ) : (
        <div className="main">
          <div ref={contentRef} className="content">
            <div id="about" className="about"><About /></div>
            <div id="experience" className="experience"><Experience /></div>
            <div id="projects" className="projects"><Projects /></div>
            <div id="hackathons" className="hackathons"><Hackathons /></div>
            <div id="conferences" className="conferences"><Conferences /></div>
            <div id="skills" className="skills"><Skills  /></div>
          </div>

          <div className="menu">
            <a href="#about" data-topic="about" className={`title ${active === 'about' ? 'active' : ''}`} onClick={() => setActive('about')}>about</a>
            <a href="#experience" data-topic="experience" className={`title ${active === 'experience' ? 'active' : ''}`} onClick={() => setActive('experience')}>experience</a>
            <a href="#projects" data-topic="projects" className={`title ${active === 'projects' ? 'active' : ''}`} onClick={() => setActive('projects')}>projects</a>
            <a href="#hackathons" data-topic="hackathons" className={`title ${active === 'hackathons' ? 'active' : ''}`} onClick={() => setActive('hackathons')}>hackathons</a>
            <a href="#conferences" data-topic="conferences" className={`title ${active === 'conferences' ? 'active' : ''}`} onClick={() => setActive('conferences')}>conferences</a>
            <a href="#skills" data-topic="skills" className={`title ${active === 'skills' ? 'active' : ''}`} onClick={() => setActive('skills')}>tech stack</a>
          </div>

        </div>
      )}
    </div>
  );
}

export default App;
