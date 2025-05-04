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
        },
        deletefromDraft(state,payload){
     
            return state.filter((ele)=>ele.id!==payload.payload)
        }
    }
})

export const {addToDraftBox,replaceDraftBox,deletefromDraft}=DraftReducer.actions