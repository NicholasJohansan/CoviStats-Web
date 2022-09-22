import React from 'react';
import { createStyles, Style } from '../../utils';

const styles: Style = createStyles({
  main: [
    "bg-white",
    "text-watermelon",
    "flex-grow",
    "flex",
    "justify-center",
    "items-center"
  ]
});

const Main: React.FC = () => {
  return (
    <main className={styles.main}>
      Main
    </main>
  );
};

export default Main;