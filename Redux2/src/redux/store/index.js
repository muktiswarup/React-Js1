import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "../Counterslide";
export const store=configureStore({
    reducer:{
        Counters:counterSlice
    }
})