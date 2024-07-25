"use server";

import fetchUser from "@/services/getUser";
import { createSession, deleteSession } from "@/actions/sessions";
import { LoginForm, User } from "@/types/user.type";
import { redirect } from "next/navigation";
import { compare } from "bcryptjs";

export default async function loginUser(
  prevState: any,
  formData: FormData
): Promise<string> {
  try {
    const login: LoginForm = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
    if (login.email && login.password) {
      const user: User | undefined = await fetchUser(login.email);

      if (user) {
        const isMatch: boolean = await compare(login.password, user.password);
        if (!isMatch) {
          return "Invalid Password";
        }
        await createSession(user.id, user.username);
      }

      if (!user) {
        return "Invalid email";
      }
    }
  } catch (err) {
    return "Login failed";
  }
  redirect("/");
}

export async function logout() {
  deleteSession();
  redirect("/login");
}
