import { AnimatePresence } from 'framer-motion';
import React from 'react';
import useData from '../../hooks/useData';
import useIsMobile from '../../hooks/useIsMobile';
import Api from '../../utils/api';
import { Cases } from '../../utils/api.interfaces';
import { createStyles, Style } from '../../utils/styles';

const styles: Style = createStyles({
  bottomAppBar: [
    "bg-pink",
    "dark:bg-dark-pink",
    "text-pink-fg",
    "dark:text-dark-pink-fg",
    "flex",
    "justify-center",
    "items-center",
    "gap-2",
    "p-3",
    "fixed",
    "bottom-0",
    "w-full"
  ]
});

const BottomAppBar: React.FC = () => {
  const [bottomAppBarHeight, setBottomAppBarHeight] = React.useState(0);
  const bottomAppBar = React.useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    if (bottomAppBar.current) {
      setBottomAppBarHeight(bottomAppBar.current.clientHeight);
    }
  }, [bottomAppBar.current?.clientHeight]);

  const globalCases: Cases | null = useData(Api.getGlobalData);

  return (
    <AnimatePresence>
      { isMobile && <>
        <div className="flex-shrink-0" style={{height: `${bottomAppBarHeight}px`}}></div>
        <aside ref={bottomAppBar} className={styles.bottomAppBar}>
          {globalCases === null
          ? <div className={styles.loading}>Loading...</div>
          : <div>{globalCases.total.toLocaleString('en')} Global Cases </div> }
        </aside>
      </> }
    </AnimatePresence>
  );
};

export default BottomAppBar;