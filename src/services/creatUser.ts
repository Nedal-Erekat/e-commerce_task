import { RegistrationForm } from "@/types/user.type";
import axios, { AxiosResponse } from "axios";

export default async function createUser(userData: RegistrationForm) {
  try {
    const res: AxiosResponse = await axios.post(
      process.env.NEXT_PUBLIC_BASE_API_URL + "/users",
      {
        ...userData,
      }
    );
    return res.data;
  } catch (err) {
    throw new Error("Registration failed");
  }
  // router.push("/login");
}
