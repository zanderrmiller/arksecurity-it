import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            business_name: formData.businessName,
            message: formData.message,
            status: 'new'
          }
        ]);

      if (error) {
        setErrorMessage('There was an error sending your message. Please try again.');
        console.error('Supabase error:', error);
      } else {
        setSuccessMessage('Thank you! We received your message and will respond within 24 hours.');
        setFormData({ name: '', email: '', phone: '', businessName: '', message: '' });
      }
    } catch (error) {
      setErrorMessage('There was an error sending your message. Please try again.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] text-white py-24">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Ready to Transform Your Business?</h2>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6 mb-10">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded border-2 border-[#667eea] bg-white bg-opacity-95 text-gray-800 focus:outline-none focus:border-cyan-400 focus:bg-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded border-2 border-[#667eea] bg-white bg-opacity-95 text-gray-800 focus:outline-none focus:border-cyan-400 focus:bg-white"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded border-2 border-[#667eea] bg-white bg-opacity-95 text-gray-800 focus:outline-none focus:border-cyan-400 focus:bg-white"
          />
          <input
            type="text"
            name="businessName"
            placeholder="Business Name"
            value={formData.businessName}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded border-2 border-[#667eea] bg-white bg-opacity-95 text-gray-800 focus:outline-none focus:border-cyan-400 focus:bg-white"
          />
          <textarea
            name="message"
            placeholder="Tell us about your business and needs..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 rounded border-2 border-[#667eea] bg-white bg-opacity-95 text-gray-800 focus:outline-none focus:border-cyan-400 focus:bg-white resize-none"
          />

          <div className="bg-blue-500 bg-opacity-20 border border-cyan-400 rounded-lg p-4 text-sm">
            <p className="text-gray-100">
              By submitting this form, you agree to our <a href="#privacy" className="text-cyan-300 hover:text-cyan-200 underline">Privacy Policy</a> and are opting into receiving emails and/or text messages regarding your inquiry.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-cyan-400 text-[#1a1a2e] px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-cyan-500 transition transform hover:-translate-y-1 shadow-lg mx-auto block disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {successMessage && (
          <div className="max-w-2xl mx-auto mb-6 p-4 bg-green-500 bg-opacity-20 border border-green-400 rounded text-green-200">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="max-w-2xl mx-auto mb-6 p-4 bg-red-500 bg-opacity-20 border border-red-400 rounded text-red-200">
            {errorMessage}
          </div>
        )}
        
        <p className="text-gray-400 mb-4">We'll respond within 24 hours</p>
      </div>
    </section>
  );
}
