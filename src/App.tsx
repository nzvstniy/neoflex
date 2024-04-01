import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ShopPage } from './pages/ShopPage/shop-page';
import { ROUTES } from './router/routes';
import { CartPage } from './pages/CartPage/cart-page';
import { ShoppingCartProvider } from './context/cart-context';
import { ConfigProvider, Layout } from 'antd';
import { HeaderUI } from './components/Header/header';
import { FavPage } from './pages/FavPage/fav-page';
import FooterUI from './components/Footer/footer';

const App: React.FC = () => (

    <ShoppingCartProvider>
      <BrowserRouter>
        <Layout>
          <HeaderUI />
          <Routes>
            <Route
              path={ROUTES.shop}
              element={<ShopPage />}
            />
            <Route
              path={ROUTES.favourite}
              element={<FavPage />}
            />
            <Route
              path={ROUTES.cart}
              element={<CartPage />}
            />
            <Route
              path='*'
              element={<Navigate to={ROUTES.shop} replace />}
            />
          </Routes>
          <FooterUI />

        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>

);



export default App;
