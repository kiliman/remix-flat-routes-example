import { ActionFunction, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  return redirect("/");
};
export default function Login() {
  return (
    <div className="container">
      <h2 className="text-2xl font-bold">Login</h2>
      <Form method="post" className="flex flex-col items-start">
        <label className="text-sm text-gray-600 font-bold mt-4">Email</label>
        <input
          className="border border-gray-300 rounded px-4 py-2 mt-1"
          type="text"
          name="username"
          placeholder="Username"
        />
        <label className="text-sm text-gray-600 font-bold mt-4">Password</label>
        <input
          className="border border-gray-300 rounded px-4 py-2 mt-1"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button
          className="mt-4 bg-purple-500 text-white rounded px-4 py-2"
          type="submit"
        >
          Login
        </button>
      </Form>
    </div>
  );
}
