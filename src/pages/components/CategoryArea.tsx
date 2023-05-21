import styled from "styled-components";
import SecTitle from "./SecTitle";
import { blogGetCategory, categoryType } from "../../../types/microCms";
import Link from "next/link";
import { COLOR } from "@/styles/variable";
import { mediaQuery } from "@/utils/breakpoints";

type Props = {
  categories: blogGetCategory[];
};

const CategoryArea = ({ categories }: Props) => {
  return (
    <CategorySection>
      <SecTitle title="CATEGORY" />
      <CategoryList>
        {categories &&
          categories.map((elem) => (
            <CategoryItem key={elem.catId}>
              <CategoryLink href={`/category/${elem.catId}`}>
                <span>{elem.catName}</span>
              </CategoryLink>
            </CategoryItem>
          ))}
      </CategoryList>
    </CategorySection>
  );
};
export default CategoryArea;

const CategorySection = styled.section`
  /* ${mediaQuery[1]} {
    margin-top: 0;
  } */
`;

const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 10px auto 0;
  max-width: 400px;
`;

const CategoryItem = styled.li`
  width: 48%;
  text-align: center;
  margin: 0.3em 0;
`;

const CategoryLink = styled(Link)`
  display: block;
  background-color: ${COLOR.SECONDARY};
  font-size: 1.4rem;
  padding: 0.5em;
`;
