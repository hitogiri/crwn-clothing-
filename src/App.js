import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/HomePage.component';
import ShopPage from './pages/shop/Shop.component';
import Header from './components/header/Header.component';
import Login from './pages/login/Login.component';
import { auth } from './firebase/firebase.utils';

import './App.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state= {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
