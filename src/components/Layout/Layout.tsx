import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';

import s from './Layout.module.scss';
import Footer from '../Footer/Footer';

function Layout() {
  return (
    <div className={s.layout}>
      <Header />
      <main className={s.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
