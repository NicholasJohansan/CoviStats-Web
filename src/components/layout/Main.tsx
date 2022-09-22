import React from 'react';
import { createStyles, Style } from '../../utils';

const styles: Style = createStyles({
  main: [
    "bg-gray-100",
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