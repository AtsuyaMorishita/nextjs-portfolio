import { client } from "../../../libs/client";
import { blogType } from "../../../types/microCms";
import BlogDetail from "../components/BlogDetail";
import CategoryArea from "../components/CategoryArea";
import Layout from "../components/Layout";

export default function BlogSlug({ blog, categories }: any) {
  return (
    <>
      <Layout>
        <BlogDetail blog={blog} />
        <CategoryArea categories={categories} />
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content: blogType) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  //記事を取得
  const id = context.params.post;
  const data = await client.get({
    endpoint: "blog",
    contentId: id,
  });

  /**
   * 日付の形式を変換
   */
  const date = new Date(data.date);
  const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;
  data.date = formattedDate;

  //カテゴリ取得
  const categoryArray = await client.get({ endpoint: "category" });

  return {
    props: {
      blog: data,
      categories: categoryArray.contents,
    },
  };
};
