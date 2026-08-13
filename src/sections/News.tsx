import S from "./News.module.css";
import img from "../assets/news-img-sample.png";

export default function News() {
  return (
    <div className={S.newsWrapper}>
      <Item />
      <Item />
    </div>
  );
}

function Item() {
  return (
    <div className={S.itemContainer}>
      <div className={S.col}>
        <div className={S.title}>New site is now live !</div>
      </div>

      <div className={S.col}>
        <div className={S.imageWrapper}>
          <img src={img} />
        </div>
        <div className={S.textWrapper}>
          13 July 2026 - The summer update, now available for free, presents the
          Tibia community with one of its greatest challenges to date: The
          toughest bosses in the game's 29-year history await players at the end
          of a new quest. True to an MMORPG with no level cap, their difficulty
          can be ramped up infinitely. This means that the bosses not only gain
          more health points, but the battles also become more challenging
          through additional game mechanics.
        </div>
      </div>
    </div>
  );
}
