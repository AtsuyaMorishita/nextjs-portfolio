import { createGlobalStyle } from "styled-components";
import { COLOR, FONT } from "./variable";

/**
 * 共通のスタイル
 */
export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    color: ${COLOR.BLACK};
    background-color: ${COLOR.BGMAIN};
    font-family: ${FONT.MAIN};
    font-size: 1.4rem;
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
  p {
    margin: 0;
  }
  h1, h2, h3 {
    margin: 0;
    padding: 0;
  }
  figure {
    margin: 0;
  }
`;
