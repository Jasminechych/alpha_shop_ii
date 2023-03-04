import { ReactComponent as Logo } from "src/assets/icons/logo.svg";
import { ReactComponent as Search } from "src/assets/icons/search.svg";
import { ReactComponent as Cart } from "src/assets/icons/cart.svg";
import { ReactComponent as Moon } from "src/assets/icons/moon.svg";

import style from "src/components/Header/Header.module.scss";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <a href="./" className={style.navbarLogo}>
          <Logo />
        </a>
        <label htmlFor="toggleHamburger" className={style.toggleHamburgerLabel}>
          <span className={style.hamburger}></span>
        </label>
        <input
          type="checkbox"
          id="toggleHamburger"
          className={style.toggleHamburger}
        />
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
        </nav>
        <div className={style.navbarTools}>
          <Search />
          <Cart />
          <Moon />
        </div>
      </div>
    </header>
  );
}

export default Header;
