import React from "react";
import { useState, useEffect } from "react";
import { getUsers } from "../api/apiCalls";
import "../style/UserList.css"
import defaultPic from "../assets/profile.png"
import {Link} from "react-router-dom";
const UserList = () => {

    const [users, setUsers] = useState([]);
    const [pages, setPages] = useState([]);
    
    useEffect(() => {
         loadUsers();

    }, []);

    useEffect(() => {
        console.log("users =>",users);
        imageSource = users.image;
    }, [users]);

    let imageSource = defaultPic;
if(users && users.image){
    imageSource = users.image;
}


    const loadUsers = (page) => {
        getUsers(page).then((response) => {
            console.log(response.data)
            setUsers(response.data.content);
            setPages(response.data)
        });
    }


    
    return (
        <div className="container">
            
                                <ul class="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li class="py-2 px-4 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600 bg-gray-100 text-lg flex ">Users</li>

            {users.map((user) => {
                return (
                   <Link  to={`/user/${user.username}`}className="flex hover:bg-gray-100 mt-2">
                    <img src={defaultPic} className="rounded-full w-12 h-12"></img>
                        <li  key={user.id} class="py-2 px-4 w-full rounded-lg border-b border-gray-200 dark:border-gray-600 flex  ">{user.displayName} @{user.username}</li>

                   </Link>
                );
            } )}
            <div className="doldur ">
               {!pages.first && <button className="btn" onClick={()=>loadUsers(pages.number-1)}>Prev</button>}
                {!pages.last && <button className="btn" onClick={()=>loadUsers(pages.number+1)}>Next</button>}
            </div>
            </ul>
            
        </div>
    );
};

export default UserList;
