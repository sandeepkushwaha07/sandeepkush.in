import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function SkillPage() {
  return (
    <section className="skillsPage">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <div className="AnupTitle">
              <h2>Skills</h2>
            </div>
          </div>

          
          <div className="col-12 col-md-6">
            <div className="row">
              {[
                { name: 'HTML', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                { name: 'CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                { name: 'Bootstrap', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' },
                { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                { name: 'Spring', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
                { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                { name: 'PHP', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
                { name: 'C++', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
                { name: 'C', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
                { name: 'DotNet', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
                { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                { name: 'Express.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' }
              ].map((skill, index) => (
                <div className="col-6 col-sm-4 col-lg-3 mb-4 text-center skill-logo" key={index}>
                  <img
                    src={skill.url}
                    alt={skill.name}
                    className="img-fluid"
                    style={{ maxWidth: '50px' }}
                  />
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

       
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center mt-4 mt-md-0">
            <div className="circle-diagram">
              <div className="center-item">Software Developer</div>
              <div className="circle-item">Java</div>
              <div className="circle-item">Python</div>
              <div className="circle-item">React</div>
              <div className="circle-item">Bootstrap</div>
              <div className="circle-item">AWS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillPage;
