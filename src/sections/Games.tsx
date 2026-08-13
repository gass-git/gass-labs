import S from "./Games.module.css";
import jufofu from "../assets/jufofu.png";

export default function Games() {
  return (
    <div className={S.gamesWrapper}>
      <Item />
    </div>
  );
}

function Item() {
  return (
    <div className={S.itemContainer}>
      <div className={S.leftContainer}>
        <img src={jufofu} />
      </div>

      <div className={S.rightContainer}>
        <div className={S.title}>Jufofu - Block Puzzle Rush</div>
        <div className={S.text}>
          Correct and fast paced. No pay-to-win. A rush of puzzles full of
          strategy, combos and chaos! Trigger chain reactions by building clean
          lines, good plays, and watch satisfying number effects explode across
          the board. It's more than a match game - it's a test of foresight and
          creativity.
        </div>
      </div>
    </div>
  );
}
