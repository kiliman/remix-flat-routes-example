import { Link, Outlet } from "@remix-run/react";

export default function App() {
  return (
    <>
      <h2>App/Calendar Layout</h2>
      <ul>
        <li>
          <Link to="monday">Monday</Link>
        </li>
        <li>
          <Link to="tuesday">Tuesday</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
