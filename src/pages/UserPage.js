import React from "react";
import { useParams,useLocation   } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../api/apiCalls";
import "../style/UserPage.css"
import ProfileCard from "../components/ProfileCard";
const UserPage = (props) => {
    const {LoggedInUsername} = props;
    let { username } = useParams();
    let location = useLocation();

    const [user, setUser] = useState({});
    const [error, setError] = useState(null);
    const[notFound,setNotFound] = useState(false);
    const [editable, setEditable] = useState(false);

    const checkEditable = () => {
        if (LoggedInUsername === username) {
            setEditable(true);
        }
    }

    useEffect(() => {
        loadUser(username);
    }, []);

    useEffect(() => {
        loadUser(username);
     },[location]) 

    const loadUser = (username) => {
        getUser(username).then((response) => {
            setUser(response.data);
            setNotFound(false);
            console.log("user:", response.data);
        }).catch((error) => {
            console.log("error:", error);
            setNotFound(true);
            setError(error.response.data.message);
        }
        );
        checkEditable();
    }


    if(notFound){
        return (
            <div className="container">
            
             <p className="bg-red-100 border  text-red-700  relative m-1 centerdiv p-7 rounded-2xl">{error}</p>
            </div>
        );
    }
    
    return(
        <div className="container">
            
              <ProfileCard user={user} LoggedInUsername={LoggedInUsername} editable={editable} setUser={setUser}/>
        </div>

    )





    }
export default UserPage;