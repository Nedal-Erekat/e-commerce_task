import Image from "next/image";
import styles from "./page.module.scss";
import ProductsList from "@/components/products/products-list";
import { Suspense } from "react";

// TODO: add meta data

export default function Home() {
  return (
    <>
    <Suspense fallback={<h2>Loading...</h2>}>
      <ProductsList/>
    </Suspense>
    </>
  );
}
