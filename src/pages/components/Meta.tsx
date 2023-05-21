import { META_DESC, SITE_NAME } from "@/data/meta";
import { COLOR } from "@/styles/variable";
import Head from "next/head";

type MetaType = {
  title?: string;
  description?: string;
};

export const Meta = ({ title, description }: MetaType) => {
  const metaTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  const metaDesc = description ? description : META_DESC.DEFAULT;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta property="og:title" content={metaTitle} />
      <meta property="description" content={metaDesc} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:image" content={`/ogp_large.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta httpEquiv="content-language" content="ja" />
      <meta name="theme-color" content={COLOR.BGMAIN} />
      <meta name="description" content={META_DESC.DEFAULT} />
      <link rel="icon" sizes="192x192" href="/icon-192x192.png" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        href="/android-chrome-192x192.png"
        sizes="192x192"
      ></link>
    </Head>
  );
};
