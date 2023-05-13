import { COLOR } from "@/styles/variable";
import Link from "next/link";
import styled from "styled-components";
import { blogType } from "../../../types/microCms";
import SecTitle from "./SecTitle";

const BlogList = ({ blogs, categoryName }: any) => {
  return (
    <>
      <SecTitle title={categoryName} />
      <BlogListWrap>
        {blogs.map((blog: blogType) => (
          <li key={blog.id}>
            <BlogItemLink href={`/blog/${blog.id}`}>
              <BlogItemIcon>
                <span>{blog.icon}</span>
              </BlogItemIcon>
              <BlogItemInfo>
                <BlogItemDate>{blog.date}</BlogItemDate>
                <BlogItemTitle>{blog.title}</BlogItemTitle>
                <BlogItemCategoryWrap>
                  <BlogItemCategory>{blog.category.name}</BlogItemCategory>
                </BlogItemCategoryWrap>
              </BlogItemInfo>
            </BlogItemLink>
          </li>
        ))}
      </BlogListWrap>
    </>
  );
};
export default BlogList;

const BlogListWrap = styled.ul`
  padding: 0 15px;
  margin: 10px auto 0;
`;

const BlogItemLink = styled(Link)`
  display: block;
  padding: 25px 0;
  border-top: 1px solid ${COLOR.SUBCOLOR};
  display: flex;
  justify-content: space-between;
`;

const BlogItemIcon = styled.div`
  width: 76px;
  height: 76px;
  background-color: ${COLOR.WHITE};
  font-size: 37px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlogItemInfo = styled.div`
  width: calc(100% - 92px);
`;

const BlogItemDate = styled.span`
  display: block;
  font-size: 1.2rem;
`;

const BlogItemTitle = styled.h2`
  font-size: 1.6rem;
  margin-top: 5px;
`;

const BlogItemCategoryWrap = styled.div`
  text-align: right;
  margin-top: 5px;
`;

const BlogItemCategory = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  background-color: ${COLOR.SECONDARY};
  padding: 0.3em 1em;
`;
