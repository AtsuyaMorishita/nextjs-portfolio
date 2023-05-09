import { COLOR } from "@/styles/variable";
import Link from "next/link";
import styled from "styled-components";

type blogType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  slug: string;
  date: string;
  category: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    category: string;
    slug: string;
  };
  icon: string;
  content: string;
};

const BlogList = ({ blogs }: any) => {
  return (
    <BlogListWrap>
      {blogs.map((blog: blogType) => {
        //日付の形式を変換
        const date = new Date(blog.date);
        const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
          .toString()
          .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;

        return (
          <li key={blog.id}>
            <BlogItemLink href={`blog/${blog.slug}`}>
              <BlogItemIcon>
                <span>{blog.icon}</span>
              </BlogItemIcon>
              <BlogItemInfo>
                <BlogItemDate>{formattedDate}</BlogItemDate>
                <BlogItemTitle>{blog.title}</BlogItemTitle>
                <BlogItemCategoryWrap>
                  <BlogItemCategory>{blog.category.category}</BlogItemCategory>
                </BlogItemCategoryWrap>
              </BlogItemInfo>
            </BlogItemLink>
          </li>
        );
      })}
    </BlogListWrap>
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
`;

const BlogItemCategoryWrap = styled.div`
  text-align: right;
`;

const BlogItemCategory = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  background-color: ${COLOR.SECONDARY};
  padding: 0.3em 1em;
`;
