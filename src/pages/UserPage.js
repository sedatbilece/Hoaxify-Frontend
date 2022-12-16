import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser } from "../api/apiCalls";
const UserPage = () => {
    let { username } = useParams();

    const [user, setUser] = useState({});

    useEffect(() => {
        loadUser(username);
    }, []);

    const loadUser = (username) => {
        getUser(username).then((response) => {
            setUser(response.data);
            console.log("user:", response.data);
        }).catch((error) => {
            console.log(error)
        }
        );
    }


    return (
        <div>
        <h1>User Page</h1>
        <p>Id: {username}</p>
        </div>
    );
    }
export default UserPage;