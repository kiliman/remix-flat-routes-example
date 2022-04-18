import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import EmployeeProfileCard from "./employee-profile-card";
import { getEmployeeData } from "./get-employee-data.server";
import teamPhoto from "./team-photo.png";

export const loader: LoaderFunction = async () => {
  const employees = await getEmployeeData();
  return json({ employees });
};

export default function About() {
  const { employees } = useLoaderData();
  return (
    <div>
      <h2 className="text-2xl font-bold">About</h2>
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img className="h-16" src={teamPhoto} alt="Team Photo" />
      <div className="flex flex-wrap gap-4 mt-4">
        {employees.map((employee: any) => (
          <EmployeeProfileCard key={employee.email} employee={employee} />
        ))}
      </div>
    </div>
  );
}
