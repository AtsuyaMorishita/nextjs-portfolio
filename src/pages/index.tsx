import Head from "next/head";
import SecTitle from "../components/SecTitle";
import { client } from "../../libs/client";
import BlogList from "../components/BlogList";
import fetchBlogData from "@/utils/fetchBLogData";
import { blogType } from "../../types/microCms";
import CategoryArea from "../components/CategoryArea";
import Layout from "../components/Layout";
import Aside from "../components/Aside";
import { Meta } from "../components/Meta";
import { REVALIDATE_TIME } from "@/data/revalidate";
import { motion } from "framer-motion";

export default function Home({ blogs, categories }: any) {
  return (
    <>
      <Meta />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Layout isBlog>
          <BlogList blogs={blogs} categoryName="NEW" />
          <Aside categories={categories} />
        </Layout>
      </motion.div>
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

  return {
    props: {
      blogs: data,
      categories: categories,
    },
    revalidate: REVALIDATE_TIME,
  };
};
