import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString();
  const getCurrentDate = time.getDate();
  const getCurrentMonth = time.getMonth() + 1;
  const getCurrentYear = time.getFullYear();

  return (
    <div>
      <h2>Clock</h2>
      <div
        style={{
          width: "250px",
          height: "100px",
          backgroundColor: "beige",
          border: "none",
          borderRadius: "5px",
          boxSizing: "border-box",
          padding: "10px",
        }}
      >
        <p style={{ textAlign: "center", fontSize: "20px" }}>{formattedTime}</p>
        <p
          style={{ textAlign: "center", fontSize: "15px" }}
        >{`${getCurrentDate}/${getCurrentMonth}/${getCurrentYear}`}</p>
      </div>
    </div>
  );
};

export default Clock;
