'use client'

import { useContext } from "react";
import ThemeContext from "./themeContext";

export default function SiblingComponentB() {
  const { theme } = useContext(ThemeContext);
  console.log('SiblingComponentA', theme);
  return (
    <div>
      <h1>
        Sibling Component A
      </h1>
    </div>
  );
}