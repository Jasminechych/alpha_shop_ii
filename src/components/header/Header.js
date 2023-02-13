import { ReactComponent as Logo } from '../icons/logo.svg'

import style from './Header.module.scss'

function Header () {
  return (
    <div className={style.header}>
      <nav>
        <div>
          <Logo />
        </div>
      </nav>
    </div>
  );
}

export default Header