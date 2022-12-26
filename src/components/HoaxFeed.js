import React from "react";
import { useState ,useEffect} from "react";   
import { getHoaxes } from "../api/apiCalls";

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
                    <div className="  border  px-4 py-3 rounded relative bg-slate-100 m-2 text-center" >

                        <p className="text-black text-base">
                            {hoax.content}
                        </p>
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
