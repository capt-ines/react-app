import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Counters</h1>
      <MyButton></MyButton>
      <MyButton></MyButton>
    </div>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Clicked {count} times</button>;
}
export default App;
