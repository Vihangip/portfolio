import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/ProjectList';
import logo from './images/VP Logo.png';
import bitmoji from './images/VihangiBitmoji.PNG';
import github from './images/github.png';
import linkedin from './images/linkedin.png';


function App() {
  return (
    <div>
      <div className='Header'>
        <img src={logo} alt="Logo" className="logo"/>
        
        <div className='socials'>
          <a href="https://github.com/Vihangip" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="Github" className="github"/>
          </a>
          <a href="https://www.linkedin.com/in/vihangiperera/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="Linkedin" className="linkedin"/>
          </a>
        </div>
      </div>

      <div className='Main'>
        <img src={bitmoji} alt="Bitmoji" className="bitmoji" />
        <Header />
      </div>
  
    </div>

  );
}

export default App;
