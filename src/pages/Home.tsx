import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Smartphone, Laptop, Headphones, Watch, ChevronRight, ShoppingCart, Zap } from 'lucide-react';

// ডামি ক্যাটাগরি ডাটা
const categories =[
  { id: 1, name: 'Phones', icon: Smartphone, color: 'bg-blue-100 text-blue-600' },
  { id: 2, name: 'Laptops', icon: Laptop, color: 'bg-purple-100 text-purple-600' },
  { id: 3, name: 'Audio', icon: Headphones, color: 'bg-green-100 text-green-600' },
  { id: 4, name: 'Gadgets', icon: Watch, color: 'bg-orange-100 text-orange-600' },
];

// ডামি প্রোডাক্ট ডাটা
const trendingProducts =[
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    price: 1299,
    originalPrice: 1399,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=500',
    badge: 'Hot',
  },
  {
    id: '2',
    name: 'MacBook Air M2',
    price: 1199,
    originalPrice: 1299,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=500',
    badge: '-$100',
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5',
    price: 349,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=500',
    badge: 'Sale',
  },
  {
    id: '4',
    name: 'Apple Watch Ultra',
    price: 799,
    originalPrice: 849,
    image: 'https://images.unsplash.com/photo-1663314811776-64673f820623?auto=format&fit=crop&q=80&w=500',
    badge: 'New',
  }
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>TechStore | Premium Electronics, Gadgets & Accessories</title>
        <meta name="description" content="Buy the latest electronics, smartphones, laptops, and gadgets at the best prices on TechStore." />
        <meta name="keywords" content="electronics, tech store, buy smartphones, laptops, gadgets, online shopping" />
      </Helmet>

      <div className="px-4 py-4 md:py-8 space-y-8">
        
        {/* Hero Banner */}
        <section className="relative rounded-2xl overflow-hidden bg-gradient-theme text-white shadow-lg">
          <div className="px-6 py-10 md:py-16 md:px-12 relative z-10 flex flex-col justify-center h-full">
            <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold tracking-wider mb-4 w-max">
              MEGA SALE
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-3 leading-tight">
              Next-Gen Tech <br /> Up to 50% Off
            </h1>
            <p className="text-blue-100 text-sm md:text-lg mb-6 max-w-md">
              Upgrade your lifestyle with our premium collection of gadgets and devices.
            </p>
            <Link 
              to="/products" 
              className="bg-white text-primary-dark font-bold py-3 px-6 rounded-full w-max shadow-md hover:bg-gray-50 transition-all flex items-center gap-2"
            >
              Shop Now <ChevronRight size={18} />
            </Link>
          </div>
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-40 h-40 rounded-full bg-secondary-light opacity-20 blur-2xl"></div>
        </section>

        {/* Categories Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-2xl font-bold text-dark">Categories</h2>
            <Link to="/products" className="text-primary text-sm font-medium hover:underline flex items-center">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-3 md:gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link key={category.id} to={`/products?category=${category.name.toLowerCase()}`} className="flex flex-col items-center gap-2 group">
                  <div className={`w-14 h-14 md:w-20 md:h-20 rounded-full ${category.color} flex items-center justify-center shadow-sm group-hover:shadow-md transition-all`}>
                    <Icon size={28} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-xs md:text-sm font-medium text-gray-700">{category.name}</span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Trending Products Section */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg md:text-2xl font-bold text-dark flex items-center gap-2">
              <Zap size={20} className="text-secondary" /> Trending Deals
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trendingProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all flex flex-col">
                <div className="relative aspect-square overflow-hidden bg-gray-50">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover p-2 hover:scale-105 transition-transform duration-300" />
                  <span className="absolute top-2 left-2 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded">
                    {product.badge}
                  </span>
                </div>
                <div className="p-3 md:p-4 flex flex-col flex-1">
                  <Link to={`/product/${product.id}`} className="text-sm md:text-base font-semibold text-dark line-clamp-2 hover:text-primary transition-colors">
                    {product.name}
                  </Link>
                  <div className="mt-auto pt-2 flex items-center justify-between">
                    <div>
                      <span className="text-primary font-bold text-lg">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through ml-1">${product.originalPrice}</span>
                      )}
                    </div>
                    <button className="bg-blue-50 text-primary p-2 rounded-full hover:bg-primary hover:text-white transition-colors">
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;