"use client";

import registerUser from "@/actions/registerUser";
import { useFormState } from "react-dom";
import styles from "./register.module.scss";
import SubmitButton from "@/components/forms/submit-button";

export default function Register() {
  const [state, formAction] = useFormState(registerUser, null);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Register</h2>
      <form className={styles.form} action={formAction}>
        <div className={styles["form-group"]}>
          <label>
            Username:
            <input className={styles.input} type="text" id="name" name="username" required />
          </label>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">
            Password:
            <input className={styles.input} type="password" id="password" name="password" required />
          </label>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="email">
            email:
            <input className={styles.input} type="email" id="email" name="email" required />
          </label>
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="address">
            address:
            <input className={styles.input} type="text" id="address" name="address" required />
          </label>
        </div>
        {state && <p className={styles.error}>{state}</p>}
        <SubmitButton label="Register"/>

      </form>
    </div>
  );
}
