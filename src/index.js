import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './routes/Home';
import { MesaProvider } from './MesaContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Comandas from './routes/Comandas';
import Header from './components/Header';

ReactDOM.render(
  <MesaProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/comandas' element={<Comandas />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </MesaProvider>,
  document.getElementById('root')
);

reportWebVitals();
