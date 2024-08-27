import { INCR,DECR } from "./product.action"
let initialState={
    qty:1
}
let productReducer=(state=initialState,action)=>{

    switch(action.type){
         case 'INCR':
            return{}
         case 'DECR':
             return{}
         default:
            return state
            
    }
}
export {productReducer}