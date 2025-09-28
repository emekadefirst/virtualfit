// src/layouts/WebLayout.jsx
import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Navbar from "../navbar";
import Footer from "../footer";
import { Outlet } from "react-router-dom";
import { messages } from "../../../locales/message";

const WebLayout = () => {
  const [locale, setLocale] = useState(() => {
    const browserLocale = navigator.language.split("-")[0];
    return messages[browserLocale] ? browserLocale : "en";
  });

  return (
    <IntlProvider messages={messages[locale]} locale={locale} defaultLocale="en">
      <div className="min-h-screen flex flex-col">
   
        <Navbar locale={locale} setLocale={setLocale} />

        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </IntlProvider>
  );
};

export default WebLayout;