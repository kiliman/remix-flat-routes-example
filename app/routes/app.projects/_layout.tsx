import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getProjects } from "./get-projects.server";
import ProjectCard from "./project-card";

export const loader: LoaderFunction = async () => {
  const projects = await getProjects();
  return json({ projects });
};

export default function About() {
  const { projects } = useLoaderData();
  return (
    <div>
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="flex items-start">
        <div className="w-1/2 flex flex-wrap gap-4 mt-4">
          {projects.map((project: any) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="w-1/2 mt-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
