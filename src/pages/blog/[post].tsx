import { client } from "../../../libs/client";
import { blogType } from "../../../types/microCms";
import Aside from "../components/Aside";
import BlogDetail from "../components/BlogDetail";
import CategoryArea from "../components/CategoryArea";
import Layout from "../components/Layout";
import { Meta } from "../components/Meta";

export default function BlogSlug({ blog, categories }: any) {
  return (
    <>
      <Meta title={blog.title} />
      <Layout isBlog>
        <BlogDetail blog={blog} />
        <Aside categories={categories} />
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
  const microCmsDetailData = await client.get({
    endpoint: "blog",
    contentId: id,
  });

  /**
   * 日付の形式を変換
   */
  const date = new Date(microCmsDetailData.date);
  const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;
  microCmsDetailData.date = formattedDate;

  //カテゴリ取得
  // const categoryArray = await client.get({ endpoint: "category" });
  const microCmsData = await client.get({ endpoint: "blog" });
  //サイドバー カテゴリ用
  const categories = microCmsData.contents.map((elem: any) => {
    return {
      catId: elem.category.id,
      catName: elem.category.name,
    };
  });

  return {
    props: {
      blog: microCmsDetailData,
      categories: categories,
    },
  };
};
