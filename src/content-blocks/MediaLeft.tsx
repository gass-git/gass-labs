import S from "./MediaLeft.module.css";

type MediaLeftProps = {
  image: string;
  title: string;
  fragment: any;
};

export default function MediaLeft({ image, title, fragment }: MediaLeftProps) {
  return (
    <div className={S.itemContainer}>
      <div className={S.leftContainer}>
        <img src={image} />
      </div>

      <div className={S.rightContainer}>
        <div className={S.title}>{title}</div>
        <div className={S.text}>{fragment}</div>
      </div>
    </div>
  );
}
