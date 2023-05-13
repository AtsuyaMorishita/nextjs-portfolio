import styled from "styled-components";
import SecTitle from "./SecTitle";
import { categoryType } from "../../../types/microCms";
import Link from "next/link";

type Props = {
  categories: categoryType[];
};

const CategoryArea = ({ categories }: Props) => {
  return (
    <section>
      <SecTitle title="CATEGORY" />
      <ul>
        {categories.map((elem) => (
          <li key={elem.id}>
            <Link href={`/category/${elem.id}`}>
              <span>{elem.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default CategoryArea;
