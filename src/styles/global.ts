import { createGlobalStyle } from "styled-components";
import { COLOR, FONT } from "./variable";

/**
 * 共通のスタイル
 */
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${COLOR.BLACK};
    background-color: ${COLOR.BGMAIN};
    font-family: ${FONT.MAIN};
  }
  ul,li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    text-decoration: none;
    color: ${COLOR.BLACK};
  }
  h1, h2, h3 {
    margin: 0;
    padding: 0;
  }
`;
