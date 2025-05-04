import { createContext, useState } from "react";

export const Authstore=createContext([]);


export function AuthProvider(props){
    const userData=JSON.parse(localStorage.getItem("userInfo"))||[]
    const[authInfo,setAuthInfo]=useState(userData);

    return  <Authstore.Provider value={{authInfo,setAuthInfo}}>{props.children}</Authstore.Provider>

}