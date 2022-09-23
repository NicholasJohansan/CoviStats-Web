import { createStyles, Style } from '../../utils/styles';

// Filter Icons
export { default as AToZIcon } from './AToZIcon';
export { default as ZToAIcon } from './ZToAIcon';
export { default as AscendingCasesIcon } from './AscendingCasesIcon';
export { default as DescendingCasesIcon } from './DescendingCasesIcon';

// Mode Icons
export { default as SunIcon } from './SunIcon';
export { default as MoonIcon } from './MoonIcon';

// Icons
export { default as CloseIcon } from './CloseIcon';
export { default as SearchIcon } from './SearchIcon';
export { default as GlobeIcon } from './GlobeIcon';
export { default as CoviStatsIcon } from './CoviStatsIcon';

export const iconStyles: Style = createStyles({
  filterIcon: [
    "w-9",
    "h-9",
    "sm:w-10",
    "sm:h-10",
    "cursor-pointer",
    "hover:scale-105",
    "transition-all",
    "active:scale-95"
  ],
  filterIconBackground: [
    "fill-watermelon",
    "dark:fill-dark-watermelon"
  ],
  modeIcon: [
    "h-4",
    "w-4",
    "fill-white"
  ]
});