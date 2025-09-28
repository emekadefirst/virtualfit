// src/components/Footer.jsx
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

const Footer = () => {
  const { formatMessage } = useIntl();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-6 z-30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-black text-white mb-4 tracking-tight">
              <FormattedMessage id="navbar.brand" />
            </h2>
            <p className="text-lg leading-relaxed mb-6 max-w-md">
              <FormattedMessage id="footer.description" />
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300 group"
                aria-label="Twitter"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300 group"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300 group"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              <FormattedMessage id="footer.product" />
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="/about" className="hover:text-white transition-colors duration-300 text-sm">
                  <FormattedMessage id="navbar.about" />
                </a>
              </li>
              <li>
                <a href="/store" className="hover:text-white transition-colors duration-300 text-sm">
                  <FormattedMessage id="navbar.store" />
                </a>
              </li>
              <li>
                <a href="/features" className="hover:text-white transition-colors duration-300 text-sm">
                  <FormattedMessage id="footer.features" />
                </a>
              </li>
              <li>
                <a href="/pricing" className="hover:text-white transition-colors duration-300 text-sm">
                  <FormattedMessage id="footer.pricing" />
                </a>
              </li>
              <li>
                <a href="/api" className="hover:text-white transition-colors duration-300 text-sm">
                  <FormattedMessage id="navbar.api" />
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
              <FormattedMessage id="footer.support" />
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="/help" className="hover:text-white transition-colors duration-300 text-sm">
                  <FormattedMessage id="footer.helpCenter" />
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition-colors duration-300 text-sm">
                  <FormattedMessage id="footer.contact" />
                </a>
              </li>
              <li>
                <a href="/docs" className="hover:text-white transition-colors duration-300 text-sm">
                  <FormattedMessage id="footer.documentation" />
                </a>
              </li>
              <li>
                <a href="/status" className="hover:text-white transition-colors duration-300 text-sm">
                  <FormattedMessage id="footer.status" />
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-white transition-colors duration-300 text-sm">
                  <FormattedMessage id="footer.community" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-md">
            <h3 className="text-white font-bold mb-3">
              <FormattedMessage id="footer.stayInTheLoop" />
            </h3>
            <p className="text-sm mb-6">
              <FormattedMessage id="footer.newsletterDescription" />
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder={formatMessage({ id: "footer.emailPlaceholder" })}
                className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-white hover:bg-gray-100 px-6 py-3 rounded-xl text-gray-900 font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <FormattedMessage id="footer.subscribe" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-6 text-sm">
            <p>
              <FormattedMessage id="footer.copyright" values={{ year: currentYear }} />
            </p>
            <span className="hidden md:block text-gray-600">•</span>
            <a href="/privacy" className="hover:text-white transition-colors duration-300">
              <FormattedMessage id="footer.privacy" />
            </a>
            <span className="text-gray-600">•</span>
            <a href="/terms" className="hover:text-white transition-colors duration-300">
              <FormattedMessage id="footer.terms" />
            </a>
            <span className="text-gray-600">•</span>
            <a href="/cookies" className="hover:text-white transition-colors duration-300">
              <FormattedMessage id="footer.cookies" />
            </a>
          </div>

          <div className="flex items-center space-x-2 text-sm">
            <span>
              <FormattedMessage
                id="footer.madeWithLove"
                values={{
                  heart: (
                    <svg
                      className="w-4 h-4 text-red-500 inline"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  ),
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;