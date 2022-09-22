import React from "react"
import globalHeaderLogo from "../../assets/svg/global_header_logo.svg"
import useData from "../../hooks/useData";
import Api from "../../utils/api";
import { Cases } from "../../utils/api.interfaces";
import { createStyles, Style } from "../../utils/styles";

const styles: Style = createStyles({
  sidebar: [
    "bg-pink-light",
    "text-pink-light-fg",
    "flex",
    "flex-col",
    "w-64",
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
  ],
  statGroup: [
    "flex",
    "flex-col",
    "text-center",
    "mb-2"
  ],
  statNumber: [
    "text-4xl",
    "font-light",
    "text-black"
  ],
  statLabel: [
    "text-lg"
  ]
});

const Sidebar: React.FC = () => {
  const globalCases: Cases | null = useData(Api.getGlobalData);

  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <span className={styles.text}>Global</span>
        <img src={globalHeaderLogo} alt="Global Header Logo" />
      </header>
      {
      globalCases === null
      ? <span className={styles.loading}>Loading...</span>
      : Object.keys(globalCases).map((key: string) => <div key={key} className={styles.statGroup}>
          <span className={styles.statNumber}>{ globalCases[key].toLocaleString("en") }</span>
          <span className={styles.statLabel}>{ key }</span>
        </div>
      ) 
      }
    </aside>
  );
};

export default Sidebar;