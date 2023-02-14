import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import { ReactComponent as Cart } from "../icons/cart.svg";
import { ReactComponent as Moon } from "../icons/moon.svg";

import style from "./Header.module.scss";

function Header() {
  return (
    <header className={style.header}>
      <a href="./" className={style.navbarLogo}>
        <Logo />
      </a>
      <nav className={style.navbar}>
        <ul className={style.navbarList}>
          <li className={style.navbarListItem}>男款</li>
          <li className={style.navbarListItem}>女款</li>
          <li className={style.navbarListItem}>最新消息</li>
          <li className={style.navbarListItem}>聯絡我們</li>
          <li className={style.navbarListItem}>商品列表</li>
        </ul>
        <div className={style.navbarTools}>
          <Search />
          <Cart />
          <Moon />
        </div>
      </nav>
    </header>
  );
}

export default Header;
