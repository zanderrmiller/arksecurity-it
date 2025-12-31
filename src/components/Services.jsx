import React from 'react';

const services = [
  {
    icon: '📅',
    title: 'Custom Booking Systems',
    description: 'Advanced scheduling logic tailored to your service type. Manage appointments, staff availability, service durations, and client preferences with an intelligent system that reduces conflicts and no-shows.'
  },
  {
    icon: '⚙️',
    title: 'Admin Workflow Automation',
    description: 'Automate repetitive tasks like appointment confirmations, client reminders, staff scheduling, and invoice generation. Save hours every week with intelligent automation.'
  },
  {
    icon: '🔒',
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with SMS verification, PCI-compliant payment processing, and data encryption to keep your business and clients safe.'
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Beautiful, mobile-first design that works seamlessly across all devices. Your clients can book appointments, manage their profiles, and pay from anywhere.'
  },
  {
    icon: '💳',
    title: 'Payment Integration',
    description: 'Securely accept payments, deposits, and tips directly through your website. Integrate with Stripe, PayPal, or other processors. Automatic payment reconciliation.'
  },
  {
    icon: '📊',
    title: 'Analytics & Reporting',
    description: 'Track revenue, client trends, staff performance, and business metrics. Real-time dashboards help you make data-driven decisions to scale your business.'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">Our Core Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything your service business needs to operate smoothly, scale efficiently, and delight your clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-10 rounded-xl text-left hover:shadow-2xl hover:-translate-y-2 transition border border-gray-200 group"
            >
              <div className="text-6xl mb-5 transform group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-4">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Why Choose ARKSecurity IT?</h3>
          <p className="text-lg mb-4">We don't just build websites. We build scalable, profitable business systems.</p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <li className="flex items-center justify-center gap-2">✓ <span>Beauty industry specialists</span></li>
            <li className="flex items-center justify-center gap-2">✓ <span>Cutting-edge technology</span></li>
            <li className="flex items-center justify-center gap-2">✓ <span>Custom-built for your needs</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
