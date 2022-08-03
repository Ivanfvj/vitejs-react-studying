import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import '../index.css';

// 1. create the root with react-dom/client library
// 2. render react components

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
