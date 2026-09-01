import S from "./styles/NewsMedia.module.css";
import type {News} from "../types"

export default function NewsMedia({data}: {data: News}) {
  const {title, imgSrc, date, content} = data

  return (
    <div className={S.itemContainer}>
      <div className={S.col}>
        <div className={S.title}>
          {title}
        </div>
      </div>

      <div className={S.col}>
        <div className={S.imageWrapper}>
          <img src={imgSrc} />
        </div>
        <div className={S.textWrapper}>
          {date} - {content}
        </div>
      </div>
    </div>
  );
}
