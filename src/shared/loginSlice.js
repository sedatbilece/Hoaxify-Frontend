import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isLoggedIn:false,
    username:"user1",
    displayName:"user1display",
    image:null,
    password:"Password12"
}



const loginSlice =  createSlice({
    name:"login",
    initialState:initialState,

    actions: {
        loginAuth:(state , action) =>{
            state.login.isLoggedIn =true;
            state.login.username=action.payload.username;
            state.login.password=action.payload.password;
        },
        


    }
})


export default  loginSlice.reducer;

export  const { loginAuth}= loginSlice.actions;
