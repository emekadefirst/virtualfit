import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [language, setLanguage] = useState("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Logo Component
  const LogoComponent = () => (
    <img
      src={logo}
      alt="VirtualFit Logo"
      className="w-10 h-10 object-contain"
    />
  );

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <a href="/">
                <LogoComponent />
              </a>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                VirtualFit
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <a
              href="/about"
              className="text-gray-600 hover:text-gray-900 font-medium text-sm tracking-wide transition-colors duration-300 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/store"
              className="text-gray-600 hover:text-gray-900 font-medium text-sm tracking-wide transition-colors duration-300 relative group"
            >
              Store
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/developers"
              className="text-gray-600 hover:text-gray-900 font-medium text-sm tracking-wide transition-colors duration-300 relative group"
            >
              API
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/support"
              className="text-gray-600 hover:text-gray-900 font-medium text-sm tracking-wide transition-colors duration-300 relative group"
            >
              Support
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Language Selector */}
            <div className="relative hidden sm:block">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="appearance-none bg-transparent border-0 text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer focus:outline-none pr-6"
              >
                <option value="EN">EN</option>
                <option value="KR">KR</option>
                <option value="ES">ES</option>
                <option value="FR">FR</option>
              </select>
              <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400 pointer-events-none" />
            </div>

            {/* Login Button */}
            <button className="hidden md:block text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors duration-300">
              Log in
            </button>

            {/* CTA Button */}
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md">
              Get Started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100/50 transition-all duration-200"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200/30 bg-white/95 backdrop-blur-sm">
            <div className="px-6 py-6 space-y-4">
              <a
                href="/about"
                className="block py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                About
              </a>
              <a
                href="/store"
                className="block py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Store
              </a>
              <a
                href="/developers"
                className="block py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                API
              </a>
              <a
                href="/support"
                className="block py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Support
              </a>
              <div className="pt-4 border-t border-gray-200/50 space-y-3">
                <button className="block w-full text-left py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200">
                  Log in
                </button>
                <div className="relative">
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  >
                    <option value="EN">English</option>
                    <option value="KR">한국어</option>
                    <option value="ES">Español</option>
                    <option value="FR">Français</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;