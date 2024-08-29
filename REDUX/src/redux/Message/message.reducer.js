import { GM,GN } from "./message.action";

const initialstate={
    msz:"Hello"
}
const messageReducer=(state=initialstate,action)=>{
    switch(action.type){
        case GM:
            return {msz:"Good Morning"}
        case GN:
            return {msz:"Good Night"}
        default:
            return state
    }
}
export {messageReducer};