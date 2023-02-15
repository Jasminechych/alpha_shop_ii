import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import { ReactComponent as Cart } from "../icons/cart.svg";
import { ReactComponent as Moon } from "../icons/moon.svg";

import style from "./Header.module.scss";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <label htmlFor="toggleHamburger">
          <input type="checkbox" className={style.toggleHamburger} />
        </label>
        <a href="./" className={style.navbarLogo}>
          <Logo />
        </a>
        <nav className={style.navbar}>
          <ul className={style.navbarList}>
            <li className={style.navbarListItem}>
              <a href="./">男款</a>
            </li>
            <li className={style.navbarListItem}>
              <a href="./">女款</a>
            </li>
            <li className={style.navbarListItem}>
              <a href="./">最新消息</a>
            </li>
            <li className={style.navbarListItem}>
              <a href="./">聯絡我們</a>
            </li>
            <li className={style.navbarListItem}>
              <a href="./">商品列表</a>
            </li>
          </ul>
          <div className={style.navbarTools}>
            <Search />
            <Cart />
            <Moon />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
