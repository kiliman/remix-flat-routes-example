import ProjectButtons from "./project-buttons";

export default function ProjectCard({ project }: any) {
  return (
    <div className="border rounded border-gray-200 shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4">{project.name}</h2>
      <ProjectButtons project={project} />
    </div>
  );
}
