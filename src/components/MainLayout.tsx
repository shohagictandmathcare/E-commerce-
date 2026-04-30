import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, ShoppingCart, Package, User, Search } from 'lucide-react';

const MainLayout = () => {
  const location = useLocation();

  // Navigation Items
  const navItems =[
    { name: 'Home', path: '/', icon: Home },
    { name: 'Cart', path: '/cart', icon: ShoppingCart },
    { name: 'Orders', path: '/orders', icon: Package },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-light pb-16 md:pb-0">
      {/* Sticky Top Navbar / Search Bar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 font-extrabold text-xl md:text-2xl tracking-tight text-primary-dark">
            Tech<span className="text-secondary text-gradient">Store</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-50 border border-gray-200 text-sm md:text-base rounded-full py-2.5 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-primary rounded-full hover:bg-blue-50 transition-colors">
              <Search size={20} />
            </button>
          </div>

          {/* Desktop Navigation (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex flex-col items-center gap-1 transition-colors ${
                    isActive ? 'text-primary' : 'text-gray-500 hover:text-primary'
                  }`}
                >
                  <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                  <span className="text-xs font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      {/* Main Content Area (এখানে অন্যান্য পেজগুলো লোড হবে) */}
      <main className="max-w-7xl mx-auto min-h-[calc(100vh-4rem)]">
        <Outlet />
      </main>

      {/* Fixed Bottom Navigation (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-all ${
                  isActive ? 'text-primary' : 'text-gray-400 hover:text-primary'
                }`}
              >
                <div className={`${isActive ? 'bg-blue-50 p-1.5 rounded-full' : 'p-1.5'}`}>
                  <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={`text-[10px] font-medium ${isActive ? 'text-primary' : 'text-gray-500'}`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default MainLayout;
