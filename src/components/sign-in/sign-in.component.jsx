import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth } from '../../utils/firebase';
import './sign-in.styles.scss';




const SignIn = ({ toggleVisibility }) => {
    const [userCredentials, setCredentials] = useState({email: '', password: ''})
    const navigate = useNavigate();
    const {email, password} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
       
        try {
            await auth.signInWithEmailAndPassword( email, password);
            setCredentials({email: '', password: ''})
            navigate('/home')
          } catch (err) {
            console.error(err);
            alert('email/password incorrect');
          }

    };
    const handleChange = e => {
        const { value, name } = e.target;

        setCredentials({...userCredentials, [name]: value});
    };

    
        return(
            <div className='sign-in'>
                <h2>Welcome!!!</h2>
                <span>Sign in with your email and password</span>
            
                <form className='form-box' onSubmit={handleSubmit}>
                    <FormInput 
                      name='email' 
                      type='email' 
                      value={email} 
                      handleChange={handleChange}
                      label='email'
                    required/>
                    
                    <FormInput 
                      name='password' 
                      type='password' 
                      value={password} 
                      handleChange={handleChange}
                      label='password'
                    required/>

                    <p className='link' onClick={toggleVisibility}>Create Account</p>

                    <div className='buttons'>
                       <CustomButton type='submit'  >Sign in</CustomButton>
                       
                    </div>
                    
                </form>
            </div>
        )
}


export default SignIn;