import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ListButton from "./ListButton";
import Counter from "./Counter.jsx";
import App5 from "./App5.jsx";
import App6 from "./App6.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App5 />
    <ListButton />
    <Counter />
    <App6 />
  </StrictMode>
);
