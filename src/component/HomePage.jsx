import React, { useState, useEffect } from 'react';
import { FaJava, FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';


function HomePage() {
  const specializations = [
    "Software Development",
    "Backend Development",
    "Java",
    "React",
  ];

  const [currentSpecialization, setCurrentSpecialization] = useState(0);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSpecialization((prev) => (prev + 1) % specializations.length);
    }, 2000); 

    return () => clearInterval(intervalId); 
  }, [specializations.length]);

  return (
    <div className="homepage-container">
      <div className="row align-items-center min-vh-100">
      
        <div className="col-6 text-center text-md-start p-5">
          <h1>Hi, I'm Anup Kushwaha</h1>
          <p className="lead">
            A Technical Architect from the beautiful country of India. I specialize in{" "}
            <strong>{specializations[currentSpecialization]}</strong>.
          </p>
        </div>


        <div className="col-6 text-center position-relative">
          <div className="tech-circle">
            <FaJava className="tech-icon" />
            <FaReact className="tech-icon" />
            <FaNodeJs className="tech-icon" />
            <FaGit className="tech-icon" />
          </div>
          <div className="bg-circle"></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
