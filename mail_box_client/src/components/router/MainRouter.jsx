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
            element:!isloggedIn?<Signup/>:<Compose/>
        },
        {
            path:'inbox',
            element:!isloggedIn?<Signup/>:<Inbox/>
        },
        {
            path:'mail/:mailId',
            element:!isloggedIn?<Signup/>:<MailDetails/>

        },
        {
            path:'trash',
            element:!isloggedIn?<Signup/>:<Trash/>
        },
        {
            path:'sent',
            element:!isloggedIn?<Signup/>:<Sent/>
        },
        {
            path:'draft',
            element:!isloggedIn?<Signup/>:<Draft/>
        }
        
    ]

 }

])

return <RouterProvider router={router}></RouterProvider>

}