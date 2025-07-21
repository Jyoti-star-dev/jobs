import React, { useState } from 'react';
import axios from 'axios';
import './RequestForPilotModal.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequestForPilotModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    designation: '',
    website: '',
    email: '',
    name: '',
    mobile: '',
    requirement: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://localhost:7278/Jobs/SaveRequestForPilotNew/',
        {
          CompanyName: formData.companyName,
          Designation: formData.designation,
          Website: formData.website,
          Email: formData.email,
          Name: formData.name,
          Mobile: formData.mobile,
          Requirement: formData.requirement,
          Flag: 'Create'
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const apiMessage = response.data.message || 'Form submitted successfully!';
      if (apiMessage === 'Record saved successfully!') {
        
        setFormData({
          companyName: '',
          designation: '',
          website: '',
          email: '',
          name: '',
          mobile: '',
          requirement: ''
        });
        setTimeout(onClose, 2000);
        toast.success(apiMessage, { autoClose: 2000 });
      } else {
        toast.info(apiMessage, { autoClose: 2000 });
      }
    } catch (error) {
      console.error(error);
      toast.error('Error submitting form.', { autoClose: 2000 });
    }
  };

  return (
    <>
      <div className="pilot-modal-overlay">
        <div className="pilot-modal">
          <div className="pilot-modal-header">
            <h3>Request for Pilot</h3>
            <button className="close-btn" onClick={onClose}>×</button>
          </div>
          <form className="pilot-form" onSubmit={handleSubmit}>
            <div className="pilot-form-row">
              <div className="form-field col-6">
                <i className="fas fa-briefcase"></i>
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field col-6">
                <i className="fas fa-tag"></i>
                <input
                  type="text"
                  name="designation"
                  placeholder="Designation"
                  value={formData.designation}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="pilot-form-row">
              <div className="form-field col-6">
                <i className="fas fa-link"></i>
                <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  value={formData.website}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field col-6">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="pilot-form-row">
              <div className="form-field col-6">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field col-6">
                <i className="fas fa-mobile-alt"></i>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter Phone No"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field full-width">
              <i className="fas fa-pencil-alt"></i>
              <textarea
                name="requirement"
                placeholder="Requirement Brief"
                value={formData.requirement}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <i className="fas fa-paper-plane"></i> SUBMIT
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default RequestForPilotModal;
