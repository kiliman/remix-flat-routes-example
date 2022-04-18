import { NavLink } from "@remix-run/react";

export default function Header() {
  return (
    <div className="bg-blue-500 text-white p-4">
      <ul className="flex gap-x-8">
        <li>
          <HeaderLink to="/">Home</HeaderLink>
        </li>
        <li>
          <HeaderLink to="app">App</HeaderLink>
        </li>
        <li>
          <HeaderLink to="login">Login</HeaderLink>
        </li>
        <li>
          <HeaderLink to="signup">Sign up</HeaderLink>
        </li>
        <li>
          <HeaderLink to="about">About</HeaderLink>
        </li>
      </ul>
    </div>
  );
}

function HeaderLink(props: any) {
  return (
    <NavLink
      className={({ isActive }: any) =>
        `hover:bg-blue-200 hover:text-blue-900 px-4 py-2 rounded ${
          isActive ? "bg-white text-blue-600" : "text-white"
        }`
      }
      {...props}
    >
      {props.children}
    </NavLink>
  );
}
