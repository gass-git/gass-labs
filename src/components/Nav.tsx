import S from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={S.row}>
      <div>News</div>
      <div>Games</div>
      <div>Web</div>
      <div>About</div>
    </div>
  );
}
