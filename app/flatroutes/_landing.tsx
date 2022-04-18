import { Link, Outlet } from "@remix-run/react";

export default function App() {
  return (
    <>
      <h1>Landing Layout</h1>
      <ul>
        <li>
          <Link to="app">App</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
        <li>
          <Link to="signup">Sign up</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
