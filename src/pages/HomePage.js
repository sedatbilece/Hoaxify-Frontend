import React from "react";
import { useSelector } from "react-redux";
import "../style/HomePage.css"

const HomePage = () => {

    const logindata = useSelector(state => state.login);

    return (
        <div>
            <div className="monitoring">
            <h1>username: {logindata.username}</h1>
            <h1>displayName: {logindata.displayName}</h1>
            <h1>isLoggedIn: {logindata.isLoggedIn.toString()}</h1>
            <h1>password: {logindata.password}</h1>
            </div>
        <h1>Home Page</h1>
        </div>
    );
    }
    
export default HomePage;