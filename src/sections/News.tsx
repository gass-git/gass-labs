import S from "./styles/News.module.css";
import NewsMedia from "../content-blocks/NewsMedia";
import {getNews} from "../content"

export default function News() {
  return (
    <div className={S.wrapper}>
      {
         getNews().map((data, index) => <NewsMedia data={data} key={index} />)
      }
    </div>
  );
}
