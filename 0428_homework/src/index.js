import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './redux/reducers';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { ComponentAProvider } from './challenges/store/ComponentA';

// const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  <ComponentAProvider>
    <App />
  </ComponentAProvider>
  // </Provider>
);
