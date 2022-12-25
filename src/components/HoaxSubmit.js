import React from "react";
import "../style/HoaxSubmit.css"

const HoaxSubmit = (props) => {
    return (
        <div className="conx">
            
            <div className="wrapper "> 
                  <form className="list card-shadow ">
                    <textarea className="hoaxText " placeholder="What's on your mind?" />
                    <button className="hoaxBtn shadow bg-cyan-300 hover:bg-cyan-400 focus:shadow-outline 
      focus:outline-none  text-white font-bold py-2 px-4 rounded">Hoax</button>
                  </form>
            </div>


        </div>
    );
}

export default HoaxSubmit;