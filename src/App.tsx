import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import './styles/index.scss';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ShoesPage from './pages/ShoesPage/ShoesPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import AboutPage from './pages/AboutPage/AboutPage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='shoes' element={<ShoesPage />} />
          <Route path='payment' element={<PaymentPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
