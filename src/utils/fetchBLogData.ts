import { client } from "../../libs/client";
import { blogType } from "../../types/microCms";

/**
 * 全てのブログ一覧データを取得
 */
async function fetchBlogData(): Promise<blogType[]> {
  const microcmsData = await client.get({
    endpoint: "blog",
  });

  const microcmsPostData = microcmsData.contents.map((item: blogType) => {
    // //投稿日の形式を変更
    const date = new Date(item.date);
    const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`;

    return {
      id: item.id,
      date: formattedDate,
      title: item.title,
      slug: item.slug,
      category: item.category.name,
      icon: item.icon,
      content: item.content,
    };
  });

  console.log("================", microcmsPostData);

  return microcmsPostData;
}

export default fetchBlogData;
