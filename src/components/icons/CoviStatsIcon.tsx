import React from "react";
import { createStyles, Style } from "../../utils/styles";

const styles: Style = createStyles({
  icon: [
    "h-8",
    "w-8",
  ]
});

const CoviStatsIcon: React.FC = () => {
  return (
    <svg className={styles.icon} width="58.5" height="58.5" version="1.1" viewBox="0 0 15.478 15.478" xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(.44648 0 0 .44646 5.4276 242.2)" stroke-width="0">
        <g>
          {/* <!-- Bar 1 --> */}
          <rect x="-6.8874" y="-516.8" width="4.1664" height="4.8266" ry="1.1628" fill="#ff9a9a"/>
          {/* <!-- Bar 2 --> */}
          <rect x="-1.9559" y="-520.77" width="4.1664" height="8.7975" ry="1.4189" fill="#ff8b8b"/>
          {/* <!-- Bar 3 --> */}
          <rect x="2.9757" y="-528.31" width="4.1664" height="16.34" ry="1.2929" fill="#ff7979"/>
          {/* <!-- Bar 4 --> */}
          <rect x="7.997" y="-534.48" width="4.1664" height="22.503" ry="1.5864" fill="#ff5858"/>
          {/* <!-- Bar 5 --> */}
          <rect x="13.108" y="-538.57" width="4.1664" height="26.602" ry="1.8754" fill="#f44"/>
        </g>
      </g>
    </svg>
  );
};

export default CoviStatsIcon;