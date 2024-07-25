import { FormProps, InputProps } from "@/types/forms";
import FormInput from "./form-input";
import SubmitButton from "./submit-button";
import styles from "./auth-form.module.scss";

export default function AuthForm({ fields, formAction, state, heading, submitLabel }: FormProps) {
    return (
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <form className={styles.form} action={formAction}>
          {fields.map(({ label, type, name }: InputProps) => (
            <FormInput key={name} label={label} type={type} name={name} />
          ))}
          {state && <p className={styles.error}>{state}</p>}
          <SubmitButton label={submitLabel} />
        </form>
      </div>
    );
  }