import React, { useState } from "react";
const totals = [100, 200, 300, 400];
export default function UseState_Comp() {
  // pham vi viet code JS
  const [count, setCount] = useState(() => {
    console.log("initial running...");
    // doi voi initialState la 1 callback thi no se lay gia tri duoc return tu callback lam initialState
    const totalCount = totals.reduce((prevValue, currentValue) => {
      return prevValue + currentValue;
    }, 0);
    return totalCount;
  });

  console.log("re-render");
  // ham xu ly tang
  const handleCount = () => {
    // cap nhat lai gia tri cua state
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 2);
    // setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);
  };
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleCount}>Increase</button>
    </>
  );
}
