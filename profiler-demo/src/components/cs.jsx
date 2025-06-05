import React, { useMemo, useState } from "react";

const hsum = (n) => {
  let total = 0;

  for (let r = 0; r < 1000; r++) {
    for (let i = 1; i <= n; i++) total += i * i;
  }
  return total;
};

function FastCounter() {
  const [rank, setrank] = useState();

const result = useMemo(()=> hsum(rank) , [rank]); 

  return <div>
    <input         onChange={(e) => setrank(Number(e.target.value))}
style={{padding : "20px"}}>
    </input>
    {result}</div>;
}

export default FastCounter;
