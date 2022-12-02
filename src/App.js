import './style/App.css';
import UserSignupPage from './pages/UserSignupPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import {
  Routes,
  Route,
  HashRouter as Router,
  Link,
  redirect
} from 'react-router-dom'; 
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      
      

      <Router>
      <TopBar />
     
      <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/signup" element={<UserSignupPage/>} />
            <Route path="/user/:username" element={<UserPage/>} />
            <Route path="*" element={<HomePage/>} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
