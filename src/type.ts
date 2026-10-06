export interface MainNewsType {
  id: string;
  category: string;
  description: string;
  firstPublished: string;
  imageAlt: string;
  imageUrl: string;
  isLive: boolean;
  lastPublished: string;
  link: string;
  source: string;
  title: string;
  type: "article";
}

export interface OtherNews {
  title: string;
  articles: MainNewsType[];
}
