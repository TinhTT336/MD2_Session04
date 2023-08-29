import React, { useState } from "react";
// Tạo một ứng dụng đếm số lần click vào nút với React Hook
export default function CountClick() {
  const [count, setCount] = useState(0);
  const handleCountClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>Count: {count} </h2>
      <button onClick={handleCountClick}>Click</button>
    </>
  );
}
