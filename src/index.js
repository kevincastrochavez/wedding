import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import reducer, { initialState } from './reducer';
import { StateProvider } from './StateProvider';

import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.scss';

const Layout = lazy(() => import('./components/Layout'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route
          exact
          path='/'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Layout page={'Home'} />
            </Suspense>
          }
        />
        <Route
          path='/gallery'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Layout page={'Gallery'} />
            </Suspense>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  </StateProvider>
);

reportWebVitals();
