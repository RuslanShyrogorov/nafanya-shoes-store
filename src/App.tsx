import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import './styles/index.scss';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
