export const createStyles = (style: {[key: string]: string[] | string}): Style => {
  for (const key in style) {
    if (Array.isArray(style[key])) {
      style[key] = (style[key] as string[]).join(' ');
    }
  }
  return style as Style;
};

export type Style = {[key: string]: string};