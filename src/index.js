import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/main.scss';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
