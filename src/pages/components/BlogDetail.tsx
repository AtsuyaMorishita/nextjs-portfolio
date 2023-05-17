import { COLOR } from "@/styles/variable";
import styled from "styled-components";

const BlogDetail = ({ blog }: any) => {
  return (
    <BlogDetailWrap>
      <BlogDetailArea>
        <BlogDetailIcon>
          <span>{blog && blog.icon}</span>
        </BlogDetailIcon>
        <span>{blog && blog.date}</span>
        <BlogDetailTitle>{blog && blog.title}</BlogDetailTitle>
        <BlogDetailCategoryWrap>
          <BlogDetailCategory>
            {blog && blog.category.name && blog && blog.category.name}
          </BlogDetailCategory>
        </BlogDetailCategoryWrap>
        {blog && blog.content && (
          <BlogDetailContents
            dangerouslySetInnerHTML={{
              __html: `${blog.content}`,
            }}
          />
        )}
      </BlogDetailArea>
    </BlogDetailWrap>
  );
};
export default BlogDetail;

const BlogDetailWrap = styled.div`
  padding: 0 15px;
`;

const BlogDetailArea = styled.div`
  background-color: ${COLOR.WHITE};
  padding: 1em 1em 3em;
`;

const BlogDetailIcon = styled.div`
  font-size: 50px;
  text-align: center;
`;

const BlogDetailTitle = styled.h1`
  font-size: 1.8rem;
`;

const BlogDetailCategoryWrap = styled.div`
  text-align: right;
`;

const BlogDetailCategory = styled.span`
  display: inline-block;
  font-size: 1.2rem;
  background-color: ${COLOR.SECONDARY};
  padding: 0.3em 1em;
`;

const BlogDetailContents = styled.div`
  padding-top: 30px;
  margin-top: 20px;
  border-top: 1px solid #898781;
  h2 {
    font-size: 1.8rem;
    padding: 8px 0 8px 10px;
    line-height: 1.4;
    background-color: ${COLOR.BGMAIN};
    border-left: 5px solid ${COLOR.PRIMARY};
    margin: 10px 0 20px;
  }
  h3 {
    font-size: 1.6rem;
    margin: 10px 0 20px;
    border-bottom: 1px dashed ${COLOR.BLACK};
  }
  p {
    font-size: 1.4rem;
  }
  a {
  }
  img {
    max-width: 100%;
  }
  pre,
  code {
    background: #1d1f21;
    color: #c5c8c6;
    padding: 1em;
    overflow-x: auto;
  }
  pre {
    margin: 20px 0;
    code {
      display: block;
    }
  }
`;
