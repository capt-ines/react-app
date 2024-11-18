import Greeting from "./Greeting.jsx";
import { Fragment } from "react";

function App3() {
  return (
    <>
      <Greeting isLoggedIn={true} username="Me" />
    </>
  );
}

export default App3;
