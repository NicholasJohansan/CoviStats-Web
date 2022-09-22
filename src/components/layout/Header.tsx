import React from "react"
import { createStyles, Style } from "../../utils";

const styles: Style = createStyles({
  header: [
    "bg-gray-200",
    "h-10",
    "flex",
    "justify-center",
    "items-center"
  ]
});

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      Header
    </header>
  );
}

export default Header;