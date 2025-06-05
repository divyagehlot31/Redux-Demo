import React, { useState } from "react";

const heavySum = (n) => {
  let total = 0;
  for (let repeat = 0; repeat < 1000; repeat++) {
    for (let i = 1; i <= n; i++) {
      total += i * i;
    }
  }
  return total;
};

const SlowCounter = () => {
  const [num, setNum] = useState(100);

  const result = heavySum(num);

  return (
    <div>
      <h2> Slow Calculation</h2>
      {/* <input */}
      <input
        style={{
          width: "400px",
          padding: "15px",
          backgroundColor: "white",
          color: "black",
          border: "2px solid white",
          borderRadius: "10px",
          fontSize: "25px",
        }}
        type="number"
        value={num}
        onChange={(e) => setNum(Number(e.target.value))}
        min="1"
        // max="1000"
      />
      <p style={{
          width: "400px",
          padding: "15px",
          // backgroundColor: "white",
          color: "white",
          border: "2px solid white",
          borderRadius: "10px",
          fontSize: "25px"}}>Result: {result}</p>
    </div>
  );
};

export default SlowCounter;
