import styled from "styled-components";

const Footer = () => {
  return (
    <FooterArea>
      <p>@2023 atsuya morishita</p>
    </FooterArea>
  );
};
export default Footer;

const FooterArea = styled.footer`
  text-align: center;
  padding: 30px 0;
`;
