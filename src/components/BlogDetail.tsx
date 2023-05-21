import { COLOR } from "@/styles/variable";
import { mediaQuery } from "@/utils/breakpoints";
import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const BlogDetail = ({ blog }: any) => {
  return (
    <BlogDetailWrap>
      <BlogDetailArea>
        <BlogDetailTopWrap>
          <BlogDetailLead>
            <BlogDetailIcon>
              <span>{blog && blog.icon}</span>
            </BlogDetailIcon>
            <BlogDetailTitle>{blog && blog.title}</BlogDetailTitle>
          </BlogDetailLead>
          <BlogDetailInfoWrap>
            <BlogDetailDate>
              <AccessTimeIcon />
              <BlogDetailDateText>{blog && blog.date}</BlogDetailDateText>
            </BlogDetailDate>
            <BlogDetailCategoryWrap>
              <BlogDetailCategory>
                {blog && blog.category.name && blog && blog.category.name}
              </BlogDetailCategory>
            </BlogDetailCategoryWrap>
          </BlogDetailInfoWrap>
        </BlogDetailTopWrap>

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
  ${mediaQuery[1]} {
    padding: 0;
    width: calc(100% - 300px);
  }
`;

const BlogDetailLead = styled.div`
  ${mediaQuery[0]} {
    display: flex;
    align-items: center;
  }
`;

const BlogDetailTopWrap = styled.div`
  max-width: 900px;
`;

const BlogDetailArea = styled.div`
  background-color: ${COLOR.WHITE};
  padding: 1em 1em 3em;
  ${mediaQuery[1]} {
    padding: 2em 3em 3em;
  }
`;

const BlogDetailIcon = styled.div`
  font-size: 5rem;
  text-align: center;

  ${mediaQuery[0]} {
    margin-right: 10px;
  }
`;

const BlogDetailInfoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const BlogDetailTitle = styled.h1`
  font-size: 1.8rem;
  ${mediaQuery[1]} {
    font-size: 2.2rem;
  }
`;

const BlogDetailDate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-right: 10px;
`;

const BlogDetailDateText = styled.span`
  display: inline-block;
  margin-left: 5px;
`;

const BlogDetailCategoryWrap = styled.div`
  text-align: right;
  margin-top: 5px;
  ${mediaQuery[1]} {
    text-align: left;
  }
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
