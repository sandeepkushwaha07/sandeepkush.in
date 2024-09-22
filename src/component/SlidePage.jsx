import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Experience.css';

function Slide() {
  const testimonials = [
    {
      name: 'Rakesh',
      position: 'CTO, XYZ Corp',
      feedback: 'Anup was instrumental in delivering our project on time with cutting-edge technology. His expertise in cloud-native architecture is top-notch.',
      image: '',
    },
    {
      name: 'Rakesh',
      position: 'Engineering Manager, ABC Ltd',
      feedback: 'Working with Anup was a great experience. His leadership in guiding our team was crucial to the success of our microservices transition.',
      image: '',
    },
    {
      name: 'Rakesh',
      position: 'Project Manager, DEF Inc',
      feedback: 'Anup’s understanding of AWS and cloud technologies is exceptional. He played a key role in optimizing our system’s performance.',
      image: '',
    },
    {
      name: 'Rakesh',
      position: 'Lead Engineer, GHI Solutions',
      feedback: 'Anup’s ability to manage complex architectures and guide teams through challenges is remarkable. We are grateful for his expertise.',
      image: '',
    },
    {
      name: 'Rakesh',
      position: 'Senior Developer, LMN Technologies',
      feedback: 'Anup’s attention to detail and his deep understanding of technology made a big difference in our project’s success.',
      image: '',
    },
    {
      name: 'Rakesh',
      position: 'Software Architect, OPQ Inc',
      feedback: 'Anup is a brilliant architect who understands both the technical and business side. His input was invaluable in our development.',
      image: '',
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
