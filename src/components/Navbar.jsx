import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-5 py-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold">ARKSecurity IT</h1>
            <p className="text-xs uppercase tracking-widest text-cyan-400">Booking & Admin Automation</p>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-semibold">
            <li><a href="#home" className="hover:text-cyan-400 transition">Home</a></li>
            <li><a href="#services" className="hover:text-cyan-400 transition">Services</a></li>
            <li><a href="#industry" className="hover:text-cyan-400 transition">Beauty Industry</a></li>
            <li><a href="#twilio" className="hover:text-cyan-400 transition">Security</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contact</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-3 pb-4 border-t border-gray-700">
            <li><a href="#home" className="block hover:text-cyan-400 transition" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#services" className="block hover:text-cyan-400 transition" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#industry" className="block hover:text-cyan-400 transition" onClick={() => setMobileMenuOpen(false)}>Beauty Industry</a></li>
            <li><a href="#twilio" className="block hover:text-cyan-400 transition" onClick={() => setMobileMenuOpen(false)}>Security</a></li>
            <li><a href="#contact" className="block hover:text-cyan-400 transition" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
}
