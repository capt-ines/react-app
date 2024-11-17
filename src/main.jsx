import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Students from "./App2.jsx";

createRoot(document.getElementById("root")).render(
  //render = add components from vdom to dom
  <StrictMode>
    <Students />
  </StrictMode>
);
