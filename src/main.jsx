import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ListButton from "./ListButton";
import Counter from "./Counter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListButton />
    <Counter></Counter>
  </StrictMode>
);
