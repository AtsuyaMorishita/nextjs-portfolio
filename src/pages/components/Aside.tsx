import styled from "styled-components";
import CategoryArea from "./CategoryArea";
import SecProfile from "./SecProfile";
import { mediaQuery } from "@/utils/breakpoints";

const Aside = ({ categories }: any) => {
  return (
    <AsideArea>
      <SecProfile />
      <CategoryArea categories={categories} />
    </AsideArea>
  );
};
export default Aside;

const AsideArea = styled.aside`
  width: min(100%, 300px);
  margin: 0 auto;

  ${mediaQuery[1]} {
    padding: 0 1em;
  }
`;
