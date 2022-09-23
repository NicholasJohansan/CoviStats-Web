import React from "react";
import { createStyles, Style } from "../utils/styles";

const styles: Style = createStyles({
  statGroup: [
    "flex",
    "flex-col",
    "text-center",
    "mb-2"
  ],
  statNumber: [
    "text-4xl",
    "font-light",
    "text-black",
    "dark:text-white"
  ],
  statLabel: [
    "text-lg"
  ]
});

interface StatGroupProps {
  number: number;
  label: string;
}

const StatGroup: React.FC<StatGroupProps> = ({ number, label }) => {
  return (
    <div className={styles.statGroup}>
      <span className={styles.statNumber}>{ number.toLocaleString("en") }</span>
      <span className={styles.statLabel}>{ label }</span>
    </div>
  );
};

export default StatGroup;