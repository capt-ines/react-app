import { useState } from "react";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Panel
        name="Cessna"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex((prevIndex) => (prevIndex = 0))}
      >
        This is a Cessna panel.
      </Panel>
      <Panel
        name="Cirrus"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex((prevIndex) => (prevIndex = 1))}
      >
        This is a Cirrus panel.
      </Panel>
    </>
  );
}

function Panel({ name, children, onShow, isActive }) {
  return (
    <>
      <h2>{name}</h2>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </>
  );
}

// function Accordion() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <>
//       <Panel
//         title="Cessna"
//         isActive={activeIndex === 0}
//         onShow={() => setActiveIndex((prevIndex) => (prevIndex = 0))}
//       >
//         This is Cessna panel
//       </Panel>

//       <Panel
//         title="Cirrus"
//         isActive={activeIndex === 1}
//         onShow={() => setActiveIndex((prevIndex) => (prevIndex = 1))}
//       >
//         This is Cirrus panel
//       </Panel>
//     </>
//   );
// }

// function Panel({ title, children, isActive, onShow }) {
//   return (
//     <div>
//       <h3>{title}</h3>
//       {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
//     </div>
//   );
// }

// export default Accordion;

//{Lifting state up}
// How It Works:
// Initial Render:
// The Accordion component renders two Panel components with activeIndex set to 0.
// The first panel (About) is active because activeIndex === 0.
// The content for the "About" section is shown.
// The "Etymology" section displays a "Show" button.
// Interaction:
// When the "Show" button in the "Etymology" panel is clicked:
// onShow is triggered, calling setActiveIndex(1).
// This updates activeIndex to 1, re-rendering the component.
// Updated State:
// Now activeIndex === 1, so:
// The "Etymology" section displays its content.
// The "About" section displays a "Show" button.
