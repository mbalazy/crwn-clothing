import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.comonent';

function App() {
  return (
    <div>
      <Route path="/" component={Header} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
