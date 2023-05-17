import Head from "next/head";
import { blogType, categoryType } from "../../../types/microCms";
import SecTitle from "../components/SecTitle";
import BlogList from "../components/BlogList";
import CategoryArea from "../components/CategoryArea";
import { client } from "../../../libs/client";
import Layout from "../components/Layout";

export default function Home({ blogs, categories, categoryName }: any) {
  return (
    <>
      <Head>
        <title>ポートフォリオ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <BlogList blogs={blogs} categoryName={categoryName} />
          <CategoryArea categories={categories} />
        </main>
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "category" });

  const paths = data.contents.map(
    (content: categoryType) => `/category/${content.id}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const catId = context.params.category;
  const microCmsData = await client.get({
    endpoint: "blog",
    queries: { filters: `category[equals]${catId}` },
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

  //カテゴリ取得
  const categoryArray = await client.get({ endpoint: "category" });

  //現在のカテゴリ名を取得
  const categoryName = categoryArray.contents.find((elem: categoryType) => {
    return elem.id === catId;
  });

  return {
    props: {
      blogs: data,
      categories: categoryArray.contents,
      categoryName: categoryName.name,
    },
  };
};
