import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <LayoutMain>{children}</LayoutMain>
      <Footer />
    </>
  );
};
export default Layout;

const LayoutMain = styled.main`
  margin-top: 30px;
`;
