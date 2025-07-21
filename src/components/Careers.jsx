// src/components/Careers.js
import React, { useState } from 'react';
import './Header.css'; // optional: add your CSS file here

const Careers = () => {
     const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null
  });

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
    setIsPopupOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null
    });
  };
  return (
    <>
    <div className="life-section">
      <div className="life-text">
        <h2>LIFE @ DEEPITH</h2>
        <p>
          At Deepith you will get opportunities to explore more about yourself.
          Our team is INSPIRED with several activities apart from the regular work.
        </p>
        <div className="life-list">
          <p><strong>I</strong> - Innovative</p>
          <p><strong>N</strong> - iNtuitive</p>
          <p><strong>S</strong> - Social</p>
          <p><strong>P</strong> - Passionate</p>
          <p><strong>I</strong> - Independent</p>
          <p><strong>R</strong> - Respect</p>
          <p><strong>E</strong> – Enthusiast</p>
        </div>
        <p className="life-footer">
          Deepith provides conducive and collaborative atmosphere which shapes
          your career and helps you to grow as an individual.
        </p>
      </div>
      <div className="life-image">
        <img src="/images/motivation.png" alt="Life at Deepith" />
      </div>
    </div>
   <div className="job-container">
      <div className="job-card">
        <div className="job-badge">HIRING</div>
        
        <div className="job-header">
          <h1>Java Developer</h1>
          <div className="job-meta">
            <span className="job-location">📍 Hyderabad, India</span>
            <span className="job-experience">4-5 Years Experience</span>
          </div>
        </div>

        <div className="job-content">
          <div className="job-section">
            <h3>Job Description</h3>
            <ul>
              <li>Design and build database-driven, cloud-based multi-tenant enterprise applications</li>
              <li>Develop server-side Java using Spring MVC, Hibernate, Spring Boot</li>
              <li>Create configurable and extensible data models for multiple customers</li>
              <li>Work with modern DevOps (CI/CD, Docker, Kubernetes)</li>
              <li>Learn new systems and suggest features proactively</li>
            </ul>
          </div>

          <div className="job-section">
            <h3>Required Skills</h3>
            <div className="skills-container">
              <span className="skill-pill">Java</span>
              <span className="skill-pill">J2EE</span>
              <span className="skill-pill">Spring Boot</span>
              <span className="skill-pill">Spring REST</span>
              <span className="skill-pill">MySQL</span>
              <span className="skill-pill">Jenkins</span>
            </div>
          </div>

          <div className="job-section">
            <h3>Nice to Have</h3>
            <div className="skills-container">
              <span className="skill-pill">AngularJS</span>
              <span className="skill-pill">Docker</span>
            </div>
          </div>
        </div>

        <button className="apply-button" onClick={togglePopup}>
          Apply Now
        </button>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="application-popup">
            <button className="close-popup" onClick={togglePopup}>×</button>
            <h2>Apply for Java Developer</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label>Upload Resume (PDF)*</label>
                <div className="file-upload">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="resume" className="file-label">
                    {formData.resume ? formData.resume.name : 'Choose file'}
                  </label>
                </div>
              </div>
              
              <button type="submit" className="submit-button">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}
    </div>


    </>
  );
};

export default Careers;
