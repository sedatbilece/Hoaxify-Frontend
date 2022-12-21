import React from "react";
import logo from "../assets/hoaxify.png"
import {Link, HashRouter as Router,} from "react-router-dom";


const TopBar = (props) => {

   const {LoggedInUsername,isLoggedIn,setIsLoggedIn} = props;

    let links =(
        <>
                
                <li>
                <Link to="/login" className="text-gray-900 dark:text-white hover:underline">Login</Link> 
                </li>
                <li>
                <Link to="/signup" className="text-gray-900 dark:text-white hover:underline">SignUp</Link> 
                </li>  
                </>
    )
        let links2 = (
            <>
                    <li>
                    <Link to={"/user/"+LoggedInUsername} className="text-gray-900 dark:text-white hover:underline">
                        {LoggedInUsername}
                        </Link> 
                    </li>
                    <li>
                    <Link to="/"  onClick={()=>setIsLoggedIn(false)} className="text-gray-900 dark:text-white hover:underline">Logout</Link> 
                    </li>
                     
                    </>
        );
    
    return (
       <div>
       
        <nav class="bg-gray-50 border-gray-200 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        
        <Link to="/" className="flex items-center">
        <img src={logo} class="h-6 mr-2 sm:h-9" alt="Hoaxify Logo" />
            <span><b>Hoaxify</b></span>
        </Link>
        
        <div class="flex items-center">
            
            <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                
                
                {!isLoggedIn  ? links : links2}
                
            </ul>
        </div>
    </div>
</nav>


       </div>

    );
    }

    export default TopBar;