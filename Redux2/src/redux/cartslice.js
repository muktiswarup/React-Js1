import { createSlice } from "@reduxjs/toolkit";


export const cartSlice= createSlice({
    name:'cart',     // create slice make a list called cart
    initialState:{    // sets the list empty at the begining
        items:[],
        totalPrice:0
    },
    reducers: {        // reducers are like how to change the list
        addtocart :(state,action)=>{
            const newitems=action.payload;
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
