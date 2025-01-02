import React from 'react';
import bitmoji from '../images/VihangiBitmoji.PNG';

const About = () =>  {
  return (
    <div className='about-me'>
      <img src={bitmoji} alt="bitmoji" className="bitmoji" />
      <p>
        Hi I'm Vihangi 👋🏼 
        I am a 4th year Computer Science student at the University of British Columbia. <br />
        I am passionate about many aspects of software development and love creating cool things that help people! 
      </p>
    </div>
  );
}

export default About;
