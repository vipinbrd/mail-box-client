import { createSlice } from "@reduxjs/toolkit";

export const DraftReducer=createSlice({
    name:"draft",
    initialState:[],
    reducers:{
        addToDraftBox(state,payload){
            return [...state,payload.payload];
        },
        replaceDraftBox(state,payload){
            return payload.payload;
        }
    }
})

export const {addToDraftBox,replaceDraftBox}=DraftReducer.actions