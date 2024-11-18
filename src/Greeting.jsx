import { Fragment } from "react";
import "./Greeting.css";

function Greeting({ username, isLoggedIn }) {
  const welcome = <h1 className="logged">Hello {username}!</h1>;
  const log = <h1 className="unlogged">Please log in!</h1>;

  return isLoggedIn ? welcome : log;
}

export default Greeting;
