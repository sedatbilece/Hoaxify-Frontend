import React from "react";
import { useState ,useEffect} from "react";   
import { Link } from "react-router-dom";
import { getHoaxes } from "../api/apiCalls";
import defaultPic from "../assets/profile.png"
import {format } from "timeago.js";


const HoaxFeed = () => {

    const [hoaxList, setHoaxList] = useState([])
    const [last , setLast] = useState(false);
    const [pageNumber , setPageNumber] = useState(0);


    useEffect(() => {
        console.log("useEffect did mount")
        loadHoaxList();
    }, [])
  

    const loadHoaxList = async(page) => {
        try{
            const response = await getHoaxes(page);
            setHoaxList(prevdata => [...prevdata, ...response.data.content]);
            setLast(response.data.last);
            setPageNumber(response.data.number);
            console.log("hoax list:",hoaxList.length);
        }
        catch(error){
            console.log(error);
        }

    }

    if(hoaxList.length === 0){

        return (
            <div className=" m-10  border  text-slate-600 px-4 py-3 rounded relative bg-slate-300 text-center ">
                There are no hoaxes yet.
            </div>
        )
    }

    return (
        <div className="m-10">
            
            {hoaxList.map((hoax) => {
                return (
                    <div className="  border  px-4 py-3 rounded relative bg-slate-100 m-2    " >
                            <div className="flex datestamp">
                           
                                <div className="flex">
                                <img src={defaultPic} className="rounded-full w-8 h-18"></img>
                            <Link to={`/user/${hoax.username}`} className=" text-base text-blue-900 ml-4">
                                <b>{hoax.username} </b> 
                            </Link>
                                </div>
                            <span className=" text-sm ml-6"> 
                                {format(hoax.timestamp)}
                            </span>
                                </div>
                             
                        <div>
                        <p className="text-black text-base">
                            {hoax.content}
                        </p>
                            </div>
                    </div>
                )
             }) }
             {!last && <div className="w-full flex items-center ">
                <button className="border  px-3 py-3 rounded relative bg-slate-200 m-2 text-center active:bg-slate-300 active:scale-95"
                onClick={()=>{ loadHoaxList(pageNumber+1) }  }
                >
                    Load More
                </button>
                </div>
                }
            
            </div>
    )
    }



export default HoaxFeed;
