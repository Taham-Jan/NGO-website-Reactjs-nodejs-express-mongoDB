import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react'
import {persistStore} from 'redux-persist'


const root = ReactDOM.createRoot(document.getElementById('root'));
let persistor = persistStore(store);

root.render(
  <BrowserRouter>
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </BrowserRouter>
);


