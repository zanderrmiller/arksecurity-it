import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f1e] text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">ARKSecurity IT</h3>
            <p className="text-sm leading-relaxed">Custom web solutions for service businesses with booking logic and admin automation.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-cyan-400 transition">Custom Booking Systems</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Admin Workflows</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Payment Integration</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Analytics & Reporting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#industry" className="hover:text-cyan-400 transition">Beauty Salons</a></li>
              <li><a href="#industry" className="hover:text-cyan-400 transition">Spas & Wellness</a></li>
              <li><a href="#industry" className="hover:text-cyan-400 transition">Barbershops</a></li>
              <li><a href="#industry" className="hover:text-cyan-400 transition">Fitness Studios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition">Services</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
              <li><a href="#privacy" className="hover:text-cyan-400 transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {currentYear} ARKSecurity IT, LLC. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <p>Specializing in beauty industry web solutions</p>
            <a href="#admin" className="text-gray-600 hover:text-gray-400 transition text-xs">Admin</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
