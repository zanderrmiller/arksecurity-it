import React, { useState, useEffect } from 'react';

export default function AdminDashboard({ onLogout, adminPassword }) {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('new'); // 'new', 'completed', 'all'
  const API_BASE = import.meta.env.VITE_API_URL || '/api';

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE}/inquiries`, {
        method: 'GET',
        headers: {
          'x-admin-password': adminPassword
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch inquiries');
      }

      const data = await response.json();
      setInquiries(data || []);
    } catch (error) {
      console.error('Error fetching inquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'new' ? 'completed' : 'new';

    try {
      const response = await fetch(`${API_BASE}/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword
        },
        body: JSON.stringify({ id, status: newStatus })
      });

      if (!response.ok) {
        throw new Error('Failed to update status');
      }

      const updatedInquiry = await response.json();
      setInquiries(
        inquiries.map((inquiry) =>
          inquiry.id === id ? updatedInquiry : inquiry
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const deleteInquiry = async (id) => {
    if (!window.confirm('Are you sure you want to delete this inquiry? This cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/inquiries`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword
        },
        body: JSON.stringify({ id })
      });

      if (!response.ok) {
        throw new Error('Failed to delete inquiry');
      }

      setInquiries(inquiries.filter((inquiry) => inquiry.id !== id));
    } catch (error) {
      console.error('Error deleting inquiry:', error);
      alert('Failed to delete inquiry. Please try again.');
    }
  };

  const filteredInquiries = inquiries.filter((inquiry) => {
    if (filter === 'all') return true;
    return inquiry.status === filter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
            <p className="text-gray-400">Manage client inquiries</p>
          </div>
          <button
            onClick={onLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Logout
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setFilter('new')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              filter === 'new'
                ? 'bg-[#667eea] text-white'
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
            }`}
          >
            New ({inquiries.filter((i) => i.status === 'new').length})
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              filter === 'completed'
                ? 'bg-green-600 text-white'
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
            }`}
          >
            Completed ({inquiries.filter((i) => i.status === 'completed').length})
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              filter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
            }`}
          >
            All ({inquiries.length})
          </button>
        </div>

        {/* Inquiries Grid */}
        {loading ? (
          <div className="text-center text-gray-400 py-12">
            <p className="text-lg">Loading inquiries...</p>
          </div>
        ) : filteredInquiries.length === 0 ? (
          <div className="text-center text-gray-400 py-12">
            <p className="text-lg">No inquiries to display</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className={`rounded-lg p-6 transition ${
                  inquiry.status === 'completed'
                    ? 'bg-green-900 bg-opacity-30 border border-green-600'
                    : 'bg-gray-800 bg-opacity-50 border border-gray-700'
                }`}
              >
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{inquiry.name}</h3>
                    <p className="text-sm text-gray-400">{inquiry.business_name}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      inquiry.status === 'completed'
                        ? 'bg-green-600 text-white'
                        : 'bg-yellow-600 text-white'
                    }`}
                  >
                    {inquiry.status === 'completed' ? '✓ Completed' : 'New'}
                  </span>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-4 pb-4 border-b border-gray-700">
                  <p className="text-sm text-gray-300">
                    <strong>Email:</strong>{' '}
                    <a
                      href={`mailto:${inquiry.email}`}
                      className="text-cyan-400 hover:text-cyan-300"
                    >
                      {inquiry.email}
                    </a>
                  </p>
                  {inquiry.phone && (
                    <p className="text-sm text-gray-300">
                      <strong>Phone:</strong>{' '}
                      <a
                        href={`tel:${inquiry.phone}`}
                        className="text-cyan-400 hover:text-cyan-300"
                      >
                        {inquiry.phone}
                      </a>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Message:</p>
                  <p className="text-sm text-gray-300 bg-gray-900 bg-opacity-50 p-3 rounded max-h-32 overflow-y-auto">
                    {inquiry.message}
                  </p>
                </div>

                {/* Date */}
                <p className="text-xs text-gray-500 mb-4">
                  {new Date(inquiry.created_at).toLocaleString()}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => toggleStatus(inquiry.id, inquiry.status)}
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold transition ${
                      inquiry.status === 'completed'
                        ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}
                  >
                    {inquiry.status === 'completed' ? '↩️ Mark as New' : '✓ Mark Complete'}
                  </button>
                  <button
                    onClick={() => deleteInquiry(inquiry.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition"
                    title="Delete this inquiry"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
