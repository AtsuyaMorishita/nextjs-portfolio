import { client } from "../../libs/client";
import BlogList from "../components/BlogList";
import { blogType } from "../../types/microCms";
import Layout from "../components/Layout";
import Aside from "../components/Aside";
import { Meta } from "../components/Meta";
import { REVALIDATE_TIME } from "@/data/revalidate";
import PageAnimeWrap from "@/components/PageAnimeWrap";
import MyAppList from "@/components/MyAppList";

export default function Home({ blogs, categories, myApps }: any) {
  return (
    <>
      <Meta />
      <PageAnimeWrap>
        {/* ブログを公開するまで記載 */}
        <Layout>
          <main>
            <MyAppList myApp={myApps} />
          </main>
        </Layout>

        {/* <Layout isBlog>
          <BlogList blogs={blogs} categoryName="NEW" />
          <Aside categories={categories} />
        </Layout> */}
      </PageAnimeWrap>
    </>
  );
}

export const getStaticProps = async () => {
  const microCmsData = await client.get({ endpoint: "blog" });

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

  /**
   * ブログを公開するまで記載
   */
  const microCmsWorksData = await client.get({ endpoint: "works" });

  return {
    props: {
      blogs: data,
      categories: categories,
      myApps: microCmsWorksData.contents, //ブログを公開するまで記載
    },
    revalidate: REVALIDATE_TIME,
  };
};
