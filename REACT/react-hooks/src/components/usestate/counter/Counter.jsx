/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  let [count, setCount] = useState(0);
  console.log(count);

  const Increment = () => {
    if (count === 10) {
      return;
    } else {
      setCount((prev) => prev + 1);
    }
  };

  const Decrement = () => {
    if (count === 0) {
      return;
    } else {
      setCount((prev) => prev - 1);
    }
  };

  const Multiply = () => {
    if (count < 10 && count !== 0) {
      setCount((prev) => prev * 2);
    } else {
      Increment();
    }
  };

  const Divide = () => {
    if (count < 10 && count !== 0) {
      setCount((prev) => prev / 2);
    } else {
      Increment();
    }
  };

  const Addition = () => {
    setCount((add) => add + 10);
  };

  return (
    <div className="counter_box">
      <h2>Current Count Value is : {count}</h2>
      <button className="btn" onClick={Increment}>
        Increment
      </button>
      <button className="btn" onClick={Decrement}>
        Decrement
      </button>
      <button className="btn" onClick={Multiply}>
        Multiply
      </button>
      <button className="btn" onClick={Divide}>
        Divide
      </button>
      <button className="btn" onClick={Addition}>
        Add 10
      </button>
    </div>
  );
};

export default Counter;
