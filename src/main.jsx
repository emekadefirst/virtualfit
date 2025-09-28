import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";

import WebLayout from './componets/public/layout/weblayout.jsx';
import './assets/style.css';
import HeroSection from './pages/public/LandingPage.jsx';
import LoginPage from './pages/public/LoginPage.jsx';
import SignupPage from './pages/public/SignupPage.jsx';
import SupportPage from './pages/public/SupportPage.jsx';
import Dashboard from './pages/public/DashboardPage.jsx';
import { ToastContainer } from "react-toastify";
import AdminWebLayout from './componets/admin/layout/main.jsx';
import AdminDashboard from './pages/admin/dashboard.jsx';
import "react-toastify/dist/ReactToastify.css";

import { messages } from "./locales/message"; // import your translations

const App = () => {
  const [locale, setLocale] = useState("en"); // default language

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<WebLayout setLocale={setLocale} />}>
            <Route index element={<HeroSection />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="support" element={<SupportPage />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          {/* Admin routes */}
          <Route path="admin" element={<AdminWebLayout />}>
            <Route index element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </IntlProvider>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
