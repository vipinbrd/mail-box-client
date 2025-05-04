import { createSlice } from "@reduxjs/toolkit";

export const TrashReducer=createSlice({
    name:"trash",
    initialState:[],
    reducers:{
        addToTrashBox(state,payload){
            return [...state,payload.payload];
        },
        replaceTrashBox(state,payload){
            return payload.payload;
        },
        deletefromTrash(state,payload){
     
            return state.filter((ele)=>ele.id!==payload.payload)
        }
    }
})

export const {addToTrashBox,replaceTrashBox,deletefromTrash}=TrashReducer.actions