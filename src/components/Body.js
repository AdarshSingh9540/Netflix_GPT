import { createBrowserRouter } from "react-router-dom";
import React from 'react'
import Browser from "./Browser";
import { RouterProvider } from "react-router-dom";
import Login from "./Login";



const Body = () => {

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

  return (
    <div>
   <RouterProvider router={appRouter} /> 
    </div>
  )
}

export default Body