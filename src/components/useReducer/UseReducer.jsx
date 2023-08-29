import React, { useReducer, useState } from "react";
// useState
//+ khai bao gia tri khoi tao
// + bat su kien tang giam va xu ly

// useReducer
// + khai bao gia tri khoi tao
// + bat su kien tang giam va xu ly
// + tao reducer de xu ly logic
// + truyen dispatch

// buoc 1: khai bao gia tri khoi tao
const initialValue = 0;

// buoc 2: tao cac hanh dong
const UP_ACTION = "up";
const DOWN_ACTION = "down";

// Buoc 3: tao ham reducer
/**
 * ham reducer
 * @param {*} state state hien tai
 * @param {*} action hanh dong
 */
const reducer = (state, action) => {
  //   console.log(action);
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      return state;
  }
};

export default function UseReducer() {
  // buoc 4: truyen dispatch
  const [count, dispatch] = useReducer(reducer, initialValue);

  // dung useState
  // const [count, setCount] = useState(0);
  //   // ham xu ly tang
  //   const handleIncrease = () => {
  //     setCount(count + 1);
  //   };
  //   // ham xu ly giam
  //   const handleDecrease = () => {
  //     setCount(count - 1);
  //   };
  return (
    <>
      <h3>Count: {count}</h3>
      <div>
        {/* <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button> */}
        <button onClick={() => dispatch(UP_ACTION)}>Increase</button>
        <button onClick={() => dispatch(DOWN_ACTION)}>Decrease</button>
      </div>
    </>
  );
}
