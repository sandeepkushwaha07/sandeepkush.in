import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? '#fff' : '#343a40';
    document.body.style.color = isDarkMode ? '#000' : '#fff';
  };

  return (
    <Navbar expand="lg" className={isDarkMode ? 'bg-dark navbar-dark fixed-top' : 'bg-light navbar-light fixed-top'}>
      <Container fluid>
        <Navbar.Brand href="#" className="brand">
          Anup
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#experience" className="nav-link">
              Experience
            </Nav.Link>
            <Nav.Link href="#education" className="nav-link">
              Education
            </Nav.Link>
            <Nav.Link href="#portfolio" className="nav-link">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center ms-2">
          <a href="" className="social-icon me-3" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="" className="social-icon me-3" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <div onClick={toggleTheme} style={{ cursor: 'pointer' }}>
            {isDarkMode ? (
              <>
                <FaSun className="theme-icon me-2" />
                <FaMoon className="theme-icon" />
              </>
            ) : (
              <>
                <FaMoon className="theme-icon me-2" />
                <FaSun className="theme-icon" />
              </>
            )}
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
