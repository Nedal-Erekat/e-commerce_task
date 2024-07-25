"use client";

import loginUser from "@/actions/loginUser";
import { useFormState } from "react-dom";
import styles from "./login.module.scss";
import SubmitButton from "@/components/forms/submit-button";

export default function Login() {
  const [state, formAction] = useFormState(loginUser, null);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Login</h2>
      <form className={styles.form} action={formAction}>
        <div className={styles["form-group"]}>
          <label htmlFor="email" className={styles.label}>Your Email</label>
          <input className={styles.input} type="email" id="email" name="email" required />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password" className={styles.label}>
            Password:
            <input className={styles.input} type="password" id="password" name="password" required />
          </label>
        </div>
        {state && <p className={styles.error}>{state}</p>}
        <SubmitButton label="Login"/>
      </form>
    </div>
  );
}
