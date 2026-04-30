import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// ডামি লিগ্যাল পেজ ডাটা (পরবর্তীতে অ্যাডমিন প্যানেল থেকে এডিট করা যাবে)
const pageData: Record<string, { title: string; content: React.ReactNode }> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    content: (
      <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
        <p><strong>Last updated:</strong> April 2026</p>
        <p>At TechStore, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
        
        <h3 className="text-lg font-bold text-dark mt-6">1. Information We Collect</h3>
        <p>We may collect information about you in a variety of ways. The information we may collect includes personal data such as your name, shipping address, email address, and telephone number.</p>
        
        <h3 className="text-lg font-bold text-dark mt-6">2. How We Use Your Information</h3>
        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. We use it to process transactions, manage your account, and deliver products.</p>
      </div>
    )
  },
  'terms-of-service': {
    title: 'Terms of Service',
    content: (
      <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
        <p><strong>Last updated:</strong> April 2026</p>
        
        <h3 className="text-lg font-bold text-dark mt-6">1. Acceptance of Terms</h3>
        <p>By accessing and using TechStore, you accept and agree to be bound by the terms and provision of this agreement.</p>
        
        <h3 className="text-lg font-bold text-dark mt-6">2. User Account</h3>
        <p>You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer or device.</p>
      </div>
    )
  },
  'refund-policy': {
    title: 'Refund Policy',
    content: (
      <div className="space-y-4 text-gray-600 leading-relaxed text-sm md:text-base">
        <p><strong>Last updated:</strong> April 2026</p>
        
        <h3 className="text-lg font-bold text-dark mt-6">1. Returns</h3>
        <p>You have 7 days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it.</p>
        
        <h3 className="text-lg font-bold text-dark mt-6">2. Refunds</h3>
        <p>Once we receive your item, we will inspect it and notify you. If your return is approved, we will initiate a refund to your original method of payment (or provide store credit for Cash on Delivery).</p>
      </div>
    )
  }
};

const LegalPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // যদি slug ডাটাতে না থাকে তবে 404 দেখাবে
  const page = slug && pageData[slug] ? pageData[slug] : {
    title: 'Page Not Found',
    content: <p className="text-red-500">The page you are looking for does not exist or has been moved.</p>
  };

  return (
    <>
      <Helmet>
        <title>{page.title} | TechStore</title>
      </Helmet>

      <div className="px-4 py-8 md:py-12 max-w-3xl mx-auto min-h-[60vh]">
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-2xl md:text-4xl font-extrabold text-dark mb-6 border-b border-gray-100 pb-4">
            {page.title}
          </h1>
          <div className="prose prose-blue max-w-none">
            {page.content}
          </div>
        </div>
      </div>
    </>
  );
};

export default LegalPage;