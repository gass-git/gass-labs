import S from "./styles/Products.module.css";
import MediaLeft from "../content-blocks/MediaLeft";
import sample from ".././assets/jufofu.png";
import { Fragment } from "react/jsx-runtime";

export default function Products() {
  const content = (
    <Fragment>
      Correct and fast paced. No pay-to-win. A rush of puzzles full of strategy,
      combos and chaos! Trigger chain reactions by building clean lines, good
      plays, and watch satisfying number effects explode across the board. It's
      more than a match game - it's a test of foresight and creativity.
    </Fragment>
  );

  return (
    <div className={S.wrapper}>
      <MediaLeft
        image={sample}
        title="Jufofu - Block Puzzle Rush"
        fragment={content}
      />
    </div>
  );
}
