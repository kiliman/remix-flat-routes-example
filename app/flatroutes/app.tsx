import { Link, Outlet } from "@remix-run/react";

export default function App() {
  return (
    <>
      <h1>App Layout</h1>
      <ul>
        <li>
          <Link to="calendar">Calendar</Link>
        </li>
        <li>
          <Link to="projects">Projects</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
