import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import SkillPage from './SkillsPage';
import Experience from './Experience';
import Contact from './Contact';
import './Home.css';
import profilePic from '../assest/main.png'; 

function HomePage() {
  const specializations = [
    "Front end Developer",
    "Javascript Developer",
    "React Developer",
    "Python Developer",
  ];

  const [currentSpecialization, setCurrentSpecialization] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSpecialization((prev) => (prev + 1) % specializations.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [specializations.length]);

  return (
    <>
      <div className="homepage-container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start p-5">
            <h1 className="display-4">Hi, I'm Sandeep Kushwaha</h1>
            <p className="lead">
            He is a Passionate <strong>{specializations[currentSpecialization]}</strong>.
            </p>
          </div>
          <div className="col-md-6 text-center position-relative">
          <div className="main-container">
      <div className="main">
        <div className="big-circle">
          <div className="icon-block">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="web design icon" />
          </div>
          <div className="icon-block">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="game design icon" />
          </div>
          <div className="icon-block">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="game dev icon" />
          </div>
          <div className="icon-block">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="ui-ux icon" />
          </div>
        </div>
        <div className="circle">
          <div className="icon-block">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" 
              alt="Bootstrap Icon" 
            />
          </div>
          <div className="icon-block">
            <img 
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" 
              alt="SCSS Icon" 
            />
          </div>
          <div className="icon-block">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="ar-vr icon" />
          </div>
          <div className="icon-block">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="artificial intelligence icon" />
          </div>
        </div>
        <div className="center-logo">
          <img src={profilePic} alt="logo" />
        </div>
      </div>
      </div>

          </div>
        </div>
      </div>

    
      <SkillPage />
      <Experience />
      <Contact />
    </>
  );
}

export default HomePage;
