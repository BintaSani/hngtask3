import { Routes, Route } from 'react-router';
import HomePage from './pages/homepage/homepage';
import SignInPage from './pages/signinPage/signIn';
import './App.css';


function App() {
 

  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={SignInPage} />
        <Route path='/home' Component={HomePage} />
      </Routes>
     
    </div>
  );
}

export default App;
