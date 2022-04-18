import { useParams } from "@remix-run/react";

export default function App() {
  const params = useParams();
  return (
    <>
      <h3>App/Calendar Day: {params.day}</h3>
    </>
  );
}
