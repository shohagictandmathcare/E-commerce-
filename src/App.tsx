import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Layouts (আমরা পরবর্তীতে তৈরি করব)
import MainLayout from './components/MainLayout';
import AdminLayout from './admin/AdminLayout';

// User Pages (আমরা পরবর্তীতে তৈরি করব)
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Login from './pages/Login';
import Register from './pages/Register';
import LegalPage from './pages/LegalPage';

// Admin Pages (আমরা পরবর্তীতে তৈরি করব)
import AdminDashboard from './admin/AdminDashboard';
import ManageProducts from './admin/ManageProducts';
import ManageOrders from './admin/ManageOrders';
import ManagePages from './admin/ManagePages';

function App() {
  return (
    <>
      {/* গ্লোবাল নোটিফিকেশন/অ্যালার্ট সেটআপ */}
      <Toaster 
        position="top-center" 
        toastOptions={{
          duration: 3000,
          style: {
            background: '#1e293b',
            color: '#fff',
            borderRadius: '8px',
          },
        }} 
      />

      {/* অ্যাপ রাউটিং সেটআপ */}
      <Routes>
        {/* Public & User Routes (Main Layout এর ভেতরে থাকবে) */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="legal/:slug" element={<LegalPage />} />
        </Route>

        {/* Admin Routes (Admin Layout এর ভেতরে থাকবে) */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<ManageProducts />} />
          <Route path="orders" element={<ManageOrders />} />
          <Route path="pages" element={<ManagePages />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;