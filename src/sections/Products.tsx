import S from "./styles/Products.module.css";
import MediaLeft from "../content-blocks/MediaLeft";
import {getProducts} from "../content";


export default function Products() {
  const products = getProducts()  

  return (
    <div className={S.wrapper}>
      <MediaLeft
        image={products[0].imgSrc}
        title={products[0].title}
        fragment={products[0].content}
      />
    </div>
  );
}
