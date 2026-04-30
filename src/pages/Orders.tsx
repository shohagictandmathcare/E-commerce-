import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Package, Clock, CheckCircle2, XCircle, ChevronRight, ShoppingBag } from 'lucide-react';

// ডামি অর্ডার ডাটা (পরবর্তীতে Supabase ডাটাবেস থেকে আসবে)
const dummyOrders =[
  {
    id: '#ORD-84592',
    date: '30 Apr, 2026',
    status: 'Pending',
    items: 2,
    total: 1663.00,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '#ORD-73821',
    date: '25 Apr, 2026',
    status: 'Delivered',
    items: 1,
    total: 349.00,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '#ORD-62910',
    date: '20 Apr, 2026',
    status: 'Cancelled',
    items: 1,
    total: 1199.00,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=100'
  }
];

const Orders = () => {

  // স্ট্যাটাস অনুযায়ী আইকন এবং কালার নির্ধারণ করার ফাংশন
  const getStatusUI = (status: string) => {
    switch (status) {
      case 'Pending':
        return { icon: <Clock size={16} />, color: 'bg-orange-100 text-orange-600 border-orange-200' };
      case 'Delivered':
        return { icon: <CheckCircle2 size={16} />, color: 'bg-green-100 text-green-600 border-green-200' };
      case 'Cancelled':
        return { icon: <XCircle size={16} />, color: 'bg-red-100 text-red-600 border-red-200' };
      default:
        return { icon: <Package size={16} />, color: 'bg-gray-100 text-gray-600 border-gray-200' };
    }
  };

  return (
    <>
      <Helmet>
        <title>My Orders | TechStore</title>
      </Helmet>

      <div className="px-4 py-4 md:py-8 max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-dark mb-6 flex items-center gap-2">
          <Package className="text-primary" /> My Orders
        </h1>

        {dummyOrders.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag size={40} className="text-gray-300" />
            </div>
            <h2 className="text-xl font-bold text-dark mb-2">No orders yet</h2>
            <p className="text-gray-500 mb-6">You haven't placed any orders yet.</p>
            <Link to="/products" className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-primary-dark transition-colors">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {dummyOrders.map((order) => {
              const statusUI = getStatusUI(order.status);
              return (
                <div key={order.id} className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center border-b border-gray-100 pb-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-bold text-dark text-lg">{order.id}</span>
                        <span className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold border ${statusUI.color}`}>
                          {statusUI.icon} {order.status}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">Placed on {order.date}</span>
                    </div>
                    <div className="text-left md:text-right">
                      <span className="text-sm text-gray-500 block mb-0.5">Total Amount</span>
                      <span className="font-black text-primary text-xl">${order.total.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-50 rounded-lg p-1.5 border border-gray-100">
                        <img src={order.image} alt="Product" className="w-full h-full object-contain mix-blend-multiply" />
                      </div>
                      <div>
                        <p className="font-semibold text-dark text-sm md:text-base">Order contains {order.items} item(s)</p>
                        <p className="text-xs text-gray-500">Includes delivery details & tracking</p>
                      </div>
                    </div>
                    
                    <button className="flex items-center gap-1 text-primary text-sm font-bold bg-blue-50 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors">
                      View Details <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Orders;