import S from "./styles/MediaLeft.module.css";

type MediaLeftProps = {
  image: string;
  title: string;
  fragment: any;
};

export default function MediaLeft({ image, title, fragment }: MediaLeftProps) {
  return (
    <div className={S.wrapper}>
      <div className={S["left-container"]}>
        <img className={S.image} src={image} />
      </div>

      <div className={S["right-container"]}>
        <h1>{title}</h1>
        <p>{fragment}</p>
      </div>
    </div>
  );
}
