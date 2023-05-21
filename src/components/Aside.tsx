import styled from "styled-components";
import CategoryArea from "./CategoryArea";
import SecProfile from "./SecProfile";
import { mediaQuery } from "@/utils/breakpoints";
import { COLOR } from "@/styles/variable";

const Aside = ({ categories }: any) => {
  return (
    <AsideArea>
      <AsideInner>
        <CategoryArea categories={categories} />
        <SecProfile />
      </AsideInner>
    </AsideArea>
  );
};
export default Aside;

const AsideArea = styled.aside`
  padding: 0 15px;
  margin: 60px auto 0;
  max-width: 400px;
  ${mediaQuery[1]} {
    width: 300px;
    margin: 0 auto 0;
  }
`;

const AsideInner = styled.div`
  border: 1px solid #1d1f202b;
  padding: 3em 1.5em;
`;
