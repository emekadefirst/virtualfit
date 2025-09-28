// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { FormattedMessage, useIntl } from "react-intl";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { getUser, logoutService } from "../../services/auth";

const Navbar = ({ setLocale, locale }) => {
  const { formatMessage } = useIntl();
  const [language, setLanguage] = useState("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Sync with current locale on mount or locale change
  useEffect(() => {
    if (locale) setLanguage(locale.toUpperCase());
  }, [locale]);

  // Fetch user data if authenticated
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (localStorage.getItem("access_token")) {
          const data = await getUser(formatMessage);
          setUser(data);
        }
      } catch (err) {
        console.error("Failed to fetch user:", err);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    setLocale(selectedLanguage.toLowerCase());
    localStorage.setItem("locale", selectedLanguage.toLowerCase());
  };

  const handleLogout = async () => {
    try {
      await logoutService(formatMessage);
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  const LogoComponent = () => (
    <img
      src={logo}
      alt={formatMessage({ id: "navbar.brand" })}
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
              <Link to="/">
                <LogoComponent />
              </Link>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                <FormattedMessage id="navbar.brand" />
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {["about", "store", "api", "support"].map((item) => (
              <Link
                key={item}
                to={`/${item === "api" ? "developers" : item}`}
                className="text-gray-600 hover:text-gray-900 font-medium text-sm tracking-wide transition-colors duration-300 relative group"
              >
                <FormattedMessage id={`navbar.${item}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* User Info or Auth Buttons */}
            {user ? (
              <>
                <span className="hidden md:block text-gray-600 font-medium text-sm">
                  <FormattedMessage
                    id="navbar.welcomeUser"
                    values={{ firstName: user.first_name, lastName: user.last_name }}
                  />
                </span>
                <button
                  onClick={handleLogout}
                  className="hidden md:block text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors duration-300"
                >
                  <FormattedMessage id="navbar.logout" />
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hidden md:block text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors duration-300"
                >
                  <FormattedMessage id="navbar.login" />
                </Link>
                <Link
                  to="/signup"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md"
                >
                  <FormattedMessage id="navbar.getStarted" />
                </Link>
              </>
            )}

            {/* Language Dropdown */}
            <div className="relative hidden sm:block">
              <select
                value={language}
                onChange={handleChange}
                className="appearance-none bg-transparent border-0 text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer focus:outline-none pr-6"
              >
                <option value="EN">EN</option>
                <option value="KR">KR</option>
              </select>
              <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400 pointer-events-none" />
            </div>

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
              {["about", "store", "api", "support"].map((item) => (
                <Link
                  key={item}
                  to={`/${item === "api" ? "developers" : item}`}
                  className="block py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  <FormattedMessage id={`navbar.${item}`} />
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-200/50 space-y-3">
                {user ? (
                  <>
                    <span className="block py-3 text-gray-700 font-medium">
                      <FormattedMessage
                        id="navbar.welcomeUser"
                        values={{ firstName: user.first_name, lastName: user.last_name }}
                      />
                    </span>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                    >
                      <FormattedMessage id="navbar.logout" />
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="block w-full text-left py-3 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                    >
                      <FormattedMessage id="navbar.login" />
                    </Link>
                    <Link
                      to="/signup"
                      className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-[1.02] shadow-sm hover:shadow-md"
                    >
                      <FormattedMessage id="navbar.getStarted" />
                    </Link>
                  </>
                )}

                {/* Mobile Language Dropdown */}
                <div className="relative">
                  <select
                    value={language}
                    onChange={handleChange}
                    className="appearance-none bg-transparent border-0 text-sm font-medium text-gray-600 hover:text-gray-900 cursor-pointer focus:outline-none pr-6"
                  >
                    <option value="EN">EN</option>
                    <option value="KR">KR</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400 pointer-events-none" />
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