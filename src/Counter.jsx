import { useState, useEffect, Fragment } from "react";

function Counter() {
  const [count, setCount] = useState(() => 100);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <Fragment>
      <p>choose your speed:</p>
      <button onClick={decrementCount}>-</button>
      <p>{count + " kts"}</p>
      <button onClick={incrementCount}>+</button>
    </Fragment>
  );
}

export default Counter;
