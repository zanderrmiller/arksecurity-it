import React, { useState } from 'react';

export default function AdminLogin({ onLoginSuccess }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const API_BASE = import.meta.env.VITE_API_URL || '/api';
      
      const response = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include', // Include cookies
        body: JSON.stringify({ password })
      });

      if (!response.ok) {
        const data = await response.json();
        if (response.status === 429) {
          setError(data.error);
        } else {
          setError(`Invalid password. ${data.attemptsRemaining} attempts remaining.`);
        }
        setPassword('');
        setIsLoading(false);
        return;
      }

      // Cookie is automatically set by server, just redirect
      onLoginSuccess();
    } catch (err) {
      setError('Login failed. Please try again.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
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
