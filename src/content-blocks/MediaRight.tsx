import S from "./MediaRight.module.css";

type MediaRightProps = {
  image: string;
  title: string;
  fragment: any;
};

export default function MediaRight({
  image,
  title,
  fragment,
}: MediaRightProps) {
  return (
    <div className={S.itemContainer}>
      <div className={S.leftContainer}>
        <div className={S.title}>{title}</div>
        <div className={S.text}>{fragment}</div>
      </div>

      <div className={S.rightContainer}>
        <img src={image} />
      </div>
    </div>
  );
}
