import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import HomePage from './component/HomePage';
import SkillsPage from './component/SkillsPage';
import Education from './component/Education';
import Experience from './component/Experience';
import Contact from './component/Contact';
import Footer from './component/Footer';



function App() {
  return (
    <>
      <Router>
        <Header />
        <div style={{ marginTop: '80px' }}> {/* Adjust margin as needed */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
