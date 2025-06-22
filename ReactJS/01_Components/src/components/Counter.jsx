import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
    console.log("Increment button clicked");
  }

  function handleDecrement() {
    setCount(count - 1);
    console.log("Decrement button clicked");
  }

  return (
    <>
      <h1>Counter Application</h1>

      <h4>Count: {count}</h4>
      <button
        onClick={handleIncrement}
        // onClick={() => (
        //   setCount(count + 1), console.log("Increment button clicked")
        // )}
      >
        Increment
      </button>
      <button
        onClick={handleDecrement}
        // onClick={() => (
        //   setCount(count - 1), console.log("Decrement button clicked")
        // )}
      >
        Decrement
      </button>
    </>
  );
};

export default Counter;
