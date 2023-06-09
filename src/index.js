import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {App} from './components/index';
import { ToastProvider } from 'react-toast-notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastProvider autoDismiss={true} autoDismissTimeout={5000} placement='top-left'>
      <App />
    </ToastProvider>
  </React.StrictMode>
);

