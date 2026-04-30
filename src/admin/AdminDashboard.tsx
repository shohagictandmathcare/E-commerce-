import React from 'react';
import { Helmet } from 'react-helmet-async';
import { DollarSign, Package, ShoppingCart, TrendingUp } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <>
      <Helmet>
        <title>Admin Dashboard | TechStore</title>
      </Helmet>
      
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-dark">Dashboard Overview</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm font-medium">Total Revenue</span>
              <div className="p-2 bg-green-50 text-green-600 rounded-lg"><DollarSign size={20} /></div>
            </div>
            <span className="text-2xl font-bold text-dark">$12,450</span>
          </div>
          
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm font-medium">Total Orders</span>
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><ShoppingCart size={20} /></div>
            </div>
            <span className="text-2xl font-bold text-dark">145</span>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm font-medium">Products</span>
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Package size={20} /></div>
            </div>
            <span className="text-2xl font-bold text-dark">56</span>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-sm font-medium">Conversion</span>
              <div className="p-2 bg-orange-50 text-orange-600 rounded-lg"><TrendingUp size={20} /></div>
            </div>
            <span className="text-2xl font-bold text-dark">3.2%</span>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6 mt-6">
          <h2 className="text-lg font-bold text-dark mb-4">Recent Orders</h2>
          <div className="text-center py-8">
            <p className="text-gray-500 text-sm">Real-time orders will be displayed here once connected to Supabase.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
