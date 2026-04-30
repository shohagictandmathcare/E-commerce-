import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // পরবর্তীতে এখানে Supabase Auth লজিক বসবে
    if (email && password) {
      toast.success('Logged in successfully!');
      navigate('/');
    } else {
      toast.error('Please enter both email and password.');
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | TechStore</title>
      </Helmet>

      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] px-4 py-8">
        <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-extrabold text-dark mb-2">Welcome Back!</h1>
            <p className="text-gray-500 text-sm">Sign in to continue to TechStore</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={20} className="text-gray-400" />
                </div>
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <Link to="#" className="text-xs font-semibold text-primary hover:underline">Forgot Password?</Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={20} className="text-gray-400" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-primary transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-theme text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
            >
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-primary hover:underline">
              Create Account
            </Link>
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Login;