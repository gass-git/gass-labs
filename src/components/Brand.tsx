import lab_flask from "../assets/lab_flask.png";
import S from "./styles/Brand.module.css";

export default function Brand() {
  return (
    <a href="/" className={S.container}>
      <div className={S["left-container"]}>
        <img className={S.logo} src={lab_flask} />
      </div>
      <div className={S["right-container"]}>GassLabs</div>
    </a>
  );
}
