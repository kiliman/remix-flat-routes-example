import { Link, useParams } from "@remix-run/react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export default function Calendar({
  year,
  month,
}: {
  year: number;
  month: number;
}) {
  const params = useParams();
  const firstDay = new Date(year, month, 1);
  const skipFirstDay = firstDay.getDay();
  const lastDay = new Date(year, month + 1, 0);
  return (
    <div className="grid grid-cols-7 border-collapse border-r border-b border-gray-200 shadow-xl">
      <h1 className="col-span-full text-center bg-green-300 text-xl p-4 font-bold text-green-900">
        {monthNames[month]} {year}
      </h1>
      {daysOfWeek.map((day, index) => (
        <div
          key={index}
          className="px-4 py-2 text-center border-t border-l border-gray-200 bg-gray-100"
        >
          {day}
        </div>
      ))}
      {range(0, skipFirstDay - 1).map((_, index) => (
        <div key={`skip${index}`} />
      ))}
      {range(1, lastDay.getDate()).map((day) => (
        <Link key={day} to={String(day)}>
          <div
            className={`border-t border-l hover:bg-green-100 border-gray-200 h-16 w-full text-right p-2
          ${params.day === String(day) ? "bg-yellow-100 font-bold" : ""}`}
          >
            {day}
          </div>
        </Link>
      ))}
    </div>
  );
}

function range(start: number, end: number) {
  return Array(end - start + 1)
    .fill(1)
    .map((x, y) => start + y);
}
