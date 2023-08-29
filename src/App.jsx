import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseState_Comp from "./components/useState/UseState_Comp";
import UseContext from "./components/useContext/UseContext";
import UseEffect from "./components/useEffect/UseEffect";
import UseReducer from "./components/useReducer/UseReducer";
import ToDoList from "./components/Homework/ToDoList";
import CountClick from "./components/Homework/CountClick";
import CountText from "./components/Homework/CountText";
import CountTime from "./components/Homework/CountTime";
import ManagerStudents from "./components/Homework/ManagerStudents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <UseState_Comp /> */}
      {/* <UseContext /> */}
      {/* <UseEffect /> */}
      {/* <UseReducer /> */}
      {/* <ToDoList /> */}
      {/* <CountClick /> */}
      {/* <CountText /> */}
      {/* <CountTime /> */}
      <ManagerStudents />
    </>
  );
}

export default App;
