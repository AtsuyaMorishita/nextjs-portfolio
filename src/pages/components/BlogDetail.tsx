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

const BlogDetail = ({ blog }: any) => {
  //日付の形式を変換
  const date = new Date(blog.date);
  const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;

  return (
    <BlogDetailWrap>
      <BlogDetailArea>
        <BlogDetailIcon>
          <span>{blog.icon}</span>
        </BlogDetailIcon>
        <span>{formattedDate}</span>
        <h1>{blog.title}</h1>
        <span>{blog.category.category}</span>
        <BlogDetailContents
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
        />
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
  padding: 1em;
`;

const BlogDetailIcon = styled.div`
  font-size: 50px;
  text-align: center;
`;

const BlogDetailContents = styled.div`
  h2 {
  }
  h3 {
  }
  p {
  }
  a {
  }
  img {
    max-width: 100%;
  }
  pre {
    overflow-x: scroll;
    code {
    }
  }
`;
