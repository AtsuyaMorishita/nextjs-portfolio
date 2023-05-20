// メディアクエリ
export const breakpoints = [768, 1024];

export const mediaQuery = breakpoints.map(
  (bp) => `@media screen and (min-width: ${bp}px)`
);
