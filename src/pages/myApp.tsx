import Head from "next/head";
import { client } from "../../libs/client";
import MyAppList from "./components/MyAppList";

export default function Home({ myApps }: any) {
  return (
    <>
      <Head>
        <title>ポートフォリオ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MyAppList myApp={myApps} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const microCmsData = await client.get({ endpoint: "works" });

  return {
    props: {
      myApps: microCmsData.contents,
    },
  };
};