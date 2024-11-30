import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Experience.css';
import SlidePage from './SlidePage';

function Experience() {
  const experiences = [
    {
      company: 'Quantiphi Analytics Solution Pvt Ltd',
      location: 'Mumbai',
      role: 'Associate Technical Architect',
      duration: 'June 2020 - Present',
      description: [
        'Architected various applications incorporating pub-sub systems, AWS Lambda, Fargate, and other cloud-native technologies.',
        'Developed comprehensive threat models to identify and mitigate potential security risks within application architectures.',
        'Guided cross-functional teams in the implementation of complex microservices solutions, ensuring alignment with architectural best practices.',
        'Collaborated with stakeholders to define technical requirements, drive design decisions, and ensure project success.',
      ],
      image: 'https://via.placeholder.com/300x400?text=Quantiphi+Architect',
    },
    {
      company: 'Tudip Technologies',
      location: 'Pune',
      role: 'Senior Software Engineer',
      duration: 'June 2016 - April 2020',
      description: [
        'Worked as a backend software developer.',
        'Handled team, client calls, and project communication.',
        'Conducted technology sessions for new hires as part of induction.',
      ],
      image: 'https://via.placeholder.com/300x400?text=Tudip+Technologies',
    },
    {
      company: 'Liberty Mutual Insurance',
      location: 'Europe',
      role: 'Customer Enablement WEM',
      duration: 'July 2022 - Present',
      description: [
        'Created scalable jobs for anonymization & deletion of records to meet GDPR compliance.',
        'Technologies used: Java, Spring Boot, ECS Fargate, AWS, RDS, KMS, Jenkins.',
      ],
      image: 'https://via.placeholder.com/300x400?text=Liberty+Mutual+Insurance',
    },
    
  ];

  useEffect(() => {
  
  }, []);

  return (

    <>
    {/* <section className="experiencePage">
      <div className="container mt-5">
       
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2>Professional Experience</h2>
          </div>
        </div>
        {experiences.map((exp, index) => (
          <div className="row mb-5 experience-row" key={index}>
            <div className="col-12 col-md-6 order-md-1 order-2 experience-text">
              <h4>{exp.role}</h4>
              <p>{exp.company}, {exp.location}</p>
              <p><strong>{exp.duration}</strong></p>
              <ul>
                {exp.description?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="col-12 col-md-6 order-md-2 order-1 text-center mb-3">
              <img src={exp.image} alt={exp.company} className="experience-image img-fluid" />
            </div>
          </div>
        ))}
      </div>
    </section> */}
    <SlidePage/>

    </>
  );
}

export default Experience;
