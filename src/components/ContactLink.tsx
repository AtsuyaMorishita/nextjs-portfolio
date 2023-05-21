import { COLOR, FONT } from "@/styles/variable";
import { mediaQuery } from "@/utils/breakpoints";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const ContactLink = () => {
  return (
    <ContactWrap>
      <LinkContact href={"/contact"}>
        CONTACT
        <LinkContactIcon
          src="/img/icon_link.png"
          width={24}
          height={24}
          alt="View More"
        />
      </LinkContact>
    </ContactWrap>
  );
};
export default ContactLink;

const ContactWrap = styled.div`
  margin-top: 60px;
`;

const LinkContactIcon = styled(Image)`
  margin-left: 10px;
`;

const LinkContact = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLOR.SECONDARY};
  font-family: ${FONT.SUB};
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  padding: 35px 0;

  ${mediaQuery[1]} {
    font-size: 2.6rem;
    padding: 50px 0;
  }
`;
