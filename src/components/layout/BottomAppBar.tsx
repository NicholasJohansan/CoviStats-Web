import React from 'react';
import { createStyles, Style } from '../../utils/styles';

const styles: Style = createStyles({
  bottomAppBar: [
    "bg-pink",
    "text-pink-fg",
    "flex",
    "justify-center",
    "items-center",
    "p-1",
    "fixed",
    "bottom-0",
    "w-full"
  ]
});

const BottomAppBar: React.FC = () => {
  return (
    <aside className={styles.bottomAppBar}>
      BottomAppBar
    </aside>
  );
};

export default BottomAppBar;