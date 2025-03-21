// import {configureStore} from '@reduxjs/toolkit';
// import CreateSlice from '../Feature/CounterSlice'
// export const store=configureStore({
//     reducer:{
//         Counter:CreateSlice
//     }
// })

import {configureStore} from '@reduxjs/toolkit'
import CounterSlice from '../Feature/CounterSlice'
export const store = configureStore({
    reducer:{
        counter:CounterSlice
    }
})