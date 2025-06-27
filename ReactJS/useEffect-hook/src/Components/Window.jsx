import { useEffect, useState } from "react";

const Window = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h1>Window Size Tracker</h1>
      <h4>Current window width is: {windowSize.width} px</h4>
      <h4>Current window height is: {windowSize.height} px</h4>
    </div>
  );
};

export default Window;
