import List from "./List.jsx";
import {
  generalAviationPlanes,
  commercialAviationPlanes,
} from "./ItemsForList.jsx";
import { Fragment } from "react";

function App4() {
  return (
    <>
      <List items={generalAviationPlanes} category={"General aviation"}></List>
      <List
        items={commercialAviationPlanes}
        category={"Commercial aviation"}
      ></List>
    </>
  );
}
export default App4;
