import { Konkhmer_Sleokchher } from "@next/font/google";

const konkhmer_Sleokchher = Konkhmer_Sleokchher({
  weight: "400",
  variable: "--font-oswald",
  subsets: ["khmer"],
});

/**
 * フォント
 */
export const FONT = {
  MAIN: '"ヒラギノ角ゴ Pro","Hiragino Kaku Gothic Pro","Yu Gothic",YuGothic,"游ゴシック体","メイリオ",Meiryo,"MS Pゴシック","MS PGothic",sans-serif',
  SUB: konkhmer_Sleokchher.style.fontFamily,
};

/**
 * カラー
 */
export const COLOR = {
  BLACK: "#333",
  WHITE: "#fff",
  PRIMARY: "#00B74F",
  SECONDARY: "#E6E6CF",
  SUBCOLOR: "#898781",
  BGMAIN: "#F2F2E9",
};
