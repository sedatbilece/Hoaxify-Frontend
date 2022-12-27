import React from "react";
import "../style/HoaxSubmit.css"
import { useState ,useEffect } from "react";
import { postHoax } from "../api/apiCalls";
const HoaxSubmit = (props) => {

    const {LoggedInUsername} = props;
       const [focused, setFocused] = useState(false);
       const [hoax,setHoax] = useState(''); 
       const [error,setError] = useState(null);


        const sendHoax = async (hoax) => {
           console.log("Hoax sending ... : " + hoax);
              const body = {
                content: hoax,
                username:LoggedInUsername
              };
              try{
                const response = await postHoax(body);
                console.log(response);
                setFocused(false);
                setHoax('');
              }
                catch(error){
                    console.log(error);
                    setError(error.response.data.validationErrors.Hoax);
                    setHoax('');
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
                    <textarea rows={focused ? "7":"2"} 
                    value={hoax} 
                    onFocus={()=>setFocused(true)} 
                    onChange={(event)=>setHoax(event.target.value)}
                    className="hoaxText " placeholder="What's on your mind?"  />
                    {error && <div className="bg-red-100 border  text-red-700 px-4 py-3 rounded relative m-1">{error}</div>}
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
                        onClick={()=>{
                            setFocused(false);
                            setHoax('');
                            setError(null);
                        } }
                            >X</button>
                            </div>
                    )}
                  </form>
            </div>


        </div>
    );
}

export default HoaxSubmit;