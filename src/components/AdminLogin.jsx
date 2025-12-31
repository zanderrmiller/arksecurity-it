import React, { useState } from 'react';

export default function AdminLogin({ onLoginSuccess }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'Z@nder3#';

    if (password === adminPassword) {
      // Store session and password in localStorage
      localStorage.setItem('adminSession', 'true');
      localStorage.setItem('adminPassword', password);
      setError('');
      onLoginSuccess();
    } else {
      setError('Invalid password. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1a1a2e] to-[#16213e] flex items-center justify-center px-5">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-[#1a1a2e] mb-2 text-center">Admin Portal</h1>
          <p className="text-gray-600 text-center mb-8">ARKSecurity IT</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#1a1a2e] mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#667eea]"
                autoFocus
              />
            </div>

            {error && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white py-3 rounded-lg font-bold uppercase tracking-widest hover:shadow-lg transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            Secure admin area. Password required.
          </p>
        </div>
      </div>
    </div>
  );
}
