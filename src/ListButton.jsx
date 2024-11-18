import App4 from "./App4";
import { useState } from "react";
import { Fragment } from "react";

function ListButton() {
  const [visibility, setVisibility] = useState(true);
  const toggleListVisibility = () => {
    setVisibility((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleListVisibility}>
        {visibility ? "Hide list" : "Show list"}
      </button>
      {visibility && <App4 />}
    </>
  );
}

export default ListButton;
