import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth } from '../../utils/firebase';
import './sign-in.styles.scss';



class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            email: '',
            password:''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email,password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password)
            
            this.setState({email: '', password: ''});
            
        } catch (error){
            console.log(error.message);
            alert("Email/password incorrect")
        }
    };
    

    handleChange = e => {
        const { value, name} = e.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>Welcome!!!</h2>
                <span>Sign in with your email and password</span>
            
                <form className='form-box' onSubmit={this.handleSubmit}>
                    <FormInput 
                      name='email' 
                      type='email' 
                      value={this.state.email} 
                      handleChange={this.handleChange}
                      label='email'
                    required/>
                    
                    <FormInput 
                      name='password' 
                      type='password' 
                      value={this.state.password} 
                      handleChange={this.handleChange}
                      label='password'
                    required/>
                    
                    <div className='buttons'>
                       <CustomButton type='submit'  >Sign in</CustomButton>
                       
                    </div>
                    
                </form>
            </div>
        )
    }
}


export default SignIn;