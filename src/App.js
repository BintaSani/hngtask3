import { Routes, Route, Navigate } from 'react-router';
import HomePage from './pages/homepage/homepage';
import SignInPage from './pages/signinPage/signIn';
import { auth } from './utils/firebase';
import './App.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

function App() {
  const [user, setUser] = useState(null);
  const navigate =useNavigate();
  useEffect(() => {
   
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // User logged in
        console.log(userAuth);
        setUser(userAuth);
        
      } else {
        // User logged out
        setUser(null);
        navigate('/')
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' Component={SignInPage}/> */}
        <Route exact path='/' Component={() => 
          //this.props.currentUser
          user ? (
            <Navigate to='/home' replace/>
          ) : (
            <SignInPage/>
          )} />
        <Route path='/home' Component={HomePage} />
      </Routes>
     
    </div>
  );
}

export default App;
