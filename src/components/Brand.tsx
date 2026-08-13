import lab_flask from "../assets/lab_flask.png";
import S from "./Brand.module.css";

export default function Brand() {
  return (
    <div className={S.row}>
      <div className={S.leftContainer}>
        <img className={S.logo} src={lab_flask} />
      </div>
      <div className={S.rightContainer}>GassLabs</div>
    </div>
  );
}
