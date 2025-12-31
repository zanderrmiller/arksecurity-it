import React from 'react';

export default function PrivacyPolicy() {
  return (
    <section id="privacy" className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-5">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-8 leading-relaxed">
            <strong>Last Updated:</strong> December 31, 2025
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            When you submit the contact form on our website, we collect the following information:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number (optional)</li>
            <li>Business name</li>
            <li>Message content</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We use the information you provide to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Respond to your inquiry</li>
            <li>Understand your business needs</li>
            <li>Provide relevant information about our services</li>
            <li>Contact you regarding potential projects</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">3. Data Storage & Security</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Your data is stored securely in our Supabase database with industry-standard encryption. We do not share your information with third parties without your consent.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">4. Data Retention</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We retain your contact information for as long as necessary to respond to your inquiry and follow up on potential projects. You can request deletion of your information at any time by contacting us.
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">5. Your Rights</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            You have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of future communications</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">6. Contact Us</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            If you have questions about this Privacy Policy or want to exercise any of your rights, please reach out to us at:
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            <strong>Email:</strong> <a href="mailto:info@arksecurityIT.com" className="text-[#667eea] hover:text-[#764ba2] underline">info@arksecurityIT.com</a>
          </p>

          <h2 className="text-2xl font-bold text-[#1a1a2e] mt-8 mb-4">7. Changes to This Policy</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We may update this Privacy Policy from time to time. The date at the top of this page indicates when it was last updated.
          </p>
        </div>

        <div className="mt-12 p-6 bg-blue-50 border-l-4 border-[#667eea] rounded">
          <p className="text-gray-700">
            <strong>Summary:</strong> We collect your information only to respond to your inquiry. We keep it secure, don't share it, and you can request deletion anytime.
          </p>
        </div>

        <div className="mt-8">
          <a href="#home" className="text-[#667eea] hover:text-[#764ba2] font-semibold">
            ← Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}
