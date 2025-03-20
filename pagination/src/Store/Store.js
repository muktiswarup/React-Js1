import {configureStore} from '@reduxjs/toolkit';
import CreateSlice from '../Feature/CounterSlice'
export const store=configureStore({
    reducer:{
        Counter:CreateSlice
    }
})