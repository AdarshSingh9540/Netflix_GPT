import { configureStore } from "@reduxjs/toolkit";

import useReducer  from "./usersSlice";
import moviesReducer from "./moviesSlice"

const appStore = configureStore(
    {
        reducer:{
            user:useReducer,
            movies:moviesReducer
        }
    }
)

export default appStore;