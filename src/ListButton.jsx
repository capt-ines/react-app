import App4 from "./App4";
import { useState } from "react";
import { Fragment } from "react";

function ListButton() {
  const [visibility, setVisibility] = useState(true); //Hooks are used only inside function component.
  // useState is a function which returns array of 2 values. [1, 2] = 1 is state et every iteration of function component; 2 is function that updates the state. () is initial value of state.
  const toggleListVisibility = () => {
    setVisibility((prevState) => !prevState);
  };

  return (
    <>
      {visibility ? <App4 /> : null}
      {/* conditional rendering – parent component can render different children */}
      {/* w jsx 0 to number, a w js 0 to false,
      dlatego lepiej użyć ternary operator niż &&. Żeby był boolean w jsx trzeba
      dać przed nim !! */}
      <button onClick={toggleListVisibility}>
        {visibility ? "Hide list" : "Show list"}
      </button>
    </>
  );
}

export default ListButton;
