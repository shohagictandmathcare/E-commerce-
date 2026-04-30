import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Filter, ShoppingCart, Star } from 'lucide-react';

// ডামি প্রোডাক্ট ডাটা (পরবর্তীতে Supabase থেকে আসবে)
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
  const [activeCategory, setActiveCategory] = useState('All');

  // ক্যাটাগরি অনুযায়ী ফিল্টার
  const filteredProducts = activeCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>All Products | TechStore</title>
      </Helmet>
      
      <div className="px-4 py-4 md:py-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-dark">Our Products</h1>
          
          {/* Mobile Filter Button */}
          <button className="md:hidden flex items-center gap-2 text-sm font-medium bg-white px-4 py-2 rounded-lg border border-gray-200 w-max shadow-sm">
            <Filter size={16} /> Filter By
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Desktop Sidebar Filter */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold text-lg mb-4 border-b pb-2">Categories</h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button