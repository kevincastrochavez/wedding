import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/main.scss';

import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </StateProvider>
);

reportWebVitals();
