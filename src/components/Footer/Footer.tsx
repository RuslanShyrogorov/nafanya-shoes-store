import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa6';

import s from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footerContainer}>
        <div className={s.footerWrapper}>
          <div className={s.footerCategory}>
            <h3 className={s.footerTitle}>Категорії</h3>
            <ul className={s.categoryList}>
              <li className={s.categoryItem}>Взуття для хлопчиків</li>
              <li className={s.categoryItem}>Взуття для дівчаток</li>
              <li className={s.categoryItem}>Устілки</li>
            </ul>
          </div>

          <div className={s.footerContacts}>
            <h3 className={s.footerTitle}>Контакти</h3>
            <address>
              <ul>
                <li>
                  <a href='tel:+380965386648'>+38 (096) 538‑66-48</a>
                </li>
                <li>
                  <a href='tel:+380983033777'>+38 (098) 30-33-777</a>
                </li>
                <li>
                  <a href='mailto:magnafanya@gmail.com'>magnafanya@gmail.com</a>
                </li>
                <li>
                  <a
                    href='https://maps.app.goo.gl/vfWqAuLdcMkSEuNp9'
                    target='_blank'
                    rel='noreferrer'
                  >
                    Кривий Ріг вул. Володимира Великого, 9
                  </a>
                </li>
              </ul>
            </address>
          </div>

          <div className={s.footerUsefullLinks}>
            <h3 className={s.footerTitle}>Додаткова інформація</h3>
            <ul>
              <li>
                <Link to='offer'>Договір оферти</Link>
              </li>
              <li>
                <Link to='how-choose-size'>Як обрати розмір</Link>
              </li>
              <li>
                <Link to='guarantee'>Гарантія</Link>
              </li>
            </ul>
          </div>

          <div className={s.social}>
            <h3 className={s.footerTitle}>Приєднуйтесь</h3>
            <ul className={s.socialList}>
              <li className={s.socialItem}>
                <a
                  className={s.socialLink}
                  href='https://www.instagram.com/magazin_nafanya?igsh=cGdnZmR1NG0ybHdl'
                  rel='noreferrer noopener'
                  target='_blank'
                >
                  <FaInstagram
                    width='24'
                    height='24'
                    className={s.socialIcon}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
