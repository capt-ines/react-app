import { useState } from "react";

export default function Accordion3() {
  const [activeIndex, setActiveIndex] = useState(null);

  const panels = [
    { name: "Boeing", content: "This is Boeing panel." },
    { name: "Airbus", content: "This is Airbus panel." },
    { name: "Bombardier", content: "This is Bombardier panel." },
  ];

  const togglePanels = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  function Panel({ name, children, onToggle, isActive }) {
    return (
      <>
        <h2 onClick={onToggle}>{name}</h2>
        {isActive ? <p>{children}</p> : null}
      </>
    );
  }

  return (
    <>
      {panels.map((panel, index) => (
        <Panel
          name={panel.name}
          key={index}
          isActive={activeIndex === index}
          onToggle={() => togglePanels(index)}
        >
          {panel.content}
        </Panel>
      ))}
    </>
  );
}
