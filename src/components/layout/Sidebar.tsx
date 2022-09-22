import React from "react"
import { createStyles, Style } from "../../utils";

const styles: Style = createStyles({
  sidebar: [
    "bg-gray-300",
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