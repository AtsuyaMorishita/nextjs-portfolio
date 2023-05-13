//microCMSのブログデータ
export type blogType = {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: {
    name: string;
  };
  icon: string;
  content: string;
};

//microCMSのカテゴリデータ
export type categoryType = {
  id: string;
  name: string;
  slug: string;
};
