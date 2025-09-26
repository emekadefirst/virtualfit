import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import WebLayout from './componets/public/layout/weblayout.jsx';
import './assets/style.css';
import HeroSection from './pages/public/LandingPage.jsx';
import LoginPage from './pages/public/LoginPage.jsx';
import SignupPage from './pages/public/SignupPage.jsx';
import SupportPage from './pages/public/SupportPage.jsx';
import Dashboard from './pages/public/DashboardPage.jsx';

import AdminWebLayout from './componets/admin/layout/main.jsx';
import AdminDashboard from './pages/admin/dashboard.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<WebLayout />}>
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
  </StrictMode>
);
