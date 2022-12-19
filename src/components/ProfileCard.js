import React from "react";
import "../style/ProfileCard.css"
import defaultPic from "../assets/profile.png"

const ProfileCard = (props) => {

    const {user,LoggedInUsername} = props;
    const {username,displayName,image} = user;
    let message="user cannot edit this profile";
    if(LoggedInUsername===user.username){
        message="user can edit this profile";
    }

    let imageSource = defaultPic;
    if (image) {
        imageSource = image;
    }

    return (
        <>
        <p>{message}</p>
        <hr></hr>
        <div className=" w-[300px] ">
            <div className=" ProfCard">
                <div className="">
                    <img src={imageSource} alt="profile" className="rounded-circle rounded-full" width="100" height="100" />
                   
                    
                </div>
                <div className=" mt-4 ml-6">
                <h4 className="mt-3"><b>{displayName}</b></h4>
                    <p>@{username}</p>
                  
                </div>
            </div>
        </div>
        </>
    );
}

export default ProfileCard;