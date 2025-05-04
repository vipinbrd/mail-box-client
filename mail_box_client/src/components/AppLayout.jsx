import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

export function AppLayout() {
  return (
    <>
      {/* Navbar always on top */}
      <Navbar />

      {/* Sidebar + Content area */}
      <div className="flex">
        {/* Sidebar */}
        <div className="sticky top-16 h-[calc(100vh-4rem)]"> {/* 4rem = 64px (navbar height) */}
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
}
