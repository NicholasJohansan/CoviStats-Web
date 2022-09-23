import React, { useEffect, useState } from "react"
import { createStyles, Style } from "../../utils/styles";
import { CoviStatsIcon, SunIcon, MoonIcon } from "../icons";

const styles: Style = createStyles({
  header: [
    "bg-pink",
    "text-pink-fg",
    "flex",
    "justify-between",
    "items-center",
    "py-2",
    "px-4",
    "select-none"
  ],
  headerLeft: [
    "flex",
    "items-center",
    "gap-1",
    "text-2xl",
  ],
  headerRight: [
    "flex",
    "items-center",
    "gap-2",
    "bg-watermelon",
    "text-white",
    "px-4",
    "py-1",
    "rounded-full",
    "cursor-pointer",
  ],
  text: [
    "relative",
    "top-[0.4rem]"
  ],
  modeText: [
    "relative",
    "top-[0.15rem]"
  ]
});

const Header: React.FC = () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [isDarkMode, setIsDarkMode] = useState<boolean>(prefersDark);

  useEffect(() => {
    if (isDarkMode) {
      window.document.documentElement.classList.add('dark');
    } else {
      window.document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        {/* Left */}
        <h1 className={styles.text}>CoviStats</h1>
        <CoviStatsIcon />
      </div>
      <div
        className={styles.headerRight}
        onClick={() => setIsDarkMode(!isDarkMode)}>
        {/* Right */}
        <span className={styles.modeText}>{ isDarkMode ? "Light" : "Dark" } Mode</span>
        { isDarkMode ? <SunIcon /> : <MoonIcon /> }
      </div>
    </header>
  );
};

export default Header;