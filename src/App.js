import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Careers from './components/Careers';
import AdminLogin from './components/AdminLogin';
import './App.css';

function App() {
  const [showAdminLogin, setShowAdminLogin] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header onLoginClick={() => setShowAdminLogin(true)} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        
        <Footer />
        
        {/* Admin Login Modal */}
        <AdminLogin 
          isOpen={showAdminLogin} 
          onClose={() => setShowAdminLogin(false)} 
        />
      </Router>
    </div>
  );
}

export default App;