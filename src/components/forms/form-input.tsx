import React from 'react';
import styles from './form-input.module.scss';
import { InputProps } from '@/types/forms';


export default function FormInput({ label, type, name }: InputProps) {
  return (
    <div className={styles["form-group"]}>
      <label>
        {label}:
        <input className={styles.input} type={type} id={name} name={name} required />
      </label>
    </div>
  );
}