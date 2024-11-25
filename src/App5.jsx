import { useEffect, useState } from "react";

function App5() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); //return code in useEffect runs first so it does cleanup after what it has done before + return code is called every time component unmounts
    };
  }, []);

  return <p>{"Window Width is " + windowWidth}</p>;
}

export default App5;
