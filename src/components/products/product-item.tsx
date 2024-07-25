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
      <section className={style.imageWrapper}>

      <Image
        className={style.img}
        src={product.image}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={product.title}
        priority
      />
      </section>
      <p className={style.description}>{product.description}</p>
      <p className={style.price}>${product.price}</p>
      <button className={style.addToCartButton}>Add to Cart</button>
    </li>
  );
}
