import React, { useState, useMemo } from "react";

// Simulate an expensive factorial function
function slowFactorial(n) {
  console.log("Computing factorial...");
  let result = 1;
  for (let i = 1; i <= n; i++) {
    // Simulate slowness
    for (let j = 0; j < 10000000; j++) {}
    result *= i;
  }
  return result;
}

const SlowCalculation = () => {
  const [number, setNumber] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  //  Memoized result
  const factorial = useMemo(() => slowFactorial(number), [number]);

  const themeStyles = {
    backgroundColor: darkMode ? "#222" : "#fff",
    color: darkMode ? "#fff" : "#000",
    padding: "20px",
    margin: "10px",
    borderRadius: "10px",
  };

  return (
    <div style={themeStyles}>
      <h2>Slow Factorial Calculator (with useMemo)</h2>

      <label>Enter a number:</label>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <br />
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Theme (Just causes re-render)
      </button>

      <h3>Factorial: {factorial}</h3>
    </div>
  );
};

export default SlowCalculation;
