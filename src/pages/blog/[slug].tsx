import { client } from "../../../libs/client";

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

export default function BlogSlug({ blog }: blogType) {
  return (
    <main>
      <span>{blog.date}</span>
      <h1>{blog.title}</h1>
      <span>{blog.category.category}</span>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </main>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content: any) => `/blog/${content.slug}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context: any) => {
  const paramSlug = context.params.slug;
  const data = await client.get({
    endpoint: "blog",
    queries: { filters: `slug[equals]${paramSlug}` },
  });

  console.log(data.contents);

  return {
    props: {
      blog: data.contents[0],
    },
  };
};
