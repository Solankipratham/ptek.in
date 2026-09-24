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
      <main className="flex-grow w-full bg-white pt-16 lg:pt-[72px]">
        <div className="w-full">
          <Outlet />
        </div>
      </main>

      {/* Footer at the bottom */}
      <Footer />

    </div>
  );
};

export default Layout;
