"use client";

import { deleteSession } from "@/actions/sessions";
import { AuthContext } from "@/context/auth";
import { useContext } from "react";
import style from "./app-header.module.scss";
import Link from "next/link";

export const LogoutButton = (props: { name: string | undefined }) => {
  return (
    <>
      <li className={style.userName}>Welcome {props.name}</li>
      <li>
        <form action={deleteSession}>
          <button className={style.logoutButton} type="submit">
            Logout
          </button>
        </form>
      </li>
    </>
  );
};

export const AuthLinks = () => {
  const user = useContext(AuthContext);
  return (
    <ul className={style.navList}>
      {user.name ? (
        <LogoutButton name={user.name} />
      ) : (
        <>
          <li className={style.navItem}>
            <Link href="/login" className={style.navLink}>
              Login
            </Link>
          </li>
          <li className={style.navItem}>
            <Link href="/register" className={style.navLink}>
              Register
            </Link>
          </li>
        </>
      )}
    </ul>
  );
};
