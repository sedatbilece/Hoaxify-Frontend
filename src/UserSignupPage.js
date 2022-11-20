import React from "react";
import { useState ,useEffect} from "react";

export default function UserSignupPage() {

    const [displayName, setDisplayName] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordRepeat, setPasswordRepeat] = useState(null);

    const [sendButton, setSendButton] = useState(true);


    function onChanged (event) {
       if(event.target.name === "displayname")
           setDisplayName(event.target.value);
        else if(event.target.name === "username")
            setUsername(event.target.value);
        else if(event.target.name === "password")
            setPassword(event.target.value);
        else if(event.target.name === "passwordrepeat")
            setPasswordRepeat(event.target.value);

    }
    


    useEffect(() => {
        if(displayName && username && password && passwordRepeat )
        {console.log("displayname: " + displayName + " username: " + username + " password: " + password + " passwordrepeat: " + passwordRepeat);
        setSendButton(false);}
        else
            setSendButton(true);
    }, [displayName,username,password,passwordRepeat]);

    return (
      <form>
        <h1>Sign Up</h1>
        <div>
            <label>Display Name</label>
            <input name="displayname" onChange={onChanged}/>
        </div>
        <div>
            <label>Username</label>
            <input  name="username" onChange={onChanged}/>
        </div>
        <div>
            <label>Password</label>
            <input name="password" type="password"  onChange={onChanged}/>
        </div>
        <div>
            <label>Password Repeat</label>
            <input name="passwordrepeat"type="password" onChange={onChanged} />
        </div>
        <div>
          
            <button disabled={sendButton}>Sign Up</button>
        </div>
        </form>
    );
  }

