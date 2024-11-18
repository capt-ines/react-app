import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ListButton from "./ListButton";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ListButton />
  </StrictMode>
);
