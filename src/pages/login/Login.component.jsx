import React from 'react';

import SignIn from '../../components/sign-in/SignIn.component';
import SignUp from '../../components/sign-up/SignUp.component';

import './login.style.scss';

const Login = () => (
  <div className='login'>
    <SignIn />
    <SignUp />
  </div>
)

export default Login;
