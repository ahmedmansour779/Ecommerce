import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import GlobalProvider from './context/GlobalState';
import "./index.css";
import Scroll from './scrollToTop/Scroll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Router>
    <GlobalProvider>
      <App />
      <Scroll />
    </GlobalProvider>
  </Router>
  // </React.StrictMode>
);