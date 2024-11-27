import { useState } from "react";

export default function Accordion2() {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <>
      <Panel
        name="Cessna"
        isActive={activeIndex === 0}
        onShow={() =>
          setActiveIndex((prevIndex) => (prevIndex === 0 ? null : 0))
        }
      >
        This is a Cessna panel.
      </Panel>
      <Panel
        name="Piper"
        isActive={activeIndex === 1}
        onShow={() =>
          setActiveIndex((prevIndex) => (prevIndex === 1 ? null : 1))
        }
      >
        This is a Piper panel.
      </Panel>
      <Panel
        name="Cirrus"
        isActive={activeIndex === 2}
        onShow={() =>
          setActiveIndex((prevIndex) => (prevIndex === 2 ? null : 2))
        }
      >
        This is a Cirrus panel.
      </Panel>
    </>
  );
}

function Panel({ name, children, isActive, onShow }) {
  return (
    <>
      <h2 onClick={onShow}>{name}</h2>
      {isActive ? <p>{children}</p> : null}
    </>
  );
}
