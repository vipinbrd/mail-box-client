import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Signup } from "../Signup";
import ErrorPage from "../ErrorPage";
import { Login } from "../Login";
import { AppLayout } from "../AppLayout";
import { ForgetPassword } from "../ForgetPassword";
import { Compose } from "../Compose";
import { Inbox } from "../Inbox";
import { useContext } from "react";
import { Authstore } from "../store/AuthProvider";
import { MailDetails } from "../MailDetails";
import { Trash } from "../Trash";
import { Sent } from "../Sent";
import { Draft } from "../Draft";
export function MainRouter(){ 
const {authInfo}=useContext(Authstore)
 const isloggedIn=Object.values(authInfo).length>0;


const router=createBrowserRouter([
 {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
        {
            index:true,
            element:(!isloggedIn?<Signup/>:<Inbox/>)

        },
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'forget',
            element:<ForgetPassword/>
        },
        {
            path:"compose",
            element:<Compose/>
        },
        {
            path:'inbox',
            element:<Inbox/>
        },
        {
            path:'mail/:mailId',
            element:<MailDetails/>

        },
        {
            path:'trash',
            element:<Trash/>
        },
        {
            path:'sent',
            element:<Sent/>
        },
        {
            path:'draft',
            element:<Draft/>
        }
        
    ]

 }

])

return <RouterProvider router={router}></RouterProvider>

}