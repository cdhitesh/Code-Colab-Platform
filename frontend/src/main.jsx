import React from 'react';              // 👈 Add this line
import { createRoot } from 'react-dom/client';
import './index.css';
import 'remixicon/fonts/remixicon.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>                   {/* 👈 Wrap for best practice */}
    <App />
  </React.StrictMode>
);
