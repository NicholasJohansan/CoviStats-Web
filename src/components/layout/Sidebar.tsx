import React, { useEffect } from "react"
import useData from "../../hooks/useData";
import Api from "../../utils/api";
import { Cases } from "../../utils/api.interfaces";
import { createStyles, Style } from "../../utils/styles";
import StatGroup from "../StatGroup";
import { GlobeIcon } from "../icons";
import useIsMobile from "../../hooks/useIsMobile";
import { motion, AnimatePresence, Variants, useAnimationControls } from "framer-motion";

const styles: Style = createStyles({
  sidebar: [
    "bg-pink-light",
    "dark:bg-dark-pink-light",
    "text-pink-light-fg",
    "dark:text-dark-pink-light-fg",
    "flex",
    "flex-col",
    "gap-4"
  ],
  header: [
    "text-center",
    "py-4",
    "px-10",
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

const variants: Variants = {
  initial: {
    maxWidth: 0
  },
  show: {
    maxWidth: "40%",
    transition: {
      duration: 0.6,
      staggerChildren: 0.2,
      delayChildren: 0.5
    }
  }
}

const Sidebar: React.FC = () => {
  const globalCases: Cases | null = useData(Api.getGlobalData);
  const isMobile = useIsMobile();

  return (
    <AnimatePresence>
      { !isMobile &&
      <motion.aside
        layout
        className={styles.sidebar}
        key="sidebar"
        variants={variants}
        initial="initial"
        animate="show">
        <motion.header initial={{opacity: 0}} animate={{opacity: 1}} className={styles.header}>
          <span className={styles.text}>Global</span>
          <GlobeIcon />
        </motion.header>
        { globalCases === null
        ? <span className={styles.loading}>Loading...</span>
        : Object.keys(globalCases).map((key: string) =>
          <StatGroup key={key} number={globalCases[key]} label={key} />
        ) }
      </motion.aside> }
    </AnimatePresence>
  );
};

export default Sidebar;