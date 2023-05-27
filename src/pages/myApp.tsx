import { client } from "../../libs/client";
import MyAppList from "../components/MyAppList";
import Layout from "../components/Layout";
import { Meta } from "../components/Meta";
import { META_TITLE } from "@/data/meta";
import { REVALIDATE_TIME } from "@/data/revalidate";
import PageAnimeWrap from "@/components/PageAnimeWrap";

export default function Home({ myApps }: any) {
  return (
    <>
      <Meta title={META_TITLE.MYAPP} />
      <PageAnimeWrap>
        <Layout>
          <main>
            <MyAppList myApp={myApps} />
          </main>
        </Layout>
      </PageAnimeWrap>
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
