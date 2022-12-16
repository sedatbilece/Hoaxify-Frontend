import React from "react";
import { useParams,useLocation   } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../api/apiCalls";
const UserPage = () => {
    let { username } = useParams();
    let location = useLocation();

    const [user, setUser] = useState({});
    const [error, setError] = useState(null);
    const[notFound,setNotFound] = useState(false);
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
    }


    return (
        <div>
        <h1>User Page</h1>
        <hr></hr>
        
        {notFound ? <p className="bg-red-100 border  text-red-700 px-4 py-3 rounded relative m-1">{error}</p>:<p >Username: {user.username}</p>}
        </div>
    );
    }
export default UserPage;