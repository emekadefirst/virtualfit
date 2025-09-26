import React, { useState } from "react";
import AdminHeader from "../header";
import AdminSidebar from "../sideBar";
import { Outlet } from "react-router-dom";

const AdminWebLayout = () => {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  // Example admin data
  const admin = {
    name: "Victor Emeka",
    email: "victor@example.com",
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <AdminSidebar setCurrentPage={setCurrentPage} />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <AdminHeader currentPage={currentPage} admin={admin} />

        <main className="flex-1 bg-gray-50 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminWebLayout;
