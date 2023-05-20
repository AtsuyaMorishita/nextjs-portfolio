import { FONT } from "@/styles/variable";
import { mediaQuery } from "@/utils/breakpoints";
import styled from "styled-components";

type Props = {
  text: string;
};

/**
 * セクションリード文
 */
const SecLead = ({ text }: Props) => {
  return (
    <LeadWrap>
      <LeadText>{text}</LeadText>
    </LeadWrap>
  );
};
export default SecLead;

const LeadWrap = styled.div`
  text-align: center;
`;

const LeadText = styled.h2`
  font-size: 1.4rem;
  font-family: ${FONT.SUB};
  font-weight: 400;

  ${mediaQuery[1]} {
    font-size: 1.6rem;
  }
`;
