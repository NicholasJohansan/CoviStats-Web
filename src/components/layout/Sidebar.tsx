import React from "react"
import useData from "../../hooks/useData";
import Api from "../../utils/api";
import { Cases } from "../../utils/api.interfaces";
import { createStyles, Style } from "../../utils/styles";
import StatGroup from "../StatGroup";
import { GlobeIcon } from "../icons";

const styles: Style = createStyles({
  sidebar: [
    "bg-pink-light",
    "dark:bg-dark-pink-light",
    "text-pink-light-fg",
    "dark:text-dark-pink-light-fg",
    "px-4",
    "flex",
    "flex-col",
    "gap-4"
  ],
  header: [
    "w-full",
    "text-center",
    "py-4",
    "text-4xl",
    "font-light",
    "flex",
    "justify-center",
    "items-center",
    "gap-2"
  ],
  text: [
    "relative",
    "top-1"
  ],
  loading: [
    "w-full",
    "text-center"
  ]
});

const Sidebar: React.FC = () => {
  const globalCases: Cases | null = useData(Api.getGlobalData);

  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <span className={styles.text}>Global</span>
        <GlobeIcon />
      </header>
      {
      globalCases === null
      ? <span className={styles.loading}>Loading...</span>
      : Object.keys(globalCases).map((key: string) =>
        <StatGroup key={key} number={globalCases[key]} label={key} />
      ) 
      }
    </aside>
  );
};

export default Sidebar;