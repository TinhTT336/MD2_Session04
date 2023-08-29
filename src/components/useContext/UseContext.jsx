import React, { createContext, useState } from "react";
import Comp_A from "./Comp_A";
// Comp_A =>Comp_B=>Comp_C
// tu A truyen xuong B qua props
// tu B xuong C qua props

// khai bao context o component va export ra ben ngoai de su dung
export const ThemeContext = createContext(); //buoc 1

export default function UseContext() {
  const [theme, setTheme] = useState("light");
  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    // buoc 2
    <ThemeContext.Provider value={theme}>
      <>
        <button onClick={handleChangeTheme}>Change theme</button>
        <Comp_A />
      </>
    </ThemeContext.Provider>
  );
}
