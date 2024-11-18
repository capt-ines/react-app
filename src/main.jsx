import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Students from "./App2.jsx";
import App3 from "./App3.jsx";
import App4 from "./App4.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App3 />
    <Students />
    <App4 />
  </StrictMode>
);
