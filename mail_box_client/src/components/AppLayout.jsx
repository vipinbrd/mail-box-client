import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export function AppLayout() {
  return (
    <>
      {/* Navbar (height: 64px = 16 tailwind units) */}
      <Navbar />

      {/* Page Content */}
      <div className="flex min-h-screen">
        {/* Sticky Sidebar Container */}
        <div className="sticky top-16 h-[calc(100vh-4rem)]">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto min-h-[calc(100vh-4rem)]">
          <Outlet />
        </div>
      </div>
    </>
  );
}
