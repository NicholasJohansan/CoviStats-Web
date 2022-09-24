import React from "react";
import { createStyles, Style } from "../utils/styles";
import { motion, Variants } from "framer-motion";

const styles: Style = createStyles({
  statGroup: [
    "flex",
    "flex-col",
    "text-center",
    "mb-2",
    "px-4"
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

const variants: Variants = {
  initial: {
    maxWidth: 0,
    opacity: 0,
  },
  show: {
    maxWidth: "200%",
    opacity: 1,
  }
}

const StatGroup: React.FC<StatGroupProps> = ({ number, label }) => {
  return (
    <motion.div
      className={styles.statGroup}
      variants={variants}>
      <motion.span className={styles.statNumber}>{ number.toLocaleString("en") }</motion.span>
      <motion.span className={styles.statLabel}>{ label }</motion.span>
    </motion.div>
  );
};

export default StatGroup;