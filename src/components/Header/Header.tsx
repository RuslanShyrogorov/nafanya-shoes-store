import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';

import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

import s from './Header.module.scss';

function Header() {
  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <Logo className={s.headerLogo} width='145' height='40' />
        <Navbar className={s.headerNav} />
        <div className={s.basket}>
          <Link to='basket'>
            <BsCart className={s.basketImg} />
            <div className={s.basketLabel}>
              <span>0</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
