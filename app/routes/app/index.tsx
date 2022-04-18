import { Outlet } from "@remix-run/react";
import Footer from "./footer";
import PrimaryNav from "./primary-nav";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen h-screen">
      <PrimaryNav />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
