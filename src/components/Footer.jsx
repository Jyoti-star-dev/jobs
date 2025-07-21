import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Industries</h3>
          <ul>
            <li>Automotive & Manufacturing</li>
            <li>Banking & Financial Services</li>
            <li>Higher Education</li>
            <li>Healthcare Provider Services</li>
            <li>Healthcare Payer Services</li>
            <li>Insurance</li>
            <li>Entertainment, Media, Publishing & Telecom</li>
            <li>Hospitality & Retail</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Product Development</li>
            <li>Custom Application Development</li>
            <li>Web Services Development</li>
            <li>Application Migration</li>
            <li>Application Integration</li>
            <li>Engineering Services</li>
            <li>Quality Assurance</li>
            {/* <Link to="/Home">Quality Assurance</Link> */}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Frontend</h3>
          <ul>
            <li>Angular</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Vue.js</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Backend</h3>
          <ul>
            <li>Java</li>
            <li>.NET</li>
            <li>Python</li>
            <li>Ruby</li>
            <li>Node.js</li>
            <li>Golang</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Mobile Dev</h3>
          <ul>
            <li>Android</li>
            <li>iOS</li>
            <li>Cross-platform</li>
            <li>Xamarin</li>
            <li>React Native</li>
            <li>Cordova</li>
            <li>Ionic</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>QA Services</h3>
          <ul>
            <li>Functional Testing</li>
            <li>Automation Testing</li>
            <li>Security Testing</li>
          </ul>
        </div>
      </div>

      <div className="footer-addresses">
        <div className="address">
          <h4>INDIA</h4>
          <p>4th Floor, Tanda Road Towers (B), Delhi City</p>
        </div>
        <div className="address">
          <h4>USA</h4>
          <p>215 Flower Ave #140, Farms, CA 94587, USA</p>
          <p>Phone: +1 209 400 9977</p>
          <p>Phone: +1 999 888 7777</p>
        </div>
        <div className="address">
          <h4>Australia</h4>
          <p>2/15-17, Towers Street, Road NSW-21, Australia</p>
          <p>Phone: +61 1122334455</p>
        </div>
      </div>

      <div className="footer-contact">
        <p>■ info@deepith.com</p>
        <p>■ +1-222-444-9999 (USA)</p>
        <p>■ +91 44.2222.2266 (INDIA)</p>
      </div>

      <div className="footer-copyright">
        <p>© All Rights Reserved, 2010 – 2023. Deepith Technologies Private Limited</p>
      </div>
    </footer>
  );
};

export default Footer;