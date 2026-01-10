import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-sky-100 flex justify-center">
      <div className="relative w-full max-w-[500px] xsm:max-w-full">
        {/* Header */}
        <div className="fixed top-0 w-full max-w-[500px] xsm:max-w-full z-50">
          <Header />
        </div>

        {/* Page Content */}
        <main className="py-1 pb-28 xsm:p-0 xsm:pt-10 xsm:pb-0 overflow-y-auto bg-black">
          <Outlet />
        </main>

        {/* Footer */}
        <div className="fixed bottom-0 w-full max-w-[500px] xsm:hidden  z-50">
          <Footer />
        </div>
      </div>
    </div>
  );
}
