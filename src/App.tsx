import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './styles/index.scss';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import ShoesPage from './pages/ShoesPage/ShoesPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import AboutPage from './pages/AboutPage/AboutPage';
import BasketPage from './pages/BasketPage/BasketPage';
import OfferPage from './pages/OfferPage/OfferPage';
import GuaranteePage from './pages/GuaranteePage/GuaranteePage';
import DetailedCardPage from './pages/DetailedPage/DetailedCardPage';
import HowChoosePage from './pages/HowChoosePage/HowChoosePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='shoes' element={<ShoesPage />} />
          <Route path='shoes/:cardId' element={<DetailedCardPage />} />
          <Route path='payment' element={<PaymentPage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='basket' element={<BasketPage />} />
          <Route path='offer' element={<OfferPage />} />
          <Route path='guarantee' element={<GuaranteePage />} />
          <Route path='how-choose-size' element={<HowChoosePage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
