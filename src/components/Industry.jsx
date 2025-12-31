import React from 'react';

const features = [
  'Service duration estimation and dynamic pricing',
  'Stylist/therapist scheduling and specialty matching',
  'Recurring appointments, memberships, and packages',
  'Automated client communication and reminders',
  'Product recommendations and upselling tools',
  'Real-time staff availability management',
  'Waitlist and cancellation handling',
  'Performance metrics and staff commission tracking'
];

const industries = [
  { name: 'Hair Salons', emoji: '💇' },
  { name: 'Nail Studios', emoji: '💅' },
  { name: 'Spas & Wellness', emoji: '🧖' },
  { name: 'Barbershops', emoji: '🪒' },
  { name: 'Fitness Studios', emoji: '💪' },
  { name: 'Massage Therapy', emoji: '🛀' }
];

export default function Industry() {
  return (
    <section id="industry" className="bg-gradient-to-r from-[#f093fb] to-[#f5576c] text-white py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for the Beauty Industry</h2>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            We specialize exclusively in beauty, wellness, and service businesses. We understand your challenges and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white bg-opacity-20 backdrop-blur p-6 rounded-lg text-center hover:bg-opacity-30 transition">
              <div className="text-4xl mb-2">{industry.emoji}</div>
              <p className="font-semibold text-sm">{industry.name}</p>
            </div>
          ))}
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur rounded-xl p-12 mb-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Features Built for Service Businesses</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              {features.slice(0, 4).map((feature, index) => (
                <div key={index} className="flex items-start gap-4 mb-6">
                  <span className="text-cyan-300 font-bold text-2xl flex-shrink-0">✓</span>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <div>
              {features.slice(4).map((feature, index) => (
                <div key={index} className="flex items-start gap-4 mb-6">
                  <span className="text-cyan-300 font-bold text-2xl flex-shrink-0">✓</span>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur p-8 rounded-lg text-center">
            <div className="text-4xl mb-3">⏰</div>
            <h4 className="font-bold text-lg mb-2">Save Time</h4>
            <p className="text-sm opacity-90">Automate scheduling, reduce admin work, free up your team to focus on clients</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur p-8 rounded-lg text-center">
            <div className="text-4xl mb-3">💰</div>
            <h4 className="font-bold text-lg mb-2">Increase Revenue</h4>
            <p className="text-sm opacity-90">Reduce no-shows, upsell services, track metrics, and optimize pricing</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur p-8 rounded-lg text-center">
            <div className="text-4xl mb-3">😊</div>
            <h4 className="font-bold text-lg mb-2">Delight Clients</h4>
            <p className="text-sm opacity-90">Easy booking, automatic reminders, seamless payments, professional experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
