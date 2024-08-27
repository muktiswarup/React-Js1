//create action
//create action type
let INCR='INCR'
let DECR='DECR'
let incAction=()=>{
    return {type:INCR}
}
let decAction=()=>{
    return {type:DECR}
}
export {incAction,decAction,INCR,DECR}