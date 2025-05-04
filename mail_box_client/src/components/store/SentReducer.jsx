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
        }
    }
})

export const {addToSentBox,replaceSentBox}=SentReducer.actions