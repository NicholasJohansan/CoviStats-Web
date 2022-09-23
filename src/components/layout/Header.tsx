import React from "react";
import { createStyles, Style } from "../../utils/styles";
import DarkModeToggle from "../DarkModeToggle";
import { CoviStatsIcon } from "../icons";

const styles: Style = createStyles({
  header: [
    "bg-pink",
    "dark:bg-dark-pink",
    "text-pink-fg",
    "dark:text-dark-pink-fg",
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
  text: [
    "relative",
    "top-[0.4rem]"
  ]
});

const Header: React.FC = () => {

  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <h1 className={styles.text}>CoviStats</h1>
        <CoviStatsIcon />
      </div>
      <DarkModeToggle />
    </header>
  );
};

export default Header;