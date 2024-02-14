import { useState } from 'react';
import { BsCart } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';

import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

import s from './Header.module.scss';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const handleClickMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo className={s.headerLogo} width='145' height='40' />
        <div className={s.headerNavDesktop}>
          <Navbar
            showMobileMenu={showMobileMenu}
            handleClickMobileMenu={handleClickMobileMenu}
          />
        </div>
        {showMobileMenu && (
          <>
            <div
              className={s.headerMobileMenuCover}
              onClick={handleClickMobileMenu}
            ></div>
            <div className={s.headerMobileMenu}>
              <Navbar
                showMobileMenu={showMobileMenu}
                handleClickMobileMenu={handleClickMobileMenu}
              />
            </div>
          </>
        )}

        <div className={s.basketImgWrapper}>
          <BsCart className={s.basketImg} />
          <div className={s.basketLabel}>
            <span>0</span>
          </div>
        </div>
        <Button
          variant='icon'
          onClick={handleClickMobileMenu}
          type='button'
          className={s.burgerBtn}
        >
          <FaBars width='24' height='24' className={s.burgerIcon} />
        </Button>
      </div>
    </header>
  );
}

export default Header;
