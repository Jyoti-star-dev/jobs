import React, { useState } from 'react';
import './TechStackPanel.css'; // we'll create this file next

export default function TechStackPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="menu">
        {/* other nav items */}
        <a href="#" onClick={(e) => { e.preventDefault(); setIsOpen(true); }}>
          Technology Stack
        </a>
      </nav>

      <div className={`tech-stack-panel ${isOpen ? 'active' : ''}`}>
        <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
        <div className="tech-stack-content">
          <h2>Tech Stack</h2>
          <p>Over 100+ experts work in collaboration to create world-class products...</p>
          <div className="columns">
            <div>
              <h3>Front End</h3>
              <ul>
                <li>Angular</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Vue.js</li>
              </ul>
            </div>
            <div>
              <h3>Back End</h3>
              <ul>
                <li>Java</li>
                <li>.NET</li>
                <li>Python</li>
                <li>Ruby</li>
                <li>Node.js</li>
                <li>Golang</li>
              </ul>
            </div>
            <div>
              <h3>Mobile</h3>
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
            <div>
              <h3>Testing Services</h3>
              <ul>
                <li>Functional Testing</li>
                <li>Automation Testing</li>
                <li>Security Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
