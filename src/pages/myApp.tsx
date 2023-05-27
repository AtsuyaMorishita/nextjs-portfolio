import { client } from "../../libs/client";
import MyAppList from "../components/MyAppList";
import Layout from "../components/Layout";
import { Meta } from "../components/Meta";
import { META_TITLE } from "@/data/meta";
import { REVALIDATE_TIME } from "@/data/revalidate";
import { motion } from "framer-motion";

export default function Home({ myApps }: any) {
  return (
    <>
      <Meta title={META_TITLE.MYAPP} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Layout>
          <main>
            <MyAppList myApp={myApps} />
          </main>
        </Layout>
      </motion.div>
    </>
  );
}

export const getStaticProps = async () => {
  const microCmsData = await client.get({ endpoint: "works" });

  return {
    props: {
      myApps: microCmsData.contents,
    },
    revalidate: REVALIDATE_TIME,
  };
};
