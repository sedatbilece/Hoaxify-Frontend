import React from "react";
import UserList from "../components/UserList";
import HoaxList from "../components/HoaxList";
import HoaxSubmit from "../components/HoaxSubmit";


const HomePage = (props) => {
    const { isLoggedIn } = props;
    return (
        <div class="grid grid-cols-2 gap-2 ">
            <div classname="hoaxlist  col-span-2" >
            {isLoggedIn && <HoaxSubmit />}
                </div>
            
       <div className=" ">
       <UserList />
       </div>
        
</div>
        
    );
    }
    
export default HomePage;