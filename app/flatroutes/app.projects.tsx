import { Link, Outlet } from "@remix-run/react";

export default function App() {
  return (
    <>
      <h2>App/Projects Layout</h2>
      <ul>
        <li>
          <Link to="1">Project 1</Link>
        </li>
        <li>
          <Link to="2">Project 2</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}
