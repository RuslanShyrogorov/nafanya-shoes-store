import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
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
  className?: string;
}

function Navbar({ className }: INavbarProps) {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(true);

  const handleClickMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <>
      <nav className={cn(s.nav, className)}>
        <Button
          variant='icon'
          onClick={handleClickMobileMenu}
          type='button'
          className={s.navBurgerBtn}
        >
          <FaBars width='24' height='24' className={s.navBurgerIcon} />
        </Button>

        <div
          className={cn(s.navListMobileCover, {
            [s.navListMobileCoverShow]: showMobileMenu,
          })}
          onClick={handleClickMobileMenu}
        ></div>

        <ul
          className={cn(s.navList, {
            [s.navListShow]: showMobileMenu,
          })}
        >
          {menuList.map(({ id, title, path }) => (
            <li key={id}>
              <NavLink
                onClick={handleClickMobileMenu}
                to={path}
                className={({ isActive }) => cn({ [s.active]: isActive })}
              >
                {title}
              </NavLink>
            </li>
          ))}

          <Button
            variant='icon'
            onClick={handleClickMobileMenu}
            type='button'
            className={s.navCloseBtn}
          >
            <FaTimes className={s.navCloseIcon} />
          </Button>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
