import React, {Component} from 'react';

import FormInput from '../form-input/FormInput.component';
import CustomButton from '../custom-button/CustomButton.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.style.scss';

class SignUp extends Component {
  constructor(props){
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

    handleSubmit = async e => {
      e.preventDefault();

      const {displayName, email, password, confirmPassword} = this.state;

      if(password !== confirmPassword) {
        alert("passwords do not match");
        return;
      }

      try {
        const {user} = await auth.createUserWithEmailAndPassword(email, password);

        await createUserProfileDocument(user, {displayName});
        this.setState({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        })

      } catch (error) {
        console.error(error);
      }
    };

    handleChange = e => {
      const {name, value} = e.target;

      this.setState({[name]: value});
    };

    render() {
      const {displayName, email, password, confirmPassword} = this.state;
      return (
        <div className="sign-up">
          <h2 className='title'> I do not have an account</h2>
          <span>Sign up with your email and password</span>
          <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
              type='text'
              name='displayName'
              value={displayName}
              onChange={this.handleChange}
              label='Display Name'
              required
            >
            </FormInput>
            <FormInput
              type='email'
              name='email'
              value={email}
              onChange={this.handleChange}
              label='Email'
              required
            >
            </FormInput>
            <FormInput
              type='password'
              name='password'
              value={password}
              onChange={this.handleChange}
              label='Password'
              required
            >
            </FormInput>
            <FormInput
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={this.handleChange}
              label='confirmPassword'
              required
            >
            </FormInput>
            <CustomButton type='submit'> SIGN UP </CustomButton>
          </form>
        </div>
      )
    }
  }

export default SignUp;
