import Link from "next/link";
import style from "./app-header.module.scss";
import { deleteSession } from "@/actions/sessions";

export default function AppHeader(props: { username: string | undefined }) {
  return (
    <nav className={style.nav}>
      <div className={style.container}>
        <div className={style.lftNav}>
          <Link className={style.appHeadline} href="/">
            <h1 className="appHeadline">Shopping</h1>
          </Link>
          {props.username && (
            <ul className={style.navList}>
              <li className={style.navItem}>
                <Link href="/" className={style.navLink}>
                  Home
                </Link>
              </li>
            </ul>
          )}
        </div>

        <ul className={style.navList}>
          {props.username ? (
            <LogoutButton username={props.username} />
          ) : (
            <AuthLinks />
          )}
        </ul>
      </div>
    </nav>
  );
}

const AuthLinks = () => {
  return (
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
  );
};

const LogoutButton = (props: { username: string }) => {
  return (
    <>
      <li className={style.userName}>Welcome {props?.username}</li>
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
