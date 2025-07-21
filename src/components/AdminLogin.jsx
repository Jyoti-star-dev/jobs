import React, { useState } from 'react';
import { FaSignInAlt, FaTimes, FaUserShield, FaLock } from 'react-icons/fa';
import './AdminLogin.css';

const AdminLogin = ({ isOpen, onClose }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your admin authentication logic here
    console.log('Admin login attempt:', credentials);
  };

  return (
    <>
      {isOpen && (
        <div className="admin-modal-overlay">
          <div className="admin-modal-container">
            <div className="admin-modal-left">
              <div className="admin-gif-overlay"></div>
<img 
  src="https://i.gifer.com/7XHa.gif" 
  alt="Business Meeting"
  className="admin-gif-bg"
/>
              <div className="admin-welcome-text">
                <h2>Admin Dashboard</h2>
                <p>Elevated privileges for system administration</p>
              </div>
            </div>
            
            <div className="admin-modal-right">
              <button className="admin-close-btn" onClick={onClose}>
                <FaTimes />
              </button>
              
              <form className="admin-login-form" onSubmit={handleSubmit}>
                <div className="admin-form-header">
                  <FaUserShield className="admin-form-icon" />
                  <h2>Admin Access</h2>
                </div>
                
                <div className="admin-input-group">
                  <FaUserShield className="admin-input-icon" />
                  <input 
                    type="text" 
                    name="username"
                    placeholder="Admin ID" 
                    value={credentials.username}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <div className="admin-input-group">
                  <FaLock className="admin-input-icon" />
                  <input 
                    type="password" 
                    name="password"
                    placeholder="Security Key" 
                    value={credentials.password}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                
                <button type="submit" className="admin-submit-btn">
                  <FaSignInAlt className="submit-icon" />
                  <span>Verify Identity</span>
                </button>
                
                <div className="admin-security-note">
                  <FaLock className="security-icon" />
                  <p>All activities are logged and monitored</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminLogin;