import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../countslice/countslice";

export const store=configureStore({
    reducer:{
        Counter:counterSlice
    }
})