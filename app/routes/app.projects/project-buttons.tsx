import { Link } from "@remix-run/react";

export default function ProjectButtons({ project }: any) {
  return (
    <div className="flex gap-2">
      <Link
        to={String(project.id)}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        Edit
      </Link>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        Delete
      </button>
    </div>
  );
}
