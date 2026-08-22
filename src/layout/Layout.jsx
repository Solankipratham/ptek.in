import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-4 bg-white">
        <div className="max-w-7xl mx-auto w-full">
          <Outlet />
        </div>
      </main>

      {/* Footer at the bottom */}
      <Footer />

    </div>
  );
};

export default Layout;
