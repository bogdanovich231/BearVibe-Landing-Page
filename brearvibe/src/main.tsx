import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import ErrorMessage from './Helper/ErrorBoundary/ErrorMessage.tsx';
import ErrorBoundary from './Helper/ErrorBoundary/ErrorBoundary.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary fallback={<ErrorMessage />}>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
