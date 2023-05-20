import { COLOR, FONT } from "@/styles/variable";
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
  display: inline-block;
  font-size: 2.2rem;
  font-family: ${FONT.SUB};
  /* border-bottom: 3px solid ${COLOR.PRIMARY}; */
`;
