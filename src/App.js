import { Routes, Route, useNavigate } from 'react-router';
import HomePage from './pages/homepage/homepage';
import SignInPage from './pages/signinPage/signIn';
import { auth } from './utils/firebase';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [user, setUser] = useState(null);
  const navigate =useNavigate();
  useEffect(() => {
   
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // User logged in
        
        setUser(userAuth);
        
      } else {
        // User logged out
        setUser(null);
        navigate('/')
      }
    });

    return unsubscribe;
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' Component={SignInPage}/> */}
        <Route exact path='/' Component={() => 
          //this.props.currentUser
          user ? (
            navigate('/home') 
          ) : (
            <SignInPage/>
          )} />
        <Route path='/home' Component={HomePage} />
      </Routes>
     
    </div>
  );
}

export default App;
