// Sidebar.jsx
import React, { useState } from "react";
import { Users, CreditCard, BarChart2, Settings, Archive, ChevronRight } from "lucide-react";

const menuItems = [
  { name: "Users", icon: <Users size={20} /> },
  { name: "Payment", icon: <CreditCard size={20} /> },
  { name: "Usage", icon: <BarChart2 size={20} /> },
  { name: "Account Setting", icon: <Settings size={20} /> },
  { name: "Subscription", icon: <Archive size={20} /> },
];

const AdminSidebar = () => {
  const [activeItem, setActiveItem] = useState("Users");

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col shadow-sm">
      {/* Logo/Brand Section */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center shadow-md">
            <div className="w-6 h-6 bg-white rounded-sm"></div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-black tracking-tight">
              Admin Panel
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">Dashboard</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <a
                key={item.name}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item.name);
                }}
                className={`
                  group flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ease-in-out
                  ${isActive 
                    ? 'bg-black text-white shadow-md' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                  }
                `}
              >
                <div className="flex items-center space-x-3">
                  <div className={`transition-colors ${isActive ? 'text-white' : 'text-gray-600'}`}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.name}</span>
                </div>
                
                <ChevronRight 
                  size={16} 
                  className={`
                    transition-all duration-200
                    ${isActive 
                      ? 'text-white opacity-100 transform rotate-90' 
                      : 'text-gray-400 opacity-0 group-hover:opacity-100'
                    }
                  `}
                />
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200"></div>

        {/* Additional Section */}
        <div className="space-y-2">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 mb-3">
            Quick Actions
          </p>
          <div className="px-4 py-3 bg-gray-50 rounded-lg border border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">System Status</span>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
            <p className="text-xs text-gray-500">All systems operational</p>
          </div>
        </div>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-100">
        <div className="bg-black rounded-lg p-4 text-center">
          <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full mx-auto mb-2 flex items-center justify-center">
            <Settings size={16} className="text-white" />
          </div>
          <p className="text-white text-sm font-medium mb-1">Need Help?</p>
          <p className="text-gray-300 text-xs mb-3">Contact support team</p>
          <button className="w-full bg-white text-black text-xs font-medium py-2 rounded-md hover:bg-gray-100 transition-colors">
            Get Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;