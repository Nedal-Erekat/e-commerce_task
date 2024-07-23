import Link from "next/link";
import style from "./app-header.module.scss";

export default function AppHeader() {
  return (
    <nav className={style.nav}>
      <ul className={style.navList}>
        <li className={style.navItem}>
          <Link href="/" className={style.navLink}>Home</Link>
        </li>
        <li className={style.navItem}>
          <Link href="/login" className={style.navLink}>Login</Link>
        </li>
        <li className={style.navItem}>
          <Link href="/register" className={style.navLink}>Register</Link>
        </li>
      </ul>
    </nav>
  );
}
