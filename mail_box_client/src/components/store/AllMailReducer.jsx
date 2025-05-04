import { createSlice } from "@reduxjs/toolkit";

export const AllMailReducer=createSlice({
 name:'allMail',
 initialState:[],
 reducers:{
    addMessage(state,payload){
     return [...state,payload.payload]
    },
    replaceMessages(state,payload){
        return payload.payload;
    }

 }

})
export const {addMessage,replaceMessages}=AllMailReducer.actions