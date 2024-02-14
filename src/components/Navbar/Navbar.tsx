import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import cn from 'classnames';

import Button from '../Button/Button';

import s from './Navbar.module.scss';

const menuList = [
  { id: '1', title: 'Головна', path: '/' },
  { id: '2', title: 'Взуття', path: '/shoes' },
  { id: '3', title: 'Оплата та доставка', path: 'payment' },
  { id: '4', title: 'Про нас', path: '/about' },
];

interface INavbarProps {
  showMobileMenu: boolean;
  handleClickMobileMenu: () => void;
}

function Navbar({ showMobileMenu, handleClickMobileMenu }: INavbarProps) {
  const handlerClickMobileLink = () => {
    if (showMobileMenu) {
      handleClickMobileMenu();
    }
  };

  return (
    <>
      <nav className={s.nav}>
        <ul className={s.navList}>
          {menuList.map(({ id, title, path }) => (
            <li key={id}>
              <NavLink
                onClick={handlerClickMobileLink}
                to={path}
                className={({ isActive }) => cn({ [s.active]: isActive })}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {showMobileMenu && (
          <Button
            variant='icon'
            onClick={handleClickMobileMenu}
            type='button'
            className={s.navCloseBtn}
          >
            <FaTimes className={s.navCloseIcon} />
          </Button>
        )}
      </nav>
    </>
  );
}

export default Navbar;
