import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Filter, ShoppingCart, Star } from 'lucide-react';

const allProducts =[
  { id: '1', name: 'iPhone 15 Pro Max', price: 1299, image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=500', category: 'Phones' },
  { id: '2', name: 'MacBook Air M2', price: 1199, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=500', category: 'Laptops' },
  { id: '3', name: 'Sony WH-1000XM5', price: 349, image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=500', category: 'Audio' },
  { id: '4', name: 'Apple Watch Ultra', price: 799, image: 'https://images.unsplash.com/photo-1663314811776-64673f820623?auto=format&fit=crop&q=80&w=500', category: 'Gadgets' },
  { id: '5', name: 'AirPods Pro 2', price: 249, image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&q=80&w=500', category: 'Audio' },
  { id: '6', name: 'Samsung Galaxy S24 Ultra', price: 1199, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=500', category: 'Phones' },
];

const categories =['All', 'Phones', 'Laptops', 'Audio', 'Gadgets'];

const Products = () => {
  const[activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>All Products | TechStore</title>
      </Helmet>
      
      <div className="px-4 py-4 md:py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-dark">Our Products</h1>
          <button className="md:hidden flex items-center gap-2 text-sm font-medium bg-white px-4 py-2 rounded-lg border border-gray-200 w-max shadow-sm">
            <Filter size={16} /> Filter By
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold text-lg mb-4 border-b pb-2">Categories</h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button 
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
                        activeCategory === cat ? 'bg-blue-50 text-primary' : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="flex-1">
            <div className="md:hidden flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-2">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat ? 'bg-primary text-white' : 'bg-white text-gray-600 border border-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all flex flex-col">
                  <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover p-3 hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-3 md:p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-1 text-orange-400 mb-1">
                      <Star size={12} fill="currentColor" />
                      <span className="text-[10px] md:text-xs text-gray-500 font-medium">4.8 (120)</span>
                    </div>
                    <Link to={`/product/${product.id}`} className="text-sm md:text-base font-semibold text-dark line-clamp-2 hover:text-primary transition-colors">
                      {product.name}
                    </Link>
                    <div className="mt-auto pt-3 flex items-center justify-between">
                      <span className="text-primary font-bold text-lg">${product.price}</span>
                      <button className="bg-dark text-white p-2 rounded-full hover:bg-primary transition-colors shadow-sm">
                        <ShoppingCart size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;