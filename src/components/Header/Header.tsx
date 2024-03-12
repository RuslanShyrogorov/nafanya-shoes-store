import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { BsCart } from 'react-icons/bs';

import { basketStore } from '../../store/basketStore';
import { Logo, Navbar } from 'components';

import s from './Header.module.scss';

function Header() {
  const { totalItems } = basketStore;
  return (
    <header className={s.header}>
      <div className={s.headerContainer}>
        <Logo className={s.headerLogo} width='145' height='40' />
        <address>
          <ul className={s.headerPhones}>
            <li>
              <a href='tel:+380965386648'>+38 (096) 538‑66-48</a>
            </li>
            <li>
              <a href='tel:+380983033777'>+38 (098) 30-33-777</a>
            </li>
          </ul>
        </address>
        <Navbar className={s.headerNav} />

        <div className={s.basket}>
          <Link to='basket'>
            <BsCart className={s.basketImg} />
            <div className={s.basketLabel}>
              <span>{totalItems}</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}

export const HeaderObserver = observer(Header);
