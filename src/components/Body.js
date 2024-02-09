import { createBrowserRouter } from "react-router-dom";
import React, { useEffect } from 'react'
import Browser from "./Browser";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/Firebase"
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/usersSlice";


const Body = () => {
const dispatch = useDispatch();
    const appRouter  = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        }
    ,
         {
            path:"/browser",
            element:<Browser/>
         }
    ])

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
        
          const {uid,email, displayname , photoURL} = user;
          dispatch(
            addUser({
              uid:uid,
              email:email,
              displayname:displayname,
              photoURL:photoURL}))
         
        } else {
          dispatch(removeUser());
        }
      });
      
    },[]);
  return (
    <div>
   <RouterProvider router={appRouter} /> 
    </div>
  )
}

export default Body