"use client";

import registerUser from "@/actions/registerUser";
import { useFormState } from "react-dom";
import { InputProps } from "@/types/forms";
import AuthForm from "@/components/forms/auth-form";

const fields: InputProps[] = [
  { label: "Username", type: "text", name: "username" },
  { label: "Password", type: "password", name: "password" },
  { label: "Email", type: "email", name: "email" },
  { label: "Address", type: "text", name: "address" },
];

export default function Register() {
  const [state, formAction] = useFormState(registerUser, null);

  return (
    <AuthForm
      fields={fields}
      formAction={formAction}
      state={state}
      heading="Register"
      submitLabel="Register"
    />
  );
}
