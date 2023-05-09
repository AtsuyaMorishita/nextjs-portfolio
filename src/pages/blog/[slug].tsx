import { client } from "../../../libs/client";
import BlogDetail from "../components/BlogDetail";

type blogType = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  slug: string;
  date: string;
  category: {
    id: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
    category: string;
    slug: string;
  };
  icon: string;
  content: string;
};

export default function BlogSlug({ blog }: any) {
  return <BlogDetail blog={blog} />;
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map(
    (content: blogType) => `/blog/${content.slug}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const paramSlug = context.params.slug;
  const data = await client.get({
    endpoint: "blog",
    queries: { filters: `slug[equals]${paramSlug}` },
  });

  return {
    props: {
      blog: data.contents[0],
    },
  };
};
