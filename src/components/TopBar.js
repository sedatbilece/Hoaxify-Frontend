import React from "react";
import logo from "../assets/hoaxify.png"
import {Link, HashRouter as Router,} from "react-router-dom";
const TopBar = () => {
    return (
       <div>
       
        <nav class="bg-gray-50 border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        
        <Link to="/" className="flex items-center">
        <img src={logo} class="h-6 mr-2 sm:h-9" alt="Hoaxify Logo" />
            <span><b>Hoaxify</b></span>
        </Link>
        
        <div class="flex items-center">
            <a href="#" class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
            <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline mr-6">xxx</a>
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                <li>
                <Link to="/user" className="text-gray-900 dark:text-white hover:underline">User</Link> 
                </li>
                <li>
                <Link to="/login" className="text-gray-900 dark:text-white hover:underline">Login</Link> 
                </li>
                <li>
                <Link to="/signup" className="text-gray-900 dark:text-white hover:underline">SignUp</Link> 
                </li>  
                
            </ul>
        </div>
    </div>
</nav>


       </div>

    );
    }

    export default TopBar;