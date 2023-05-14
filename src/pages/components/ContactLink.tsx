import { COLOR } from "@/styles/variable";
import Link from "next/link";
import styled from "styled-components";

const ContactLink = () => {
  return (
    <div>
      <LinkContact href={"/contact"}>CONTACT</LinkContact>
    </div>
  );
};

export default ContactLink;

const LinkContact = styled(Link)`
  display: block;
  background-color: ${COLOR.SECONDARY};
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  padding: 35px 0;
`;
