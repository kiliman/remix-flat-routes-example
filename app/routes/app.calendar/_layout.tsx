import { Outlet } from "@remix-run/react";
import Calendar from "./calendar";

export default function App() {
  const date = new Date();

  return (
    <div className="flex">
      <div className="w-1/2">
        <p className="text-center mb-2 text-xl">Select a date</p>
        <Calendar year={date.getFullYear()} month={date.getMonth()} />
      </div>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
}
