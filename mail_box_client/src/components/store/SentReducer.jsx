import { createSlice } from "@reduxjs/toolkit";

export const SentReducer=createSlice({
    name:"sent",
    initialState:[],
    reducers:{
        addToSentBox(state,payload){
            return [...state,payload.payload];
        },
        replaceSentBox(state,payload){
            return payload.payload;
        },
        deletefromSent(state,payload){
     
            return state.filter((ele)=>ele.id!==payload.payload)
        }
    }
})

export const {addToSentBox,replaceSentBox,deletefromSent}=SentReducer.actions