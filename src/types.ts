export interface MediaItem {
  title: string;
  date: string;
  imgSrc: string;
  content: string;
}

export interface Products extends MediaItem {
  link: string;
}

export interface News extends MediaItem {}
