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
  const [username, setUsername] = useState('');

function onLoginSuccess (user) {
    setIsLoggedIn(true);
    setUsername(user);
    console.log("Login Success",user,);
  }

  return (
    <div className="App">
    
      <Router>
      <TopBar  username={username} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
     
      <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage onLoginSuccess={onLoginSuccess}/>}  />
            <Route path="/signup" element={<UserSignupPage/>} />
            <Route path="/user/:username" element={<UserPage/>} />
            <Route path="*" element={<div>Not Found</div>} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
