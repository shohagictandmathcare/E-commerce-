import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    // পরবর্তীতে এখানে Supabase Auth Signup লজিক বসবে
    if (name && email && password) {
      toast.success('Account created successfully! 🎉');
      navigate('/login');
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Account | TechStore</title>
      </Helmet>

      <div className="flex items-center justify-center min-h-[calc(100vh-8rem)] px-4 py-8">
        <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
          
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-extrabold text-dark mb-2">Create Account</h1>
            <p className="text-gray-500 text-sm">Join TechStore for exclusive deals!</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User size={20} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>

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
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={20} className="text-gray-400" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"} 
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-theme text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-4"
            >
              Sign Up <ArrowRight size={18} />
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-primary hover:underline">
              Sign In
            </Link>
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Register;