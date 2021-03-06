import React, { Component } from 'react';

import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.style.scss';

class SignIn extends Component {
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = async (e) =>{
    e.preventDefault();

    const {email, password} = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: '', password: ''});
    } catch(error){
      console.log(error);
    }

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
            name='email'
            type='email'
            value={this.state.email}
            label='email'
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign In </CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;
