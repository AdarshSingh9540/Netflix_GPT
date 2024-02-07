import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
import useReducer  from "./usersSlice";

const appStore = configureStore(
    {
        reducer:{
            user:useReducer
        }
    }
)

export default appStore;