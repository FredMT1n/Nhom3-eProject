import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from 'react-use-cart';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App /> 
    </CartProvider>
  </React.StrictMode>,
);

reportWebVitals();