import { createSlice } from "@reduxjs/toolkit";

export const InboxReducer=createSlice({
    name:"inbox",
    initialState:[],
    reducers:{
        addToInbox(state,payload){
            return [...state,payload.payload];
        },
        replaceInbox(state,payload){
            return payload.payload;
        }
    }
})

export const {addToInbox,replaceInbox}=InboxReducer.actions