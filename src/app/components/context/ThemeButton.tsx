'use client'

import { useContext } from "react";
import ThemeContext from "./themeContext";

export default function ThemeButton() {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>ThemeButton</button>;
}