// Header.jsx
import React, { useEffect, useState } from "react";

const AdminHeader = ({ currentPage, admin }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="flex justify-between items-center px-8 py-6">
        {/* Left Section - Page Info */}
        <div className="flex flex-col space-y-1">
          <h1 className="text-2xl font-bold text-black tracking-tight">
            {currentPage}
          </h1>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0v1m0-1h6v1M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2"/>
              </svg>
              {time.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="text-gray-400">•</span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              {time.toLocaleTimeString('en-US', { 
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </span>
          </div>
        </div>

        {/* Right Section - Admin Info */}
        <div className="flex items-center space-x-4">
          {/* Admin Avatar */}
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-semibold text-lg">
              {admin.name?.charAt(0)?.toUpperCase() || 'A'}
            </span>
          </div>
          
          {/* Admin Details */}
          <div className="text-right">
            <p className="font-semibold text-black text-lg leading-tight">
              {admin.name}
            </p>
            <p className="text-gray-600 text-sm mt-0.5">
              {admin.email}
            </p>
            <div className="flex items-center justify-end mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                Online
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom border accent */}
      <div className="h-0.5 bg-gradient-to-r from-black via-gray-400 to-black opacity-20"></div>
    </header>
  );
};

export default AdminHeader;