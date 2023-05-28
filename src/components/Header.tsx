import { COLOR, FONT } from "@/styles/variable";
import Link from "next/link";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderArea>
      <HeaderLogoWrap>
        <HeaderLogo href={"/"} scroll={false}>
          ATSUYA BLOG
        </HeaderLogo>
      </HeaderLogoWrap>
      <HeaderNavList>
        <HeaderNavItem>
          <HeaderNavLinkBlog href="/" scroll={false}>
            BLOG
          </HeaderNavLinkBlog>
        </HeaderNavItem>
        <HeaderNavItem>
          <HeaderNavLink href="/myApp" scroll={false}>
            MYAPP
          </HeaderNavLink>
        </HeaderNavItem>
        <HeaderNavItem>
          <HeaderNavLink href="/profile" scroll={false}>
            PROFILE
          </HeaderNavLink>
        </HeaderNavItem>
      </HeaderNavList>
    </HeaderArea>
  );
};
export default Header;

const HeaderLogoWrap = styled.div`
  text-align: center;
`;

const HeaderArea = styled.header`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  padding: 1em 0;
  border-bottom: 1px solid #5c93bb2b;
`;

const HeaderLogo = styled(Link)`
  display: inline-block;
  text-align: center;
  font-weight: bold;
  font-size: 2.2rem;
  font-family: ${FONT.SUB};
`;

const HeaderNavList = styled.ul`
  display: flex;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: bold;
  max-width: 300px;
  margin: 8px auto 0;
`;

const HeaderNavItem = styled.li`
  width: 33.3%;
  text-align: center;
  &:not(:first-child) {
    border-left: 1px solid ${COLOR.SUBCOLOR};
  }
`;

const HeaderNavLink = styled(Link)`
  display: block;
  width: 100%;
`;

const HeaderNavLinkBlog = styled(HeaderNavLink)`
  pointer-events: none;
  opacity: 0.4;
`;
