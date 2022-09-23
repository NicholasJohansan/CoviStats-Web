import React, { useState, useEffect } from "react";
import { createStyles, Style } from "../utils/styles";
import { SunIcon, MoonIcon } from "./icons";

const styles: Style = createStyles({
  container: [
    "flex",
    "items-center",
    "gap-2",
    "bg-watermelon",
    "dark:bg-dark-watermelon",
    "text-white",
    "px-4",
    "py-1",
    "rounded-full",
    "cursor-pointer",
  ],
  text: [
    "relative",
    "top-[0.15rem]"
  ]
});

const DarkModeToggle: React.FC = () => {
  const darkMode = localStorage.getItem('darkMode');
  const browserPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(darkMode === null ? browserPrefersDark : darkMode === 'true');

  useEffect(() => {
    if (isDarkMode) {
      window.document.documentElement.classList.add('dark');
    } else {
      window.document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    localStorage.setItem('darkMode', (!isDarkMode).toString());
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div
      className={styles.container}
      onClick={toggleDarkMode}>
      <span className={styles.text}>{ isDarkMode ? "Light" : "Dark" } Mode</span>
      { isDarkMode ? <SunIcon /> : <MoonIcon /> }
    </div>
  );
};

export default DarkModeToggle;