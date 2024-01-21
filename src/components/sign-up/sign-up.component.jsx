import React, {useState} from 'react';
import { useNavigate } from 'react-router';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../utils/firebase';
import './sign-up.styles.scss';



const SignUp = () => {
    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();
    const {displayName, email, password, confirmPassword} = userCredentials;
    
    const handleSubmit = async e => {
        e.preventDefault();
        
    
        if (password !== confirmPassword) {
            alert("passwords doesn't match");
            return;
        } 
    
        try{
          const {user} = await auth.createUserWithEmailAndPassword(email, password);
          await createUserProfileDocument(user, {displayName});
         
          setCredentials({
              displayName: '',
              email: '',
              password: '',
              confirmPassword:''
          });
          navigate('/home')
        } catch (error){
            console.log(error);
        }
      };
    
      const handleChange = e => {
          const { name, value} = e.target;
          setCredentials({...userCredentials, [name]: value});
      }
    
    
    
        return(
            <div id='signup' className='sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
            
                <form className='form-box' onSubmit={handleSubmit}>
                <FormInput 
                type='text'
                name='displayName'
                value={displayName} 
                onChange={handleChange}
                label='Display Name'
                required
                />

                <FormInput 
                type='email'
                name='email'
                value={email} 
                onChange={handleChange}
                label='Email'
                required
                />

                <FormInput 
                type='password'
                name='password'
                value={password} 
                onChange={handleChange}
                label='Password'
                required
                />

                <FormInput 
                type='password'
                name='confirmPassword'
                value={confirmPassword} 
                onChange={handleChange}
                label='Confirm password'
                required
                />
                <div className='buttons'>
                <CustomButton type='submit'>SIGN UP</CustomButton>
                </div>     
            </form>
        </div>
    )
}


export default SignUp;