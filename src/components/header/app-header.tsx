import Link from "next/link";
import style from "./app-header.module.scss";
import { AuthLinks } from "./auth-links";

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
        <AuthLinks />
      </div>
    </nav>
  );
}




