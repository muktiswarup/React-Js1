/* import { GM,GN } from "./message.action" 
let initialState={
    msz:"Hello"
}
let messageReducer=(state=initialState,action)=>{

    switch(action.type){
        case GM:
            return {msz:"Good Morning"}
        case GN:
            return {msz:"Good Night"}
        default:
            return state
    }
}
export {messageReducer} */


import { GM, GN } from "./message.action";

let initialState = {
    msz: "Hello"
};

let messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case GM:
            return { msz: "Good Morning" };
        case GN:
            return { msz: "Good Night" };
        default:
            return state;
    }
};

export { messageReducer };

