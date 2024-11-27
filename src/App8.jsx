import { useState } from "react";

export default function Accordion2() {
  const [activeIndex, setActiveIndex] = useState(null);

  const panels = [
    { name: "Cessna", content: "This is a Cessna panel." },
    { name: "Piper", content: "This is a Piper panel." },
    { name: "Cirrus", content: "This is a Cirrus panel." },
  ];

  const togglePanel = (index) => {
    //prosta funkcja toggle
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    //mapa returnuje Panel component z datą z array panels
    <>
      {panels.map((panel, index) => (
        <Panel
          key={index}
          name={panel.name}
          isActive={activeIndex === index}
          onToggle={() => togglePanel(index)}
        >
          {panel.content}
        </Panel>
      ))}
    </>
  );
}

function Panel({ name, children, isActive, onToggle }) {
  return (
    <>
      <h2 onClick={onToggle}>{name}</h2>
      {isActive ? <p>{children}</p> : null}
    </>
  );
}
