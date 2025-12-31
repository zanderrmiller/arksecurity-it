import React from 'react';

export default function Hero() {
  const handleGetStarted = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white py-32">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <div className="mb-8">
          <span className="inline-block bg-cyan-400 bg-opacity-20 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-widest">
            For Beauty & Service Businesses
          </span>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Custom Booking Websites<br />
          <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Designed for Growth</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto">
          Stop losing clients to outdated systems. Get a fully custom website with intelligent booking logic, admin workflow automation, payment integration, and data analytics—built specifically for your service business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button 
            onClick={handleGetStarted}
            className="bg-cyan-400 text-[#1a1a2e] px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-cyan-500 transition transform hover:-translate-y-1 shadow-lg"
          >
            Get Started Today
          </button>
          <a 
            href="#services"
            className="border-2 border-cyan-400 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-[#1a1a2e] transition"
          >
            See Our Services
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto text-sm">
          <div className="bg-white bg-opacity-10 p-4 rounded-lg">
            <div className="text-3xl font-bold mb-1">99.9%</div>
            <div className="text-cyan-200">Uptime Guarantee</div>
          </div>
          <div className="bg-white bg-opacity-10 p-4 rounded-lg">
            <div className="text-3xl font-bold mb-1">✨</div>
            <div className="text-cyan-200">Custom Built</div>
          </div>
        </div>
      </div>
    </section>
  );
}
