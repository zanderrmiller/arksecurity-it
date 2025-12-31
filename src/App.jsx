import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Industry from './components/Industry';
import TwilioSection from './components/TwilioSection';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash;
    if (hash === '#admin') return 'admin';
    if (hash === '#privacy') return 'privacy';
    return 'home';
  });

  const [adminLoggedIn, setAdminLoggedIn] = useState(() => {
    return localStorage.getItem('adminSession') === 'true';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#admin') {
        setCurrentPage('admin');
      } else if (hash === '#privacy') {
        setCurrentPage('privacy');
        setTimeout(() => window.scrollTo(0, 0), 0);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleAdminLogin = () => {
    localStorage.setItem('adminSession', 'true');
    setAdminLoggedIn(true);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem('adminSession');
    localStorage.removeItem('adminPassword');
    setAdminLoggedIn(false);
    window.location.hash = '#home';
  };

  // Render admin pages
  if (currentPage === 'admin') {
    if (!adminLoggedIn) {
      return <AdminLogin onLoginSuccess={handleAdminLogin} />;
    }
    const adminPassword = localStorage.getItem('adminPassword');
    return <AdminDashboard onLogout={handleAdminLogout} adminPassword={adminPassword} />;
  }

  // Render privacy policy
  if (currentPage === 'privacy') {
    return (
      <div className="w-full">
        <Navbar />
        <PrivacyPolicy />
        <Footer />
      </div>
    );
  }

  // Render main site
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Services />
      <Industry />
      <TwilioSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
