import ProductsList from "@/components/products/products-list";
import { Suspense } from "react";
import { getSession } from "@/services/sessions";
import { redirect } from "next/navigation";

export const metadata = {
  title: 'All Products',
  description: 'Browse the products available on our store.',
};

export default async function Home() {
  const user = await getSession();
  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <ProductsList />
      </Suspense>
    </>
  );
}
