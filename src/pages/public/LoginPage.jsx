// src/pages/LoginPage.jsx
import { loginService } from "../../services/auth";
import { Navigate } from "react-router";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";

export default function LoginPage() {
  const { formatMessage } = useIntl();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Prepare data
      const data = {
        email,
        password,
      };
      const response = await loginService(JSON.stringify(data));
      if (response.status === 200) {
        navigate("/dashboard");
      } else {
        console.log(response.response);
      }
    } catch (err) {
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-white px-6 py-8">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gray-100/40 rounded-full blur-3xl transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gray-50/60 rounded-full blur-3xl transform -translate-x-24 translate-y-24"></div>
        </div>

        <div className="relative bg-white/80 backdrop-blur-sm shadow-2xl rounded-3xl w-full max-w-md p-8 border border-gray-100">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">
              <FormattedMessage id="login.title" />
            </h1>
            <p className="text-gray-600">
              <FormattedMessage id="login.description" />
            </p>
          </div>

          {/* Uncomment if Google login is re-enabled
          <div className="space-y-3 mb-6">
            <button
              className="w-full py-3 border-2 border-gray-200 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 font-medium"
            >
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt={formatMessage({ id: "login.googleButton" })} className="w-5 h-5" />
              <FormattedMessage id="login.googleButton" />
            </button>
          </div>

          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-200" />
            <span className="px-3 text-gray-500 text-sm">
              <FormattedMessage id="login.orDivider" />
            </span>
            <hr className="flex-1 border-gray-200" />
          </div>
          */}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder={formatMessage({ id: "login.emailPlaceholder" })}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-all duration-300"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder={formatMessage({ id: "login.passwordPlaceholder" })}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-gray-900 focus:outline-none transition-all duration-300"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              {isLoading ? <FormattedMessage id="login.loading" /> : <FormattedMessage id="login.submitButton" />}
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6 text-sm">
            <FormattedMessage id="login.noAccount" />{" "}
            <a href="/signup" className="text-gray-900 font-semibold hover:underline">
              <FormattedMessage id="login.signupLink" />
            </a>
          </p>
        </div>
      </div>
    </>
  );
}