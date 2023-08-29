import React, { useState } from "react";
// Tạo một ứng dụng đếm số ký tự trong một đoạn văn bản với React Hook
export default function CountText() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleCountText = () => {
    let newText = text.trim().split("");
    console.log(newText);
    setCount(newText.length);
    setText("");
  };
  return (
    <>
      <h2>Count: {count} </h2>
      <input
        style={{ padding: 12, width: "50%" }}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleCountText}>Click</button>
      <p>{text}</p>
    </>
  );
}
