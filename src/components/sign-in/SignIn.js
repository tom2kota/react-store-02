import React, {Component} from "react";

import './SignIn.scss'
import {FormInput} from "../form-input/FormInput";
import {CustomButton} from "../custom-button/CustomButton";

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
                    {/*<label>Email</label>*/}
                    {/*<input name='email' type='email' value={this.state.email} required onChange={this.handleChange}/>*/}
                    {/*<label>Password</label>*/}
                    {/*<input name='password' type='password' value={this.state.password} required onChange={this.handleChange}/>*/}
                    {/*<input type='submit' value='Submit form'/>*/}

                    <FormInput name='email' type='email' label='Email' value={this.state.email} required
                               handleChange={this.handleChange}/>
                    <FormInput name='password' type='password' label='Password' value={this.state.password} required
                               handleChange={this.handleChange}/>
                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>


            </div>
        )
    }
}