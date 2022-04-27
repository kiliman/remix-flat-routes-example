import {
  ActionFunction,
  json,
  LoaderFunction,
  redirect,
} from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { getProjects } from "../app.projects/get-projects.server";
export const loader: LoaderFunction = async ({ params }) => {
  const { id } = params;
  const projects = await getProjects();
  return json({ project: projects.find((p) => p.id === Number(id)) });
};
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  return redirect("/app/projects");
};

export default function App() {
  const { project } = useLoaderData();
  return (
    <>
      <h3 className="text-2xl font-bold">Project #{project.id}</h3>
      <Form method="post" className="flex flex-col items-start">
        <input type="hidden" name="id" defaultValue={project.id} />
        <label className="text-sm text-gray-600 font-bold mt-4">Name</label>
        <input
          className="border border-gray-300 rounded px-4 py-2 mt-1"
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={project.name}
        />
        <button
          className="mt-4 bg-purple-500 text-white rounded px-4 py-2"
          type="submit"
        >
          Save Project
        </button>
      </Form>
    </>
  );
}
