import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import { UserIcon, HeartIcon, CogIcon } from '@heroicons/react/24/outline';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');

  if (!user) {
    return <div>Loading...</div>;
  }

  const tabs = [
    { id: 'profile', name: 'Profile', icon: UserIcon },
    { id: 'wishlist', name: 'Wishlist', icon: HeartIcon },
    { id: 'settings', name: 'Settings', icon: CogIcon },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-sm p-6 mb-8"
        >
          <div className="flex items-center space-x-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="h-20 w-20 rounded-full object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500 mt-1">Member since 2025</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <ul className="space-y-2">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-indigo-100 text-indigo-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <tab.icon className="h-5 w-5" />
                      <span>{tab.name}</span>
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={logout}
                    className="w-full flex items-center space-x-3 px-3 py-2 rounded-md text-left text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Information</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue={user.name}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          defaultValue={user.email}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+62 812-3456-7890"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Enter your address"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">My Wishlist</h2>
                  <p className="text-gray-600">
                    View and manage your saved products from the{' '}
                    <a href="/wishlist" className="text-indigo-600 hover:text-indigo-800">
                      Wishlist page
                    </a>
                  </p>
                </div>
              )}

              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Notifications</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="text-indigo-600 focus:ring-indigo-500" />
                          <span className="ml-2 text-sm text-gray-700">Email notifications for new products</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="text-indigo-600 focus:ring-indigo-500" />
                          <span className="ml-2 text-sm text-gray-700">Price drop alerts for wishlist items</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="text-indigo-600 focus:ring-indigo-500" />
                          <span className="ml-2 text-sm text-gray-700">Weekly newsletter</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-3">Privacy</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" defaultChecked className="text-indigo-600 focus:ring-indigo-500" />
                          <span className="ml-2 text-sm text-gray-700">Make my wishlist public</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="text-indigo-600 focus:ring-indigo-500" />
                          <span className="ml-2 text-sm text-gray-700">Allow personalized recommendations</span>
                        </label>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <h3 className="font-medium text-gray-900 mb-3">Change Password</h3>
                      <div className="space-y-4 max-w-md">
                        <input
                          type="password"
                          placeholder="Current password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <input
                          type="password"
                          placeholder="New password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <input
                          type="password"
                          placeholder="Confirm new password"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                          Update Password
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
