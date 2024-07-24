import ProductsList from "@/components/products/products-list";
import { Suspense } from "react";
import { getSession } from "@/actions/sessions";
import { redirect } from "next/navigation";
import { SessionPayload } from "@/types/session.type";
import LoadingPage from "./loading";

export const metadata = {
  title: "All Products",
  description: "Browse the products available on our store.",
};

export default async function Home() {
  const user: SessionPayload | null = await getSession();
  
  if (!user) {
    return redirect("/login");
  }

  return (
    <>
      <Suspense fallback={<LoadingPage/>}>
        <ProductsList />
      </Suspense>
    </>
  );
}
