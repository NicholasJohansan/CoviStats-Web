import React from 'react';
import { createStyles, Style } from '../../utils/styles';

const styles: Style = createStyles({
  bottomAppBar: [
    "bg-pink",
    "text-pink-fg",
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

  React.useEffect(() => {
    if (bottomAppBar.current) {
      setBottomAppBarHeight(bottomAppBar.current.clientHeight);
    }
  }, [bottomAppBar]);

  return (
    <>
    <div style={{height: `${bottomAppBarHeight}px`}}></div>
    <aside ref={bottomAppBar} className={styles.bottomAppBar}>
    </aside>
    </>
  );
};

export default BottomAppBar;