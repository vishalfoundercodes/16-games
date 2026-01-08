import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-sky-100 flex justify-center">
      <div className="relative w-full max-w-[500px]">
        {/* Header */}
        <div className="fixed top-0 w-full max-w-[500px] z-50">
          <Header />
        </div>

        {/* Page Content */}
        <main className="pt-[64px] pb-[80px] px-4 h-screen overflow-y-auto bg-black">
          <Outlet />
        </main>

        {/* Footer */}
        <div className="fixed bottom-0 w-full max-w-[500px] z-50">
          <Footer />
        </div>
      </div>
    </div>
  );
}
