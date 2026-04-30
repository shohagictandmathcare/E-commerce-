import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Save, FileText, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const pagesList =[
  { id: 'privacy-policy', name: 'Privacy Policy' },
  { id: 'terms-of-service', name: 'Terms of Service' },
  { id: 'refund-policy', name: 'Refund Policy' },
];

const dummyContent: Record<string, string> = {
  'privacy-policy': 'At TechStore, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information...\n\n1. Information We Collect\nWe may collect personal data such as your name, address, and email.\n\n2. How We Use Your Information\nWe use it to process transactions and manage your account.',
  'terms-of-service': 'By accessing and using TechStore, you accept and agree to be bound by the terms and provision of this agreement...\n\n1. Acceptance of Terms\nYou agree to these terms by using our site.\n\n2. User Account\nYou are responsible for maintaining your account confidentiality.',
  'refund-policy': 'You have 7 days to return an item from the date you received it...\n\n1. Returns\nItems must be unused and in original condition.\n\n2. Refunds\nOnce approved, we will initiate a refund to your original payment method.',
};

const ManagePages = () => {
  const[activePage, setActivePage] = useState(pagesList[0].id);
  const [content, setContent] = useState(dummyContent[pagesList[0].id]);

  const handlePageChange = (pageId: string) => {
    setActivePage(pageId);
    setContent(dummyContent[pageId]); // পরবর্তীতে ডাটাবেস থেকে লোড হবে
  };

  const handleSave = () => {
    // পরবর্তীতে এখানে Supabase update লজিক বসবে
    toast.success('Page content updated successfully!');
  };

  return (
    <>
      <Helmet>
        <title>Manage Pages | Admin</title>
      </Helmet>

      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-dark flex items-center gap-2">
            <FileText className="text-primary" /> Manage Legal Pages
          </h1>
          <p className="text-sm text-gray-500 mt-1">Update your website's policies and terms</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Left Sidebar: Page Selection */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-2">
              <h3 className="font-bold text-gray-700 mb-2 px-2">Select Page</h3>
              {pagesList.map((page) => (
                <button
                  key={page.id}
                  onClick={() => handlePageChange(page.id)}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activePage === page.id 
                      ? 'bg-blue-50 text-primary border border-blue-100' 
                      : 'text-gray-600 hover:bg-gray-50 border border-transparent'
                  }`}
                >
                  {page.name}
                </button>
              ))}
            </div>
            
            <div className="mt-4 bg-orange-50 p-4 rounded-xl border border-orange-100 flex items-start gap-3">
              <AlertCircle size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-orange-700 leading-relaxed">
                Changes made here will directly reflect on the public website immediately after saving.
              </p>
            </div>
          </div>

          {/* Right Content: Editor Area */}
          <div className="flex-1 bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col">
            <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-4">
              <h2 className="text-lg font-bold text-dark">
                Editing: <span className="text-primary">{pagesList.find(p => p.id === activePage)?.name}</span>
              </h2>
              <button 
                onClick={handleSave}
                className="hidden md:flex bg-primary text-white font-bold py-2 px-5 rounded-lg hover:bg-primary-dark transition-colors items-center gap-2 shadow-sm"
              >
                <Save size={18} /> Save Changes
              </button>
            </div>

            {/* Simple Textarea Editor (To be replaced with React Quill later) */}
            <div className="flex-1 min-h-[300px]">
              <label className="block text-sm font-medium text-gray-500 mb-2">Page Content</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-[300px] md:h-[400px] p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none leading-relaxed text-gray-700"
                placeholder="Write your policy content here..."
              />
            </div>

            {/* Mobile Save Button */}
            <button 
              onClick={handleSave}
              className="md:hidden mt-4 w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary-dark transition-colors flex justify-center items-center gap-2 shadow-md"
            >
              <Save size={20} /> Save Changes
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default ManagePages;