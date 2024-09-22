import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="container">
        <div className="row">
         
          <div className="col-md-4 text-center text-md-left">
            
            <p>Your tagline or a brief description here.</p>
          </div>
          
        
          <div className="col-md-4">
            <h5 className="text-center">Quick Links</h5>
            <ul className="list-unstyled text-center">
              <li><a href="/home" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          
       
          <div className="col-md-4 text-center">
            <h5>Follow Us</h5>
            <a href="" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a>
            <a href="" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
            <a href="" className="text-white mx-2"><i className="fab fa-linkedin-in"></i></a>
            <a href="" className="text-white mx-2"><i className="fab fa-github"></i></a>
          </div>
        </div>

       
        <div className="row mt-3">
          <div className="col text-center">
            <small>&copy; {new Date().getFullYear()} create by Sandeep kushwaha</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
