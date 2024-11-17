import { Fragment, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [elements, setElements] = useState([
    { id: 0, text: "qwe" },
    { id: 0, text: "qwe" },
  ]);

  function handleClick() {
    setCount(count + 1);
    number += 1;
  }

  return (
    <>
      <ul>
        {elements.map(({ id, text }) => (
          <li
            key={id}
            onClick={() =>
              setElements((el) => el.filter(({ id: elId }) => elId !== id))
            }
          >
            {text}
          </li>
        ))}
      </ul>

      <h1>Counters</h1>
      <MyButton count={count} onClick={handleClick}></MyButton>
      <MyButton count={count} onClick={handleClick}></MyButton>
      <Operations />
    </>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}

export default App;

const Operations = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr([
      { id: 0, text: "first" },
      { id: 1, text: "second" },
    ]);
  }, []);

  return (
    <Fragment>
      {arr.map(({ id, text }) => (
        <Item text={text} setArr={setArr} />
      ))}
    </Fragment>
  );
};

const Item = ({
  text,
  variant = "button",
  setArr = () => {
    console.log(":)");
  },
}) => {
  if (variant === "link") {
    return <a>{text}</a>;
  } else if (variant === "button") {
    return (
      <button onClick={() => setArr([{ id: 0, text: "super" }])}>{text}</button>
    );
  }
};
