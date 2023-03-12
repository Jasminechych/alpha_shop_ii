import { ReactComponent as Logo } from "src/assets/icons/logo.svg";
import { ReactComponent as Search } from "src/assets/icons/search.svg";
import { ReactComponent as Cart } from "src/assets/icons/cart.svg";
import { ReactComponent as Moon } from "src/assets/icons/moon.svg";
import { ReactComponent as Sun } from "src/assets/icons/sun.svg";
import { useThemeData } from "src/ThemeContext.jsx";

import style from "src/components/Header/Header.module.scss";

const navbarListData = [
  { id: "man", name: "男款" },
  { id: "woman", name: "女款" },
  { id: "news", name: "最新消息" },
  { id: "contactUs", name: "聯絡我們" },
  { id: "customProduct", name: "客製商品" },
];

function Header() {
  const { isDark, handleSwitchTheme } = useThemeData();

  return (
    <header className={style.header} data-theme={isDark ? "dark" : ""}>
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
          <NavbarList />
        </nav>
        <div className={style.navbarTools}>
          <Search />
          <Cart />
          {!isDark && <Moon onClick={handleSwitchTheme} />}
          {isDark && <Sun onClick={handleSwitchTheme} />}
        </div>
      </div>
    </header>
  );
}

function NavbarList() {
  return (
    <ul className={style.navbarList}>
      {navbarListData.map(({ id, name }) => {
        return (
          <li key={id} className={style.navbarListItem}>
            <a href="./">{name}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Header;
