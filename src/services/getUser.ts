import { User } from "@/types/user.type";
import axios, { AxiosResponse } from "axios";

export default async function fetchUser(
  email: string
): Promise<User | undefined> {
  try {
    const response: AxiosResponse = await axios.get(
      process.env.NEXT_PUBLIC_BASE_API_URL + "/users"
    );
    const user: User | undefined = (response.data as User[]).find(
      (user: User) => user.email === email
    );

    return user;
  } catch (error) {
    throw new Error("Failed to fetch User");
  }
}
