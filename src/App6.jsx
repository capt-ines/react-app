import { useState } from "react";
import { generalAviationPlanes } from "./ItemsForList";

export default function App6() {
  const [planes, setPlanes] = useState(generalAviationPlanes);

  return (
    <>
      <ul>
        {planes.map((plane) => (
          <li key={plane.id}>
            {plane.name}
            <button
              onClick={() => {
                setPlanes((prevPlanes) =>
                  prevPlanes.filter((p) => p.id !== plane.id)
                );
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
