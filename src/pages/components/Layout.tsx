import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import ContactLink from "./ContactLink";
import SecProfile from "./SecProfile";

type Props = {
  children: React.ReactNode;
  isContact?: boolean;
  isProfile?: boolean;
};

const Layout = ({ children, isContact, isProfile }: Props) => {
  return (
    <>
      <Header />
      <LayoutMain>{children}</LayoutMain>
      {!isContact && !isProfile && <SecProfile />}
      {!isContact && <ContactLink />}
      <Footer />
    </>
  );
};
export default Layout;

const LayoutMain = styled.main`
  margin-top: 30px;
`;
