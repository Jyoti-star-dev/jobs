import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


import RequestForPilotModal from './RequestForPilotModal';

const Header = ({onLoginClick}) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showPilotModal, setShowPilotModal] = useState(false);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
    setShowPilotModal(false);
  };

  return (
    <>
      <header className="header-container">
             {/* Title bar with contact numbers */}
      <div className="title-bar">
  <div className="logo">Inbegue.gile.com</div>
  <div className="contact-social-container">
    <div className="contact-numbers">
      <span style={{ color: 'white' }}>
        <i className="fas fa-phone-alt blink-phone"></i> +91-9977887248
      </span>
      <span style={{ color: 'white' }}>
        <i className="fas fa-phone-alt blink-phone"></i> +91-9056394474
      </span>
    </div>
    <div className="social-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
<button className="login-btn" onClick={onLoginClick}>
        <i className="fas fa-sign-in-alt"></i>
        <span>Login</span>
    </button>
    </div>
  </div>
</div>

      {/* Menu bar with dropdowns */}
      <nav className="menu-bar">
        <ul className="menu-list">
          <li 
            className="menu-item"
            onMouseEnter={() => toggleDropdown('services')}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <span>Services <span className="dropdown-arrow">▼</span></span>
            {activeDropdown === 'services' && (
              <div className="dropdown-menu">
                <Link to="/ProductDevlopment">Product Development</Link>
                <Link to="/">Custom Application Development</Link>
                <Link to="/">Web Services Development</Link>
                <Link to="/">Application Migration</Link>
                <Link to="/">Application Integration</Link>
                <Link to="/">Engineering Services</Link>
                <Link to="/Home">Quality Assurance</Link>
                <Link to="/">IOT Services</Link>
                <Link to="/">DevOps Services</Link>
                <Link to="/">Cloud Services</Link>
               </div>
            )}
          </li>
          
          <li 
            className="menu-item"
            onMouseEnter={() => toggleDropdown('technology')}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <span>Technology Stack <span className="dropdown-arrow">▼</span></span>
            {activeDropdown === 'technology' && (
              <div className="dropdown-menu">
                <a href="#react">React</a>
                <a href="#nodejs">Node.js</a>
                <a href="#python">Python</a>
                <a href="#java">Java</a>
                <a href="#aws">AWS</a>
              </div>
            )}
          </li>
          
          <li 
            className="menu-item"
            onMouseEnter={() => toggleDropdown('industries')}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <span>Industries <span className="dropdown-arrow">▼</span></span>
            {activeDropdown === 'industries' && (
              <div className="dropdown-menu">
                <a href="#healthcare">Healthcare</a>
                <a href="#finance">Finance</a>
                <a href="#retail">Retail</a>
                <a href="#manufacturing">Manufacturing</a>
              </div>
            )}
          </li>
          
          <li 
            className="menu-item"
            onMouseEnter={() => toggleDropdown('company')}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <span>Company <span className="dropdown-arrow">▼</span></span>
            {activeDropdown === 'company' && (
              <div className="dropdown-menu">
                <a href="#about">About Us</a>
                <a href="#leadership">Leadership</a>
                <Link to="/careers">Careers</Link>
                <a href="#news">News</a>
              </div>
            )}
          </li>
          
          <li 
            className="menu-item"
            onMouseEnter={() => toggleDropdown('resources')}
            onMouseLeave={() => toggleDropdown(null)}
          >
            <span>Resources <span className="dropdown-arrow">▼</span></span>
            {activeDropdown === 'resources' && (
              <div className="dropdown-menu">
                <a href="#blog">Blog</a>
                <a href="#whitepapers">Whitepapers</a>
                <a href="#case-studies">Case Studies</a>
                <a href="#webinars">Webinars</a>
              </div>
            )}
          </li>
          
          <li className="menu-item">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>

      <div className="request-for-pilot" onClick={() => setShowPilotModal(true)}>
        Request for Pilot
      </div>

      {showPilotModal && (
        <RequestForPilotModal
          onClose={() => setShowPilotModal(false)}
          onSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default Header;
