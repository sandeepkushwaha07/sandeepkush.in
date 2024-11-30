import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './skills.css';

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

       

          {/* Right side - Icons */}
          <div className="col-12 col-md-6">
            <div className="row">
              {[
                { name: 'HTML', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                { name: 'CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                { name: 'Bootstrap', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' },
                { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                // { name: 'Java', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                // { name: 'Spring', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
                { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
               
                { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                // { name: 'Express.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' }
              ].map((skill, index) => (
                <div className="col-6 col-sm-4  mb-4 text-center skill-logo" key={index}>
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

             {/* Left side - Text */}
             <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="skills-text">
              <h3>My Expertise</h3>
              
              <p>
              I, Sandeep Kushwaha, am a skilled software developer specializing in front-end technologies. My expertise lies in HTML, CSS, Bootstrap, JavaScript, and React.js, enabling me to craft responsive, user-friendly, and visually appealing web interfaces. These technical skills, combined with a strong sense of design, ensure that my work aligns seamlessly with user expectations and modern web standards.
              </p>
              <p>
              Beyond front-end development, I have experience in Python, which enhances my versatility and equips me to contribute to full-stack projects. I excel at bridging the gap between designers and back-end developers, ensuring that project components integrate smoothly and efficiently.
              </p>
              {/* <p>My professional approach is rooted in a keen eye for detail, a strong commitment to delivering an exceptional user experience, and a passion for learning. I actively seek out opportunities to adopt and master new technologies, keeping my skill set current in a rapidly evolving field.</p>
              <p>Collaboration is at the heart of my work ethic. Whether working independently or as part of a team, I focus on clear communication, effective problem-solving, and delivering high-quality solutions. With these strengths, I aim to contribute to projects that make a meaningful impact, combining technical innovation with practical functionality.

</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillPage;
