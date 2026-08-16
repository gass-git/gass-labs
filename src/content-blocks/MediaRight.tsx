import S from "./styles/MediaRight.module.css";

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
    <div className={S.wrapper}>
      <div className={S["left-container"]}>
        <h1>{title}</h1>
        <p>{fragment}</p>
      </div>

      <div className={S["right-container"]}>
        <img className={S.image} src={image} />
      </div>
    </div>
  );
}
