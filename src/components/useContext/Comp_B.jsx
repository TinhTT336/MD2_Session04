import React, { useContext } from "react";
import { ThemeContext } from "./UseContext"; // buoc 3
export default function Comp_B() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <p className={theme}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        praesentium a error sapiente nisi! Maxime, quasi culpa nobis porro
        consectetur et! Tempora iure deserunt eaque enim quidem sunt similique
        doloribus.
      </p>
    </div>
  );
}
