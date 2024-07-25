"use client";

import loginUser from "@/actions/loginUser";
import { useFormState } from "react-dom";
import { InputProps } from "@/types/forms";
import AuthForm from "@/components/forms/auth-form";

const fields: InputProps[] = [
  { label: "Email", type: "email", name: "email" },
  { label: "Password", type: "password", name: "password" },
];

export default function Login() {
  const [state, formAction] = useFormState(loginUser, null);

  return (
    <AuthForm
      fields={fields}
      formAction={formAction}
      state={state}
      heading="Login"
      submitLabel="Login"
    />
  );
}
