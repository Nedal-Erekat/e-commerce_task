import Link from "next/link";
import style from "./app-header.module.scss";
import { AuthLinks } from "./auth-links";
import { SessionPayload } from "@/types/session.type";
import { getSession } from "@/actions/sessions";

export default async function AppHeader() {
  const user: SessionPayload | null = await getSession();

  return (
    <nav className={style.nav}>
      <div className={style.container}>
        <div className={style.lftNav}>
          <Link className={style.appHeadline} href="/">
            <h1 className="appHeadline">Shopping</h1>
          </Link>
          {user && (
            <ul className={style.navList}>
              <li className={style.navItem}>
                <Link href="/" className={style.navLink}>
                  Home
                </Link>
              </li>
            </ul>
          )}
        </div>
        <AuthLinks username={user?.username}/>
      </div>
    </nav>
  );
}
