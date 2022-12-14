import React from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
    let { id } = useParams();
    return (
        <div>
        <h1>User Page</h1>
        <p>Id: {id}</p>
        </div>
    );
    }
export default UserPage;