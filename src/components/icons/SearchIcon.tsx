import React from "react";
import { createStyles, Style } from "../../utils/styles";

const styles: Style = createStyles({
  icon: [
    "w-9",
    "h-9"
  ],
  lens: [
    "stroke-watermelon",
    "fill-watermelon-fg",
    "dark:stroke-dark-watermelon",
    "dark:fill-dark-watermelon-fg"
  ],
  handle: [
    "fill-watermelon",
    "dark:fill-dark-watermelon"
  ]
});

const SearchIcon: React.FC = () => {
  return (
    <svg className={styles.icon} width="40" height="40" version="1.1" viewBox="0 0 10.583 10.583" xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(1.1619 0 0 1.1619 332 603.84)">
        {/* <!-- Lens --> */}
        <circle className={styles.lens} transform="rotate(-5.896)" cx="-227.58" cy="-542.52" r="3.0945" fill="#ff6d6d" fillOpacity="1" stroke="#ff7070" strokeWidth=".62794"/>
        {/* <!-- Handle --> */}
        <rect className={styles.handle} transform="rotate(-43.095)" x="146.26" y="-566.95" width=".84138" height="4.7556" ry=".42069" fill="#ff7070" strokeWidth="0"/>
      </g>
    </svg>
  );
};

export default SearchIcon;