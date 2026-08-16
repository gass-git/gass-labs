import S from "./styles/NewsMedia.module.css";
import sample from "../assets/news-img-sample.png";

export default function NewMedia() {
  return (
    <div className={S.itemContainer}>
      <div className={S.col}>
        <div className={S.title}>New site is now live !</div>
      </div>

      <div className={S.col}>
        <div className={S.imageWrapper}>
          <img src={sample} />
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
