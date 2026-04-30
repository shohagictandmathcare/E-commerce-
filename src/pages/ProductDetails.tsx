import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronLeft, Star, Minus, Plus, ShoppingCart, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import toast from 'react-hot-toast';

// ডামি প্রোডাক্ট ডাটা
const dummyProduct = {
  id: '1',
  name: 'iPhone 15 Pro Max - 256GB Natural Titanium',
  price: 1299,
  originalPrice: 1399,
  description: 'The iPhone 15 Pro Max features a strong and lightweight aerospace-grade titanium design. It comes with the A17 Pro chip for next-level performance and a 5x Telephoto camera.',
  images:[
    'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=800',
  ],
  rating: 4.9,
  reviews: 128,
  stock: 15,
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // পরবর্তীতে এখানে Zustand স্টোর যুক্ত হবে
    toast.success('Added to cart successfully!');
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  return (
    <>
      <Helmet>
        <title>{dummyProduct.name} | TechStore</title>
        <meta name="description" content={dummyProduct.description} />
      </Helmet>

      <div className="bg-white min-h-screen pb-24 md:pb-8">
        {/* Mobile Header / Back Button */}
        <div className="md:hidden flex items-center p-4 sticky top-0 bg-white/80 backdrop-blur-md z-40 border-b border-gray-100">
          <button onClick={() => navigate(-1)} className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
            <ChevronLeft size={24} className="text-dark" />
          </button>
          <span className="ml-4 font-semibold text-dark truncate">Details</span>
        </div>

        <div className="max-w-6xl mx-auto md:p-6 md:mt-6">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            
            {/* Product Image Section */}
            <div className="w-full md:w-1/2">
              <div className="bg-gray-50 md:rounded-2xl p-6 md:p-10 flex items-center justify-center aspect-square">
                <img 
                  src={dummyProduct.images[0]} 
                  alt={dummyProduct.name} 
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Product Info Section */}
            <div className="w-full md:w-1/2 px-4 md:px-0 flex flex-col">
              
              {/* Badge & Title */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-3">
                  In Stock ({dummyProduct.stock})
                </span>
                <h1 className="text-2xl md:text-4xl font-extrabold text-dark leading-tight">
                  {dummyProduct.name}
                </h1>
              </div>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(dummyProduct.rating) ? "currentColor" : "none"} />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-600">
                  {dummyProduct.rating} ({dummyProduct.reviews} Reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-end gap-3 mb-6 pb-6 border-b border-gray-100">
                <span className="text-3xl md:text-4xl font-black text-primary">
                  ${dummyProduct.price}
                </span>
                {dummyProduct.originalPrice && (
                  <span className="text-lg text-gray-400 line-through mb-1">
                    ${dummyProduct.originalPrice}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-bold text-dark mb-2">Description</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {dummyProduct.description}
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <ShieldCheck size={24} className="text-primary" />
                  <span className="text-xs font-semibold text-gray-700">1 Year<br/>Warranty</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Truck size={24} className="text-primary" />
                  <span className="text-xs font-semibold text-gray-700">Free & Fast<br/>Delivery</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <RotateCcw size={24} className="text-primary" />
                  <span className="text-xs font-semibold text-gray-700">7 Days<br/>Return</span>
                </div>
              </div>

              {/* Desktop Actions (Hidden on Mobile) */}
              <div className="hidden md:flex items-center gap-6 mt-auto">
                <div className="flex items-center border border-gray-200 rounded-full bg-white">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:text-primary transition-colors">
                    <Minus size={20} />
                  </button>
                  <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                  <button onClick={() => setQuantity(Math.min(dummyProduct.stock, quantity + 1))} className="p-3 hover:text-primary transition-colors">
                    <Plus size={20} />
                  </button>
                </div>
                <button onClick={handleAddToCart} className="flex-1 bg-blue-50 text-primary font-bold py-3.5 px-6 rounded-full hover:bg-blue-100 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart size={20} /> Add to Cart
                </button>
                <button onClick={handleBuyNow} className="flex-1 bg-primary text-white font-bold py-3.5 px-6 rounded-full hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg">
                  Buy Now
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Fixed Bottom Actions */}
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-3 flex gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50">
          <button onClick={handleAddToCart} className="flex-1 bg-blue-50 text-primary font-bold py-3 rounded-xl flex items-center justify-center gap-2">
            <ShoppingCart size={20} /> Add
          </button>
          <button onClick={handleBuyNow} className="flex-1 bg-gradient-theme text-white font-bold py-3 rounded-xl shadow-md">
            Buy Now
          </button>
        </div>

      </div>
    </>
  );
};

export default ProductDetails;