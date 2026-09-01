import S from "./styles/News.module.css";
import NewsMedia from "../content-blocks/NewsMedia";
import {getNews} from "../content"

export default function News() {
  const news = getNews()

  return (
    <div className={S.wrapper}>
      {
        news.map((data, index) => <NewsMedia data={data} key={index} />)
      }
    </div>
  );
}
