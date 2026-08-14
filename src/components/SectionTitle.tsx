import { useLocation } from "react-router";
import S from "./SectionTitle.module.css";

export default function SectionTitle() {
  const location = useLocation();

  return (
    <div className={S.container}>
      <span className={S.line}></span>
      <span className={S["divider-text"]}>{location.state?.sectionTitle}</span>
      <span className={S.line}></span>
    </div>
  );
}
