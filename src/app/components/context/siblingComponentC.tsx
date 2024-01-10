'use client'


import { useContext } from "react";
import ThemeContext from "./themeContext";

export default function SiblingComponentC() {
  const { theme } = useContext(ThemeContext);
  console.log('SiblingComponentC', theme);
  return (
    <div>
      <h1>
        Sibling Component A
      </h1>
    </div>
  );
}