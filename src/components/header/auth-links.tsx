"use client";

import { deleteSession } from "@/actions/sessions";
import { useAuth } from "@/context/auth";
import { useEffect } from "react";
import style from "./app-header.module.scss";
import Link from "next/link";

export const LogoutButton = (props: { name: string | undefined }) => {
  const { setUserS } = useAuth();
  const handleLogout = (e: React.FormEvent<HTMLFormElement>) => {
    setUserS({ username: "" });
  };

  return (
    <>
      <li className={style.userName}>Welcome {props.name}</li>
      <li>
        <form action={deleteSession} onSubmit={handleLogout}>
          <button className={style.logoutButton} type="submit">
            Logout
          </button>
        </form>
      </li>
    </>
  );
};

export const AuthLinks = ({ username }: { username: string | undefined }) => {
  const { setUserS } = useAuth();
  useEffect(() => {
    if (username) {
      setUserS({ username });
    }
  }, [setUserS, username]);

  return (
    <ul className={style.navList}>
      {username ? (
        <LogoutButton name={username} />
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
