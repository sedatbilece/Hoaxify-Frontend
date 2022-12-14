import React from "react";
import { useState ,useEffect} from "react";
import {signUp} from "../api/apiCalls";
import Input from "../components/Input";
import "../style/SignupPage.css";

export default function UserSignupPage() {

    const [displayName, setDisplayName] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordRepeat, setPasswordRepeat] = useState(null);
    const [pendingApiCall, setPendingApiCall] = useState(false);
    const [sendButton, setSendButton] = useState(true);
    const [errors, setErrors] = useState({});

    function onChanged (event) {
       
      console.log(password,passwordRepeat);
          console.log(event.target.name);
          console.log(event.target.value);

       if(event.target.name === "displayname"){
        setDisplayName(event.target.value);
        setErrors({...errors,displayName:null});
       }
           
        else if(event.target.name === "username"){
          setUsername(event.target.value);
          setErrors({...errors,username:null}); 
        }  
        else if(event.target.name === "password"){
          setPassword(event.target.value);
          setErrors({...errors,password:null}); 
        }
        else if (event.target.name==="passwordRepeat"){
          setPasswordRepeat(event.target.value);
          if( event.target.value !== password){
            setErrors({...errors,passwordRepeat:"Passwords do not match"});
        }
        else{
          setErrors({...errors,passwordRepeat:null});
        }
      }
    }

    function onClickSignUp(event){
        event.preventDefault();
        setPendingApiCall(true);

        const body={
            username:username,
            displayName:displayName,
            password:password
        }
        signUp(body)
        .then(response=>{
            console.log(response.data.message);
            setPendingApiCall(false);
        }).catch(error=>{
            console.log(error.response.data);
            if(error.response.data.validationErrors){
                setErrors(error.response.data.validationErrors);
            }
           
            setPendingApiCall(false);
        })
        var elements = document.getElementsByTagName("input");
for (var ii=0; ii < elements.length; ii++) {
  if (elements[ii].type == "text" || elements[ii].type == "password") {
    elements[ii].value = "";
  }
}
        setDisplayName(null);setUsername(null);setPassword(null);setPasswordRepeat(null);
    }    


    useEffect(() => {
      console.log("errors:",errors);
        if(displayName && username && password && passwordRepeat )
        {
        setSendButton(false);
         }
        else
            setSendButton(true);


    }, [displayName,username,password,passwordRepeat,errors]);

    return (
        <div className="con">
        <div  className="header">Sign Up</div>
    
        <form class="w-full max-w-sm card-shadow">

   <Input 
   name="displayname"
    label="Display Name"
    error={errors.displayName}
    onChanged={onChanged}
    value={displayName}
    type="text"
   />

    <Input
    name="username"
    label="Username"
    error={errors.username}
    onChanged={onChanged}
    value={username}
    type="text"
    />
  <Input 
  name="password"
  label="Password"
  error={errors.password}
  onChanged={onChanged}
  value={password}
  type="password"
  />
  <Input
  name="passwordRepeat"
  label="Password Repeat"
  error={errors.passwordRepeat}
  onChanged={onChanged}
  value={passwordRepeat}
  type="password"
  />

  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button   onClick={onClickSignUp} className='shadow bg-cyan-300 hover:bg-cyan-400 focus:shadow-outline 
      focus:outline-none  text-white font-bold py-2 px-4 rounded sendit' type="submit">
        Sign Up {pendingApiCall && <div role="status">
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

