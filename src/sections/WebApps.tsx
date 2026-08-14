import S from "./WebApps.module.css";
import sample from "../assets/jufofu.png";
import { Fragment } from "react/jsx-runtime";
import MediaRight from "../content-blocks/MediaRight";

export default function WebApps() {
  const content = (
    <Fragment>
      Correct and fast paced. No pay-to-win. A rush of puzzles full of strategy,
      combos and chaos! Trigger chain reactions by building clean lines, good
      plays, and watch satisfying number effects explode across the board. It's
      more than a match game - it's a test of foresight and creativity.
    </Fragment>
  );

  return (
    <div className={S.webWrapper}>
      <MediaRight
        image={sample}
        title="Hey! this is an app"
        fragment={content}
      />
    </div>
  );
}
