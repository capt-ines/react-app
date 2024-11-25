import List from "./List.jsx";
import {
  generalAviationPlanes,
  commercialAviationPlanes,
} from "./ItemsForList.jsx";
import { Fragment } from "react";

function App4() {
  return (
    <Fragment key={"1"}>
      <List items={generalAviationPlanes} category={"General aviation"}></List>
      <List
        items={commercialAviationPlanes}
        category={"Commercial aviation"}
      ></List>
    </Fragment>
  );
}
export default App4;
