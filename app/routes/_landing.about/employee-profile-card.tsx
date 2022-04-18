export default function EmployeeProfileCard({ employee }: any) {
  return (
    <div className="border rounded border-gray-200 shadow-lg p-4">
      <h2 className="text-xl font-bold">{employee.name}</h2>
      <div className="text-gray-700">{employee.email}</div>
      <div className="text-gray-700">{employee.phone}</div>
    </div>
  );
}
