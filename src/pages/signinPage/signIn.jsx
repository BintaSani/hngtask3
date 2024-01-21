import React, {useState} from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './signIn.scss';


const SignInPage = () => {
    const [isSignInVisible, setSignInVisible] = useState(true);
  
    const toggleSignInVisibility = () => {
      setSignInVisible(!isSignInVisible);
    };
  
    return (
      <div className='body'>
        <div className='container'>
          {isSignInVisible ? (
            <SignIn toggleVisibility={toggleSignInVisibility} />
          ) : (
            <SignUp />
          )}
        </div>
      </div>
    );
  };
  

export default SignInPage;