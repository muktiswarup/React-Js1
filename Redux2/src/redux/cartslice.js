import { createSlice } from "@reduxjs/toolkit";


export const cartSlice= createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalPrice:0
    },
    reducer: {
        addtocart :(state,action)=>{
            newitems=action.payload,
            state.items.push(newitems),
            state.totalPrice +=newitems.price
        },
        clearcart :(state)=>{
            state.items=[],
            state.totalPrice=0
        }
    }
})
export const selectitems=(state)=>state.cart.items
export const selectcarttotalprice=(state)=>state.cart.totalPrice
export const {addtocart,clearcart}=cartSlice.actions
export default cartSlice.reducer
