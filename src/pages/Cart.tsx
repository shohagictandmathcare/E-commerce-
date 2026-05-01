import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';

const initialCart =[
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=200',
    quantity: 1
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    price: 349,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=200',
    quantity: 1
  }
];

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(initialCart);

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 15 : 0;
  const total = subtotal + shipping;

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item)
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <>
      <Helmet>
        <title>Shopping Cart | TechStore</title>
      </Helmet>

      <div className="px-4 py-4 md:py-8 max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-dark mb-6 flex items-center gap-2">
          <ShoppingBag className="text-primary" /> Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag size={40} className="text-gray-300" />
            </div>
            <h2 className="text-xl font-bold text-dark mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/products" className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-primary-dark transition-colors">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
            <div className="flex-1 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4 items-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-xl p-2 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between h-full py-1">
                    <div className="flex justify-between items-start gap-2">
                      <h3 className="font-semibold text-sm md:text-base text-dark line-clamp-2">{item.name}</h3>
                      <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 p-1">
                        <Trash2 size={18} />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto pt-3">
                      <span className="font-bold text-primary text-lg">${item.price}</span>
                      
                      <div className="flex items-center bg-gray-50 rounded-full border border-gray-200">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1.5 md:p-2 text-gray-500 hover:text-primary transition-colors">
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1.5 md:p-2 text-gray-500 hover:text-primary transition-colors">
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
                <h3 className="text-lg font-bold text-dark mb-4 border-b pb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-dark">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="font-medium text-dark">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-dashed pt-3 mt-3 flex justify-between items-center">
                    <span className="font-bold text-dark text-base">Total</span>
                    <span className="font-black text-primary text-xl">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-gradient-theme text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Proceed to Checkout <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;