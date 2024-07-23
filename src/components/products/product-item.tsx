import { Product } from "@/types/product.type";
import Image from "next/image";

import style from "./product-item.module.scss";

type props = {
  product: Product;
};

export default function ProductItem({ product }: props) {
  return (
    <li className={style.cardWrapper}>
      <h2 className={style.title}>{product.title}</h2>
      <Image
        className={style.img}
        src={product.image}
        width={150}
        height={200}
        alt={product.title}
        priority
      />
      <p className={style.description}>{product.description}</p>
      <p className={style.price}>${product.price}</p>
      <button className={style.addToCartButton}>Add to Cart</button>
    </li>
  );
}
