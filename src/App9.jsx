import { useMemo, useState } from "react";

export default function Accordion3() {
  const [activeIndex, setActiveIndex] = useState(null);

  const panels = useMemo(
    () => [
      { name: "Boeing", content: "This is Boeing panel." },
      { name: "Airbus", content: "This is Airbus panel." },
      { name: "Bombardier", content: "This is Bombardier panel." },
    ],
    [activeIndex]
  );

  const togglePanels = (index) =>
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));

  function Panel({ name, children, onToggle, isActive }) {
    return (
      <>
        <h2 onClick={onToggle} type="button">
          {name}
        </h2>
        {isActive ? <p>{children}</p> : null}
      </>
    );
  }

  return panels.map(({ name, content }, index) => (
    <Panel
      name={name}
      key={index}
      isActive={activeIndex === index}
      onToggle={() => togglePanels(index)}
    >
      {content}
    </Panel>
  ));
}
