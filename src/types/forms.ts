export type InputProps = {
  label: string;
  type: "text" | "number" | "email" | "password";
  name: string;
};

export type FormProps = {
  fields: InputProps[];
  formAction: (payload: FormData) => void;
  state: string | null;
  heading: string;
  submitLabel: string;
};
