import './style/App.css';
import UserSignupPage from './pages/UserSignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import { useState } from "react";
import {
  Routes,
  Route,
  HashRouter as Router,
  Link,
  redirect
} from 'react-router-dom'; 
import TopBar from './components/TopBar';

function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [LoggedInUsername, setLoggedInUsername] = useState('');

function onLoginSuccess (user) {
    setIsLoggedIn(true);
    setLoggedInUsername(user);
    console.log("Login Success",user,);
  }

  return (
    <div className="App">
    
      <Router>
      <TopBar  LoggedInUsername={LoggedInUsername} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
     
      <Routes>
            <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} LoggedInUsername={LoggedInUsername}/>} />
            <Route path="/login" element={<LoginPage onLoginSuccess={onLoginSuccess}/>}  />
            <Route path="/signup" element={<UserSignupPage/>} />
            <Route path="/user/:username" element={<UserPage LoggedInUsername={LoggedInUsername} isLoggedIn={isLoggedIn} />} />
            <Route path="*" element={<div>Not Found</div>} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
