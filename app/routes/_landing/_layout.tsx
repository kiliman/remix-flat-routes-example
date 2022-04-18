import { Outlet } from "@remix-run/react";
import Footer from "./footer";
import Header from "./header";

export default function App() {
  return (
    <div className="h-min-screen h-screen flex flex-col">
      <Header />
      <div className="flex-1 p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
