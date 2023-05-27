import { COLOR } from "@/styles/variable";
import Link from "next/link";
import styled from "styled-components";
import { blogType } from "../../types/microCms";
import SecTitle from "./SecTitle";
import { mediaQuery } from "@/utils/breakpoints";

const BlogList = ({ blogs, categoryName }: any) => {
  return (
    <BlogListArea>
      <SecTitle title={categoryName} />
      <BlogListWrap>
        {blogs.length ? (
          blogs.map((blog: blogType) => (
            <BlogListItem key={blog.id}>
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
            </BlogListItem>
          ))
        ) : (
          <BlogNoneWrap>
            <p>只今記事の準備中・・・</p>
          </BlogNoneWrap>
        )}
      </BlogListWrap>
    </BlogListArea>
  );
};
export default BlogList;

const BlogListArea = styled.div`
  margin: 0 auto;
  ${mediaQuery[1]} {
    width: calc(100% - 300px);
  }
`;

const BlogListWrap = styled.ul`
  padding: 0 15px;
  margin: 10px auto 0;
  max-width: 800px;
  ${mediaQuery[0]} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

const BlogListItem = styled.li`
  ${mediaQuery[0]} {
    width: 45%;
  }
`;

const BlogItemLink = styled(Link)`
  display: block;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;

const BlogItemIcon = styled.div`
  width: 76px;
  height: 76px;
  background-color: ${COLOR.WHITE};
  font-size: 3.7rem;
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

const BlogNoneWrap = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 40px;
  font-size: 14px;

  ${mediaQuery[0]} {
    font-size: 16px;
  }
`;
