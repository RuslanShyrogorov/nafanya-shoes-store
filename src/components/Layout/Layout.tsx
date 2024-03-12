import { Outlet } from 'react-router-dom';

import { Footer, HeaderObserver } from 'components';

import s from './Layout.module.scss';

export function Layout() {
  return (
    <div className={s.layout}>
      <HeaderObserver />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
