import React from 'react';
import { render } from 'react-dom';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store';

import App from './App';

const store = configureStore();

const renderApp = () =>
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp);
}

renderApp();
