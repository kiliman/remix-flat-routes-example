import { useParams } from "@remix-run/react";

export default function App() {
  const params = useParams();
  const day = Number(params.day);
  let suffix = "th";
  if (day === 1 || day === 21 || day === 31) {
    suffix = "st";
  } else if (day === 2 || day === 22) {
    suffix = "nd";
  } else if (day === 3 || day === 23) {
    suffix = "rd";
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold">
        You selected the {day}
        {suffix}
      </h3>
    </div>
  );
}
