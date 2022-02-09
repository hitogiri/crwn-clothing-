import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import './App.css';

function App() {
  return (
    <div>
    <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
