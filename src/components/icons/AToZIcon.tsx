import React from "react";
import { iconStyles } from ".";

const AToZIcon: React.FC = () => {
  return (
    <svg className={iconStyles.filterIcon} width="40" height="40" version="1.1" viewBox="0 0 10.583 10.583" xmlns="http://www.w3.org/2000/svg">
      {/* <!-- Background --> */}
      <rect x=".024412" y=".024413" width="10.535" height="10.535" ry="2.7843" fill="#ff7070" stroke="#ff7070" stroke-width=".048825"/>
      {/* <!-- Alphabet A --> */}
      <g stroke-width=".46884" aria-label="A">
        <path d="m1.8854 8.0978 2.2504-5.5586h0.030006l2.2505 5.5586h-0.41258l-1.9579-4.9735 0.25505-0.14253-2.0479 5.116zm1.0877-2.1079h2.363l0.10502 0.34507h-2.558z" fill="#fff" stroke-width=".46884"/>
      </g>
      {/* <!-- Arrow Tip --> */}
      <g transform="scale(1,-1)" stroke-width=".46884" aria-label="^">
        <path d="m8.4773-7.133q-0.097519-0.14253-0.21004-0.30006-0.11252-0.16503-0.23255-0.33007-0.11252-0.16503-0.21004-0.30756-0.097519 0.14253-0.21004 0.30756t-0.22504 0.33007q-0.11252 0.15753-0.21004 0.30006h-0.25505q0.22504-0.33757 0.45009-0.67513 0.22504-0.34507 0.45009-0.68264 0.22504 0.33757 0.45009 0.68264 0.23255 0.33757 0.45759 0.67513z" fill="#fff" stroke-width=".46884"/>
      </g>
      {/* <!-- Arrow Stick --> */}
      <g transform="scale(1.0837 -.92275)" stroke-width=".43263" aria-label="|">
        <path d="m7.0714-8.7536h0.30457v6.4859h-0.30457z" fill="#fff" stroke-width=".43263"/>
      </g>
    </svg>
  );
};

export default AToZIcon;