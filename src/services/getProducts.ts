import { Product } from "@/types/product.type";
import axios, { AxiosResponse } from "axios";

export default async function fetchProducts(): Promise<Product[]> {
  try {
    const response: AxiosResponse = await axios.get(
      process.env.NEXT_PUBLIC_BASE_API_URL + "/products"
    );
    return response.data as Product[];
  } catch (error) {
    throw new Error("Failed to fetch Products");
  }
}
