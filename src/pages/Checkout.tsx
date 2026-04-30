import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { MapPin, Truck, ShieldCheck, CheckCircle2 } from 'lucide-react';
import toast from 'react-hot-toast';

// ডামি কার্ট ডাটা সামারির জন্য
const orderSummary = {
  items: 2,
  subtotal: 1648.00,
  shipping: 15.00,
  total: 1663.00
};

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // পরবর্তীতে এখানে Supabase এবং Telegram Bot এর লজিক বসবে
    toast.success('Order placed successfully! 🎉');
    navigate('/orders');
  };

  return (
    <>
      <Helmet>
        <title>Checkout | TechStore</title>
      </Helmet>

      <div className="px-4 py-4 md:py-8 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-dark mb-6">Checkout</h1>

        <form onSubmit={handlePlaceOrder} className="flex flex-col lg:flex-row gap-6 md:gap-10">
          
          {/* Left Column: Form & Payment */}
          <div className="flex-1 space-y-6">
            
            {/* Shipping Information */}
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-dark mb-4 flex items-center gap-2 border-b pb-3">
                <MapPin className="text-primary" size={20} /> Shipping Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input required type="tel" placeholder="+880 1712-345678" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address (Optional)</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Detailed Address *</label>
                  <textarea required rows={3} placeholder="House, Road, Area..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                  <input required type="text" placeholder="Dhaka" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                  <input type="text" placeholder="1200" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-dark mb-4 flex items-center gap-2 border-b pb-3">
                <ShieldCheck className="text-primary" size={20} /> Payment Method
              </h2>
              
              <div className="space-y-3">
                <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-primary bg-blue-50' : 'border-gray-200 hover:border-blue-200'}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cod' ? 'border-primary' : 'border-gray-400'}`}>
                      {paymentMethod === 'cod' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                    </div>
                    <div>
                      <span className="font-semibold text-dark block">Cash on Delivery</span>
                      <span className="text-xs text-gray-500">Pay when you receive the product</span>
                    </div>
                  </div>
                  <Truck size={24} className={paymentMethod === 'cod' ? 'text-primary' : 'text-gray-400'} />
                </label>

                {/* Future Payment Gateway Option */}
                <label className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-not-allowed opacity-60 bg-gray-50 border-gray-200`}>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                    <div>
                      <span className="font-semibold text-dark block">Online Payment</span>
                      <span className="text-xs text-gray-500">Card / Mobile Banking (Coming Soon)</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-[350px] flex-shrink-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="text-lg font-bold text-dark mb-4 border-b pb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Items ({orderSummary.items})</span>
                  <span className="font-medium text-dark">${orderSummary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping Fee</span>
                  <span className="font-medium text-dark">${orderSummary.shipping.toFixed(2)}</span>
                </div>
                <div className="border-t border-dashed pt-3 mt-3 flex justify-between items-center">
                  <span className="font-bold text-dark text-base">Total Payment</span>
                  <span className="font-black text-primary text-xl">${orderSummary.total.toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded-lg flex items-start gap-2 mb-6">
                <CheckCircle2 size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-green-700 leading-relaxed">
                  Your personal data will be used to process your order, support your experience throughout this website.
                </p>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-theme text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all text-lg"
              >
                Place Order
              </button>
            </div>
          </div>

        </form>
      </div>
    </>
  );
};

export default Checkout;