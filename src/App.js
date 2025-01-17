import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  function add() {
    setCount((prevCount) => prevCount + 1);
  }
  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="App">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button
          onClick={subtract}
          className="minus"
          aria-label="Decrease count"
        >
          -
        </button>
        <h2 className="count">{count}</h2>
        <button onClick={add} className="plus" aria-label="Increase count">
          +
        </button>
      </div>
    </div>
  );
}
