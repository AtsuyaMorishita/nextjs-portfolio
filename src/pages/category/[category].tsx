import { blogGetCategory, blogType } from "../../../types/microCms";
import BlogList from "../../components/BlogList";
import { client } from "../../../libs/client";
import Layout from "../../components/Layout";
import Aside from "../../components/Aside";
import { Meta } from "../../components/Meta";
import { REVALIDATE_TIME } from "@/data/revalidate";
import PageAnimeWrap from "@/components/PageAnimeWrap";

export default function Home({ blogs, categories, categoryName }: any) {
  return (
    <>
      <Meta title={`「${categoryName}」の記事一覧`} />
      <PageAnimeWrap>
        <Layout isBlog>
          <BlogList blogs={blogs} categoryName={categoryName} />
          <Aside categories={categories} />
        </Layout>
      </PageAnimeWrap>
    </>
  );
}

export const getStaticPaths = async () => {
  const microCmsData = await client.get({ endpoint: "blog" });
  const paths = microCmsData.contents.map(
    (content: any) => `/category/${content.category.id}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const getCatId = context.params.category;
  const microCmsData = await client.get({
    endpoint: "blog",
    queries: { filters: `category[equals]${getCatId}` },
  });

  /**
   * 日付の形式を変換
   */
  const data = microCmsData.contents.map((elem: blogType) => {
    const date = new Date(elem.date);
    const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;

    return {
      ...elem,
      date: formattedDate,
    };
  });

  //サイドバー カテゴリ用
  const categories = data.map((elem: any) => {
    return {
      catId: elem.category.id,
      catName: elem.category.name,
    };
  });

  //現在のカテゴリ名を取得
  const currentCategoryName = categories.find((elem: blogGetCategory) => {
    return elem.catId === getCatId;
  });

  return {
    props: {
      blogs: data,
      categories: categories,
      categoryName: currentCategoryName.catName,
    },
    revalidate: REVALIDATE_TIME,
  };
};
