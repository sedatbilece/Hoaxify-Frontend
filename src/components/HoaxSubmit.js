import React from "react";
import "../style/HoaxSubmit.css"
import { useState ,useEffect } from "react";
import { postHoax } from "../api/apiCalls";
const HoaxSubmit = (props) => {

       const [focused, setFocused] = useState(false);
       const [hoax,setHoax] = useState(''); 


        const sendHoax = async (hoax) => {
           console.log("Hoax sending ... : " + hoax);
              const body = {
                content: hoax
              };
              try{
                const response = await postHoax(body);
                console.log(response);
              }
                catch(error){
                    console.log(error);
                    }
                    
        };

      
         useEffect(() => {
            if(hoax.length === 0){
                setFocused(false);
            }
            if(hoax.length !== 0){
                setFocused(true);
            }
            console.log(hoax);
        }, [hoax]);

    return (
        <div className="conx">
            
            <div className="wrapper "> 
                  <form className="list card-shadow ">
                    <textarea rows={focused ? "5":"2"}  
                    onFocus={()=>setFocused(true)} 
                    onChange={(event)=>setHoax(event.target.value)}
                    className="hoaxText " placeholder="What's on your mind?"  />
                    {focused && (
                        <div className="button-wrap">
                        <button className=" bg-cyan-400 hover:bg-cyan-500 focus:shadow-outline 
                        focus:outline-none  text-white ml-2 font-bold py-2 px-4 rounded"
                        onClick={(e)=>{
                            e.preventDefault();
                            sendHoax(hoax)}}
                        >Hoax</button>
                        <button  type ="reset"  className="bg-red-400 hover:bg-red-500 focus:shadow-outline 
                        focus:outline-none  text-white  ml-2  font-bold py-2 px-3 rounded " 
                        onClick={()=>setHoax('') }
                            >X</button>
                            </div>
                    )}
                  </form>
            </div>


        </div>
    );
}

export default HoaxSubmit;