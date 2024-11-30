import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Experience.css';
import imgsp from '../assest/logo_bg.jpg';

function Slide() {
  const testimonials = [
    {
      name: 'Anup Kushwaha',
      position: 'Sr Software Developer Quantify',
      feedback: 'Sandeep was instrumental in delivering our project on time with cutting-edge technology.   is top-notch.',
      image: 'https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_yO9RrR6SnCrwhNbe-2173-NOC.jpg?itok=PhnVjzRK',
    },
    {
      name: 'Rakesh Yadav',
      position: 'Engineering Manager, ',
      feedback: 'Working with sandeep was a great experience. His leadership in guiding our to the success of our transition.',
      image: 'https://www.skillreactor.io/blog/wp-content/uploads/2024/02/image.jpeg',
    },
    {
      name: 'Vishal Dhiman',
      position: 'Project Manager, ',
      feedback: 'Sandeep understanding of Front end and back end technologies is exceptional. He played  our system’s performance.',
      image: 'https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_yO9RrR6SnCrwhNbe-2173-NOC.jpg?itok=PhnVjzRK',
    },
    {
      name: 'Akshay Singh',
      position: 'Lead Engineer, Php Solutions',
      feedback: 'Sandeep ability to manage complex architectures and guide challenges is remarkable. grateful for his expertise.',
      image: 'https://www.skillreactor.io/blog/wp-content/uploads/2024/02/image.jpeg',
    },
    {
      name: 'Nitish Sharma',
      position: 'Senior Developer, React Technologies',
      feedback: 'Sandeep attention to detail and his deep understanding of technology made a big difference project’s success.',
      image: 'https://www.workbc.ca/sites/default/files/styles/hero_image/public/NTI5NzE_yO9RrR6SnCrwhNbe-2173-NOC.jpg?itok=PhnVjzRK',
    },
    {
      name: 'Vikash Rajput',
      position: 'Senior Php Developer ',
      feedback: 'Sandeep is a brilliant architect who understands both the technical and business side. Hi in our development.',
      image: 'https://www.skillreactor.io/blog/wp-content/uploads/2024/02/image.jpeg',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = Math.ceil(testimonials.length / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 1000); 

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="experiencePage">
      <div className="container mt-5">
      
        <div className="row mt-5">
          <div className="col-12 text-center mb-4">
            <h2>Our Team</h2>
          </div>
          <div className="col-12">
            <div id="testimonialCarousel" className="carousel slide" data-ride="carousel" data-interval="false">
              <div className="carousel-inner">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <div className={`carousel-item ${index === currentSlide ? 'active' : ''}`} key={index}>
                    <div className="row justify-content-center">
                      {testimonials.slice(index * 3, index * 3 + 3).map((testimonial, i) => (
                        <div className="col-12 col-md-4 text-center" key={i}>
                          <div className="testimonial-slide">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="rounded-circle mb-3"
                              style={{ width: '100px', height: '100px' }}
                            />
                            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
                            <p className="testimonial-author"><strong>{testimonial.name}</strong></p>
                            <p className="testimonial-position">{testimonial.position}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slide;
