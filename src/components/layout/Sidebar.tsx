import React from "react"
import { createStyles, Style } from "../../utils";

const styles: Style = createStyles({
  sidebar: [
    "bg-pink-light",
    "text-pink-light-fg",
    "flex",
    "justify-center",
    "items-center",
    "w-64"
  ]
});

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      Sidebar
    </aside>
  );
};

export default Sidebar;