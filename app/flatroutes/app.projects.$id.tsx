import { useParams } from "@remix-run/react";

export default function App() {
  const params = useParams();
  return (
    <>
      <h3>Project #{params.id}</h3>
    </>
  );
}
