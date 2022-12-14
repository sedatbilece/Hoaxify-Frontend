import React from "react";
import "../style/ProfileCard.css"
import defaultPic from "../assets/profile.png"
import { useState ,useEffect} from "react";
import Input from "./Input";
import { updateUser } from "../api/apiCalls";
const ProfileCard = (props) => {

    const {user,LoggedInUsername,editable,setUser} = props;
    const {username,displayName,image} = user;

    const [inEditMode,setInEditMode] = useState(false);
    const [updatedDisplayName,setUpdatedDisplayName] = useState(displayName);
    const [newImage,setNewImage] = useState(null);
    const [validationError,setValidationError] = useState({});
    useEffect(() => {
        setUpdatedDisplayName(displayName);
    }, [displayName])

    

    let imageSource = defaultPic;
    if(newImage){
        imageSource = newImage;
    }
    if (image) {
        imageSource = image;
    }


    const onChangeFile = (event) => {
        const file = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            setNewImage(fileReader.result);
        }
        fileReader.readAsDataURL(file);
    }


    const updateDisplayName = async() => {
        const body = {
            displayName: updatedDisplayName,
            image:newImage
        }
         try{
            await  updateUser(username,body);
            setInEditMode(false);
            setUser({
                ...user,
                displayName:updatedDisplayName
            })
            setValidationError({});
         }
         catch(error){
                setValidationError(error.response.data.validationErrors);
         }   
         setUpdatedDisplayName(null);
         setNewImage(null);
         
    }


    return (
        <>
        
        <div className=" w-2/3 ">
            <div className=" ProfCard">
                <div className="">
                    <img src={imageSource} alt="profile" className="rounded-circle rounded-full" width="100px" height="100px" />
                </div>
                
                <div className=" mt-4 ml-6">
                <h4 className="mt-3"><b>{displayName}</b></h4>
                    <p>@{username}</p>
                  
                </div>
            </div>
            {editable &&(
                <>
                {!inEditMode && 
                    (
                        <div>
                        <button className="btn w-24 bg-green-500 active:bg-green-600 text-white " onClick={()=> setInEditMode(true)}> 
                        <svg class="svg-icon inline-block mr-3  " viewBox="0 0 20 20" width="30px" fill="white">
                                    <path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
                                </svg>
                                Edit
                        </button>
        
                    </div>
                    )}
                    {inEditMode && (
                        <div className="mt-2 contan ">
                            <form>
                           <Input
                            label="Change Display Name"
                            placeholder="Your display name"
                            value={updatedDisplayName}
                            onChanged={(e) => {
                                setUpdatedDisplayName(e.target.value);
                            }}
                            />
                            {validationError && validationError.displayName && (
                                <div className="bg-red-100 border  text-red-700 px-4 py-3 rounded relative m-1">
                                    {validationError.displayName}
                                </div>
                            )}
                            <input type="file" className="mt-2" onChange={onChangeFile} />
                            <button type="submit" className="btn bg-green-500 text-white" onClick={()=>updateDisplayName()} >Save</button>
                            <button  type ="reset"  className="btn bg-red-500 text-white" 
                            onClick={()=> {
                                setInEditMode(false);
                                setNewImage(null);
                            }}>Cancel</button>
                            </form>
                        </div>
                    )}
                    </>
            )}
        </div>
        </>
    );
}

export default ProfileCard;