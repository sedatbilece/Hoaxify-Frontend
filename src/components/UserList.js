import React from "react";
import { useState, useEffect } from "react";
import { getUsers } from "../api/apiCalls";
import "../style/UserList.css"

const UserList = () => {

    const [users, setUsers] = useState([]);
    
    useEffect(() => {
         getUsers().then((response) => {
            setUsers(response.data);
        });

    }, []);

    return (
        <div className="container">
            
                                <ul class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600 bg-gray-100 text-lg flex ">Users</li>

            {users.map((user) => {
                return (
    <li  key={user.id} class="py-2 px-4 w-full rounded-lg border-b border-gray-200 dark:border-gray-600 flex hover:bg-gray-100 ">{user.username}</li>
    
                   
      
                );
            } )}
            </ul>
        </div>
    );
};

export default UserList;
