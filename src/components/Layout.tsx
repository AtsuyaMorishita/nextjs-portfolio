import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import ContactLink from "./ContactLink";
import SecProfile from "./SecProfile";
import { mediaQuery } from "@/utils/breakpoints";

type Props = {
  children: React.ReactNode;
  isContact?: boolean;
  isProfile?: boolean;
  isBlog?: boolean;
};

const Layout = ({ children, isContact, isProfile, isBlog = false }: Props) => {
  return (
    <>
      <Header />
      <LayoutMain isBlog={isBlog}>{children}</LayoutMain>
      {/* {!isContact && !isProfile && <SecProfile />} */}
      {!isContact && <ContactLink />}
      <Footer />
    </>
  );
};
export default Layout;

const LayoutMain = styled.main<{ isBlog: boolean }>`
  margin-top: 130px;

  ${mediaQuery[1]} {
    ${(props) =>
      props.isBlog &&
      `display: flex; justify-content: space-between; padding: 0 30px;`}
    max-width: 1240px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 160px;
  }
`;
