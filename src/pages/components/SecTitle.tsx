import { FONT } from "@/styles/variable";
import styled from "styled-components";

type Props = {
  title: string;
};

/**
 * セクションタイトル
 */
const SecTitle = ({ title }: Props) => {
  return (
    <TitleWrap>
      <TitleText>{title}</TitleText>
    </TitleWrap>
  );
};
export default SecTitle;

const TitleWrap = styled.div`
  text-align: center;
`;

const TitleText = styled.h2`
  font-family: ${FONT.SUB};
`;
