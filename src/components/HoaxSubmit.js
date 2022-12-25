import React from "react";
import "../style/HoaxSubmit.css"
import { useState } from "react";
const HoaxSubmit = (props) => {

       const [focused, setFocused] = useState(false);
       const [hoax,setHoax] = useState(''); 
    return (
        <div className="conx">
            
            <div className="wrapper "> 
                  <form className="list card-shadow ">
                    <textarea rows={focused ? "5":"2"}  
                    onFocus={()=>setFocused(true)} 
                    className="hoaxText " placeholder="What's on your mind?"  />
                    {focused && (
                        <div className="button-wrap">
                        <button className=" bg-cyan-400 hover:bg-cyan-500 focus:shadow-outline 
                        focus:outline-none  text-white ml-2 font-bold py-2 px-4 rounded">Hoax</button>
                        <button  type ="reset"  className="bg-red-400 hover:bg-red-500 focus:shadow-outline 
                        focus:outline-none  text-white  ml-2  font-bold py-2 px-3 rounded" 
                            >X</button>
                            </div>
                    )}
                  </form>
            </div>


        </div>
    );
}

export default HoaxSubmit;