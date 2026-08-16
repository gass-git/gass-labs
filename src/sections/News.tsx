import S from "./styles/News.module.css";
import NewsMedia from "../content-blocks/NewsMedia";

export default function News() {
  return (
    <div className={S.wrapper}>
      <NewsMedia />
      <NewsMedia />
    </div>
  );
}
