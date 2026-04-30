import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Eye, CheckCircle2, Clock, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';

// ডামি অর্ডার ডাটা
const initialOrders =[
  { id: '#ORD-84592', customer: 'John Doe', date: '30 Apr, 2026', total: 1663.00, status: 'Pending' },
  { id: '#ORD-73821', customer: 'Jane Smith', date: '29 Apr, 2026', total: 349.00, status: 'Delivered' },
  { id: '#ORD-62910', customer: 'Robert Fox', date: '28 Apr, 2026', total: 1199.00, status: 'Cancelled' },
];

const ManageOrders = () => {
  const[orders, setOrders] = useState(initialOrders);

  // স্ট্যাটাস পরিবর্তনের ফাংশন
  const handleStatusChange = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
    toast.success(`Order ${orderId} marked as ${newStatus}`);
  };

  // স্ট্যাটাস অনুযায়ী ব্যাজ কালার
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Pending':
        return <span className="flex items-center gap-1 px-2.5 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full border border-orange-200"><Clock size={12}/> Pending</span>;
      case 'Delivered':
        return <span className="flex items-center gap-1 px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full border border-green-200"><CheckCircle2 size={12}/> Delivered</span>;
      case 'Cancelled':
        return <span className="flex items-center gap-1 px-2.5 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full border border-red-200"><XCircle size={12}/> Cancelled</span>;
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Manage Orders | Admin</title>
      </Helmet>

      <div className="space-y-6">
        {/* Header Section */}
        <div>
          <h1 className="text-2xl font-bold text-dark">Manage Orders</h1>
          <p className="text-sm text-gray-500">View and update customer orders</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
          <Search size={20} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search by Order ID or Customer Name..." 
            className="w-full bg-transparent border-none focus:outline-none text-sm md:text-base"
          />
        </div>

        {/* Orders List (Mobile Friendly Card View) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-gray-100 bg-gray-50 font-semibold text-gray-600 text-sm">
            <div className="col-span-3">Order ID & Date</div>
            <div className="col-span-3">Customer</div>
            <div className="col-span-2">Total Amount</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          <div className="divide-y divide-gray-100">
            {orders.map((order) => (
              <div key={order.id} className="p-4 flex flex-col md:grid md:grid-cols-12 gap-4 md:items-center hover:bg-gray-50 transition-colors">
                
                {/* Mobile Top Section: Order ID & Status Badge */}
                <div className="flex justify-between items-center md:hidden mb-2">
                  <span className="font-extrabold text-dark">{order.id}</span>
                  {getStatusBadge(order.status)}
                </div>

                {/* Order Date & ID (Desktop) */}
                <div className="col-span-3">
                  <span className="hidden md:block font-bold text-dark">{order.id}</span>
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <Clock size={14} className="md:hidden" /> {order.date}
                  </span>
                </div>

                {/* Customer Details */}
                <div className="col-span-3">
                  <span className="text-xs text-gray-400 md:hidden block mb-0.5">Customer</span>
                  <span className="font-semibold text-gray-700">{order.customer}</span>
                </div>

                {/* Total Amount */}
                <div className="col-span-2">
                  <span className="text-xs text-gray-400 md:hidden block mb-0.5">Total Amount</span>
                  <span className="font-bold text-primary">${order.total.toFixed(2)}</span>
                </div>

                {/* Status Selection (Desktop & Mobile) */}
                <div className="col-span-2 hidden md:block">
                  {getStatusBadge(order.status)}
                </div>

                {/* Actions (View + Update Status) */}
                <div className="col-span-2 flex items-center gap-2 mt-3 md:mt-0 pt-3 md:pt-0 border-t border-gray-100 md:border-0 justify-end">
                  
                  {/* Status Dropdown */}
                  <select 
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className="flex-1 md:flex-none bg-gray-50 border border-gray-200 text-gray-700 text-sm rounded-lg focus:ring-primary focus:border-primary block p-2"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>

                  <button className="p-2 bg-blue-50 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors" title="View Details">
                    <Eye size={20} />
                  </button>
                </div>