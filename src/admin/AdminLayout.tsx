import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingCart, FileText, LogOut } from 'lucide-react';

const AdminLayout = () => {
  const location = useLocation();

  const adminLinks =[
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Products', path: '/admin/products', icon: Package },
    { name: 'Orders', path: '/admin/orders', icon: ShoppingCart },
    { name: 'Pages', path: '/admin/pages', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Mobile Top Header */}
      <div className="md:hidden bg-dark text-white p-4 flex justify-between items-center shadow-md z-40">
        <span className="font-extrabold text-lg text-primary-light">Admin Panel</span>
        <button className="text-red-400 p-1 hover:bg-gray-800 rounded">
          <LogOut size={20} />
        </button>
      </div>

      {/* Sidebar (Desktop) & Bottom Nav (Mobile) */}
      <aside className="bg-dark text-white w-full md:w-64 flex-shrink-0 md:min-h-screen fixed bottom-0 md:relative z-50 md:z-auto border-t md:border-t-0 border-gray-700 shadow-[0_-4px_10px_rgba(0,0,0,0.2)] md:shadow-none">
        <div className="hidden md:flex p-6 border-b border-gray-700">
          <span className="font-extrabold text-2xl tracking-wider text-primary-light">TechStore</span>
        </div>
        
        <nav className="flex md:flex-col justify-around md:justify-start p-2 md:p-4 gap-2 h-16 md:h-auto">
          {adminLinks.map((link) => {
            const Icon = link.icon;
            // Exact match for dashboard, partial match for others
            const isActive = link.path === '/admin' 
              ? location.pathname === '/admin' 
              : location.pathname.startsWith(link.path);

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 p-2 md:p-3 rounded-lg transition-colors flex-1 md:flex-none ${
                  isActive ? 'bg-primary text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <Icon size={22} className="md:w-5 md:h-5" />
                <span className="text-[10px] md:text-sm font-medium">{link.name}</span>
              </Link>
            );
          })}
          
          {/* Logout Button for Desktop */}
          <button className="hidden md:flex items-center gap-3 p-3 mt-auto text-red-400 hover:bg-gray-800 rounded-lg transition-colors w-full text-left">
            <LogOut size={20} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </nav>
      </aside>

      {/* Admin Main Content Area */}
      <main className="flex-1 p-4 md:p-8 pb-24 md:pb-8 h-[calc(100vh-60px)] md:h-screen overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;