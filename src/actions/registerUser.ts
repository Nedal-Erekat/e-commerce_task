"use server";

import createUser from "@/services/creatUser";
import fetchUser from "@/services/getUser";
import { RegistrationForm, User } from "@/types/user.type";
import { redirect } from "next/navigation";

export default async function registerUser(prevState: any, formData: FormData) {
  try {
    const registerData: RegistrationForm = {
      username: formData.get("username") as string,
      password: formData.get("password") as string,
      email: formData.get("email") as string,
      address: formData.get("address") as string,
    };

    // Check if user already registered
    const user: User | undefined = await fetchUser(registerData.email);
    if (user) {
      return "this email already registered!";
    }

    // check if all required field filled
    const allFieldsFilled = Object.values(registerData).every(
      (value) => value.trim() !== ""
    );
    if (allFieldsFilled) {
      const user: User = await createUser(registerData);
    //   console.log(user);
    // TODO: show success msg
    } else {
      return "missing fields";
    }

  } catch (error) {
    return "Registration failed";
  }

  redirect("/login");
}
