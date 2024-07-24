import { Product } from "@/types/product.type";
import ProductItem from "./product-item";
import fetchProducts from "@/services/getProducts";

import style from './product-list.module.scss';

export default async function ProductsList() {
  const products: Product[] = (await fetchProducts()) || [];

  return (
    <div className={style.container}>
      <h2 className={style.title}>Products</h2>
      <ul className={style.grid}>
        {products && products.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
