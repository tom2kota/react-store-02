import React, {Component} from "react";

import './SignIn.scss'
import {FormInput} from "../form-input/FormInput";
import {CustomButton} from "../custom-button/CustomButton";
import {signInWithGoogle} from "../../firebase/firebase.utils";

export class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('submit');
        this.setState({email: '', password: ''})
    }

    handleChange = (event) => {
        console.log('change');
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email & password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' label='Email' value={this.state.email} required
                               handleChange={this.handleChange}/>
                    <FormInput name='password' type='password' label='Password' value={this.state.password} required
                               handleChange={this.handleChange}/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}