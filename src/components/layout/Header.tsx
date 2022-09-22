import React from "react"
import { createStyles, Style } from "../../utils";

const styles: Style = createStyles({
  header: [
    "bg-pink",
    "text-pink-fg",
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