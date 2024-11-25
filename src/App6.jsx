import { useState } from "react";
import { generalAviationPlanes } from "./ItemsForList";

function App6() {
  const [planes, setPlanes] = useState(generalAviationPlanes);

  return (
    <>
      <h2>Delete them:</h2>
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

export default App6;
