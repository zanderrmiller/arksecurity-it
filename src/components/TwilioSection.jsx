import React from 'react';

const features = [
  {
    title: 'Appointment Reminders',
    description: 'Automated SMS reminders reduce no-shows and keep clients informed of their bookings'
  },
  {
    title: 'Instant Notifications',
    description: 'Real-time booking confirmations and status updates via SMS keep everyone connected'
  },
  {
    title: 'Secure Messaging',
    description: 'All client communications are encrypted and secure for peace of mind'
  }
];

export default function TwilioSection() {
  return (
    <section id="twilio" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1a1a2e] mb-6">
          Secure Client Communication
        </h2>
        <p className="text-center text-lg text-gray-700 mb-16">
          Keep your clients informed and engaged with secure SMS messaging that builds trust and reduces no-shows.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg border-l-4 border-[#667eea]">
              <h4 className="text-xl font-bold text-[#1a1a2e] mb-3">{feature.title}</h4>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-lg p-8 max-w-2xl mx-auto text-center">
          <p className="text-[#1a1a2e] font-bold mb-3">Your Data Is Safe</p>
          <p className="text-gray-700">
            We use enterprise-grade encryption and secure communication protocols to protect your client data and ensure compliance with industry standards.
          </p>
        </div>
      </div>
    </section>
  );
}
