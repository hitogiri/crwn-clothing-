import React, { Component } from 'react';

import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';

import {signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.style.scss';

class SignIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault();

    this.setState({ email: '', password: '' })
  }

  handleChange = (e) => {
    const { value, name } = e.target;

    this.setState({ [name]: value})
  }

  render(){
    return(
      <div className="sign-in">
        <h2>I already have an acount</h2>
        <span>Sign In with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="email"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.email}
            label="password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
