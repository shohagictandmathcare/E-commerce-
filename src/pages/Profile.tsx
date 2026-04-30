import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { User, MapPin, CreditCard, Settings, LogOut, ChevronRight, Package } from 'lucide-react';
import toast from 'react-hot-toast';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // পরবর্তীতে এখানে Supabase Auth Logout যুক্ত হবে
    toast.success('Logged out successfully!');
    navigate('/login');
  };

  return (
    <>
      <Helmet>
        <title>My Profile | TechStore</title>
      </Helmet>

      <div className="px-4 py-4 md:py-8 max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-dark mb-6">My Account</h1>

        {/* Profile Card */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-5 mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-theme p-1">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
              <User size={32} className="text-primary" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-dark">John Doe</h2>
            <p className="text-sm text-gray-500 mb-1">john.doe@example.com</p>
            <span className="inline-block px-2 py-0.5 bg-blue-50 text-primary text-xs font-bold rounded">Premium Member</span>
          </div>
        </div>

        {/* Menu Options */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <Link to="/orders" className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 text-primary rounded-lg"><Package size={20} /></div>
              <span className="font-semibold text-dark">My Orders</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </Link>
          
          <Link to="/profile" className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><MapPin size={20} /></div>
              <span className="font-semibold text-dark">Shipping Addresses</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </Link>

          <Link to="/profile" className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-50 text-green-600 rounded-lg"><CreditCard size={20} /></div>
              <span className="font-semibold text-dark">Payment Methods</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </Link>

          <Link to="/profile" className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gray-100 text-gray-600 rounded-lg"><Settings size={20} /></div>
              <span className="font-semibold text-dark">Account Settings</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </Link>
        </div>

        {/* Logout Button */}
        <button 
          onClick={handleLogout}
          className="w-full bg-white text-red-500 font-bold py-4 rounded-2xl shadow-sm border border-red-100 hover:bg-red-50 hover:border-red-200 transition-all flex items-center justify-center gap-2"
        >
          <LogOut size={20} /> Logout
        </button>
      </div>
    </>
  );
};

export default Profile;