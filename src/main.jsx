import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ListButton from "./ListButton";
import Counter from "./Counter.jsx";
import App5 from "./App5.jsx";
import App6 from "./App6.jsx";
import Accordion from "./App7.jsx";
import Accordion2 from "./App8.jsx";
import Accordion3 from "./App9.jsx";
import Form from "./App8.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Accordion2 />
    <Accordion3 />
    <App5 />
    <ListButton />
    <Counter />
    <App6 />
    <Accordion />
  </StrictMode>
);
