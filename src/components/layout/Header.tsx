import React, { useEffect, useState } from "react"
import headerLogo from '../../assets/svg/header_logo.svg';
import { createStyles, Style } from "../../utils/styles";

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
    "gap-2",
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
    "top-[0.15rem]"
  ],
  logo: [
    "h-8",
    "w-8",
  ],
  modeIcon: [
    "h-4",
    "w-4",
    "fill-white"
  ]
});

// <!-- React Icons (IoMdSunny) -->
const SunIcon: React.FC = () => {
  return (
    <svg className={styles.modeIcon} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M277.3 32h-42.7v64h42.7V32zm129.1 43.7L368 114.1l29.9 29.9 38.4-38.4-29.9-29.9zm-300.8 0l-29.9 29.9 38.4 38.4 29.9-29.9-38.4-38.4zM256 128c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128zm224 106.7h-64v42.7h64v-42.7zm-384 0H32v42.7h64v-42.7zM397.9 368L368 397.9l38.4 38.4 29.9-29.9-38.4-38.4zm-283.8 0l-38.4 38.4 29.9 29.9 38.4-38.4-29.9-29.9zm163.2 48h-42.7v64h42.7v-64z"></path>
    </svg>
  );
};

// <!-- React Icons (IoMdMoon) -->
const MoonIcon: React.FC = () => {
  return (
    <svg className={styles.modeIcon} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M195 125c0-26.3 5.3-51.3 14.9-74.1C118.7 73 51 155.1 51 253c0 114.8 93.2 208 208 208 97.9 0 180-67.7 202.1-158.9-22.8 9.6-47.9 14.9-74.1 14.9-106 0-192-86-192-192z"></path>
    </svg>
  );
};

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
        {/* TODO: Remove icon or Make simpler one */}
        <img className={styles.logo} src={headerLogo} draggable="false" />
      </div>
      <div
        className={styles.headerRight}
        onClick={() => setIsDarkMode(!isDarkMode)}>
        {/* Right */}
        <span className={styles.text}>{ isDarkMode ? "Light" : "Dark" } Mode</span>
        { isDarkMode ? <SunIcon /> : <MoonIcon /> }
      </div>
    </header>
  );
};

export default Header;