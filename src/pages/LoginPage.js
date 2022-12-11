import React from "react";
import Input from "../components/Input";
import "../style/LoginPage.css";
import { useState } from "react";
import {login} from "../api/apiCalls";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import {loginAuth} from "../shared/loginSlice"
const LoginPage = (props) => {
  let navigate = useNavigate();
      let {onLoginSuccess} = props;
    const [pendingApiCall, setPendingApiCall] = useState(false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [errors, setErrors] = useState({});
    const [sendButton, setSendButton] = useState(true);
    const [loginResponse, setLoginResponse] = useState(null);

    const dispatch = useDispatch();

    function onChanged(event) {
        if (event.target.name === "username") {
            setUsername(event.target.value);
            setErrors({...errors,username:null});
            setLoginResponse(null);
        }
        else if (event.target.name === "password") {
            setPassword(event.target.value);
            setErrors({...errors,password:null});
            setLoginResponse(null);
        }
    }

const onClickLogin = (event ) => {
  

  if(username === null || password === null){
    setErrors({...errors,username:"Username cannot be empty",password:"Password cannot be empty"});
    
  }
  console.log(errors);
 
  event.preventDefault(); 
  const creds = {
    username,
    password
  };
  login(creds).then(response => {// success login
    console.log("success login:" ,response.data);
    setLoginResponse(null);
    navigate('/');
    dispatch(loginAuth({username,password}));
    onLoginSuccess(response.data.username);
    
   

  }).catch(error => {
    if(username !== null || password !== null){
      setLoginResponse(error.response.data.message);
    }
    
  });
  setUsername(null);setPassword(null);
  var elements = document.getElementsByTagName("input");
  for (var ii=0; ii < elements.length; ii++) {
    if (elements[ii].type == "text" || elements[ii].type == "password") {
      elements[ii].value = "";
    }
  }
}
    return (
        <div className="con">
        <div  className="header">Login</div>
    
        <form class="w-full max-w-sm card-shadow">

    <Input
    name="username"
    label="Username"
    type="text"
    error = {errors.username}
    onChanged={onChanged}
    />
  <Input 
  name="password"
  label="Password"
  type="password"
  error = {errors.password}
    onChanged={onChanged}
  />
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
    {loginResponse && <div class="bg-red-100 border  text-red-700 px-4 py-3 rounded relative m-1" role="alert">
  <span class="block sm:inline">Username or Password wrong !</span>
</div>}
      <button   onClick={onClickLogin} className='shadow bg-cyan-300 hover:bg-cyan-400 focus:shadow-outline 
      focus:outline-none  text-white font-bold py-2 px-4 rounded sendit' type="submit">
        Login {pendingApiCall && <div role="status">
    <svg aria-hidden="true" class="mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    
</div>}
      </button>
      
    </div>
  </div>
</form>
        </div>
    );
}
export default LoginPage;