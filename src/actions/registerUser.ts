"use server";
import {hash} from "bcryptjs";
import createUser from "@/services/creatUser";
import fetchUser from "@/services/getUser";
import { createSession } from "@/actions/sessions";
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
      // Hash the password and create the user
      const hashedPassWord = await hash(registerData.password, 8)
      const user: User = await createUser({
        ...registerData,
        password: hashedPassWord,
      });

      // Create session for the new user
      await createSession(user.id, user.username);

    } else {
      return "missing fields";
    }
  } catch (error) {
    return "Registration failed";
  }
  redirect("/");
}
