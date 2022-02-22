import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/CartIcon.component';
import CartDropdown from '../cart-dropdown/CartDropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.style.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to="/">
      <Logo className='logo' />
    </Link>


    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>

      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser
        ?
        (<div className='option' onClick={()=>auth.signOut()}> SIGN OUT </div>)
        :
        (<Link className='option' to='/login'> SIGN IN </Link>)
      }
      <CartIcon/>
    </div>
    { hidden ? null : <CartDropdown /> }
  </div>
)

const mapStateToProps = ({user: { currentUser }, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
