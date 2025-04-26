import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


window.onerror = function (message, source, lineno, colno, error) {
  console.warn('Uncaught error:', { message, source, lineno, colno, error });

  if (message === 'Script error.') return true; 
};

