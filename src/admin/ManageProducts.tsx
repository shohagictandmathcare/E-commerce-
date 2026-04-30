import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Plus, Edit, Trash2, Search, Image as ImageIcon } from 'lucide-react';

// ডামি প্রোডাক্ট ডাটা
const adminProducts =[
  { id: '1', name: 'iPhone 15 Pro Max', price: 1299, stock: 15, category: 'Phones', image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&q=80&w=100' },
  { id: '2', name: 'MacBook Air M2', price: 1199, stock: 8, category: 'Laptops', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=100' },
  { id: '3', name: 'Sony WH-1000XM5', price: 349, stock: 24, category: 'Audio', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=100' },
];

const ManageProducts = () => {
  return (
    <>
      <Helmet>
        <title>Manage Products | Admin</title>
      </Helmet>

      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-dark">Manage Products</h1>
            <p className="text-sm text-gray-500">Add, edit or delete your products</p>
          </div>
          <button className="bg-primary text-white font-bold py-2.5 px-5 rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow-sm">
            <Plus size={20} /> Add New Product
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
          <Search size={20} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search products by name..." 
            className="w-full bg-transparent border-none focus:outline-none text-sm md:text-base"
          />
        </div>

        {/* Products List (Mobile Friendly Card View) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-gray-100 bg-gray-50 font-semibold text-gray-600 text-sm">
            <div className="col-span-5">Product Info</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-1">Stock</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          <div className="divide-y divide-gray-100">
            {adminProducts.map((product) => (
              <div key={product.id} className="p-4 flex flex-col md:grid md:grid-cols-12 gap-4 md:items-center hover:bg-gray-50 transition-colors">
                
                {/* Mobile: Top Section (Image + Title) */}
                <div className="col-span-5 flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-lg border border-gray-200 p-1 flex-shrink-0">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                    ) : (
                      <ImageIcon className="w-full h-full text-gray-300 p-2" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-sm md:text-base line-clamp-1">{product.name}</h3>
                    <span className="md:hidden text-xs text-gray-500 mt-1 block">
                      {product.category} • {product.stock} in stock
                    </span>
                  </div>
                </div>

                {/* Desktop Data (Hidden on Mobile) */}
                <div className="hidden md:block col-span-2 text-sm text-gray-600">
                  <span className="px-2.5 py-1 bg-gray-100 rounded-full text-xs font-medium">{product.category}</span>
                </div>
                
                {/* Price Section */}
                <div className="col-span-2 font-bold text-dark text-lg md:text-base">
                  ${product.price}
                </div>

                <div className="hidden md:block col-span-1">
                  <span className={`text-sm font-bold ${product.stock > 10 ? 'text-green-600' : 'text-red-500'}`}>
                    {product.stock}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="col-span-2 flex items-center justify-end gap-2 mt-2 md:mt-0 border-t border-gray-100 md:border-0 pt-3 md:pt-0">
                  <button className="flex-1 md:flex-none p-2 bg-blue-50 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors flex justify-center items-center gap-1">
                    <Edit size={18} /> <span className="md:hidden text-sm font-medium">Edit</span>
                  </button>
                  <button className="flex-1 md:flex-none p-2 bg-red-50 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-colors flex justify-center items-center gap-1">
                    <Trash2 size={18} /> <span className="md:hidden text-sm font-medium">Delete</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageProducts;