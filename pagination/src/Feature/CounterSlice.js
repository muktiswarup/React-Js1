// import { createSlice } from "@reduxjs/toolkit";

// // Retrieve the stored counter value or default to 0
// const initialState = {
//     value: localStorage.getItem("counterValue")
//         ? JSON.parse(localStorage.getItem("counterValue"))
//         : 0
// };

// export const counterSlice = createSlice({
//     name: 'Counter',
//     initialState,
//     reducers: {
//         increment: (state) => {
//             state.value += 1;
//             localStorage.setItem("counterValue", JSON.stringify(state.value)); // Save to localStorage
//         },
//         decrement: (state) => {
//             state.value -= 1;
//             localStorage.setItem("counterValue", JSON.stringify(state.value)); // Save to localStorage
//         },
//         incrementByValue: (state, action) => {
//             state.value += action.payload;
//             localStorage.setItem("counterValue", JSON.stringify(state.value)); // Save to localStorage
//         }
//     }
// });

// export const { increment, decrement, incrementByValue } = counterSlice.actions;
// export default counterSlice.reducer;





/* 

Why We Used JSON.parse() and JSON.stringify()?
localStorage can only store strings, but our counter value is a number.
To handle this, we need to convert the number to a string when storing it and convert it back to a number when retrieving it.

Breakdown of JSON.stringify() and JSON.parse()
JSON.stringify(value) → Converts JavaScript data (number, object, array, etc.) into a string for storage.
JSON.parse(value) → Converts the stored string back into a JavaScript data type when retrieving.


Example Without JSON.stringify() and JSON.parse()
localStorage.setItem("counterValue", 10);
console.log(localStorage.getItem("counterValue")); // "10" (stored as string)
console.log(localStorage.getItem("counterValue") + 5); // "105" (string concatenation, not addition)
 Here, JavaScript treats "10" as a string and does string concatenation instead of numeric addition.

 Correct Way Using JSON.stringify() and JSON.parse()

localStorage.setItem("counterValue", JSON.stringify(10));
console.log(JSON.parse(localStorage.getItem("counterValue")) + 5); // 15 (correct numeric addition)
✅ JSON.stringify(10) ensures it is stored as "10".
✅ JSON.parse(localStorage.getItem("counterValue")) converts it back to 10 (number).

Can We Use "xyz" Instead of "counterValue"?
Yes! The key name "counterValue" is just an identifier for localStorage. You can name it anything, like "xyz".


*/


import { createSlice } from "@reduxjs/toolkit";

export const counterSlice= createSlice({
    name:"counter",
    initialState:{
        value:localStorage.getItem('item')?(JSON.parse(localStorage.getItem('item'))):0
    },
    reducers:{
        IncrementValue:(state)=>{
            state.value=state.value+1;
            JSON.stringify(localStorage.setItem('item',state.value))
        },
        DecrementVlaue:(state)=>{
            state.value=state.value-1;
            JSON.stringify(localStorage.setItem('item',state.value))
        },
        IncrementByValue:(state,action)=>{
            state.value=state.value+action.payload;
             JSON.stringify(localStorage.setItem('item',state.value))
        }
    }
})
export  const {IncrementValue,DecrementVlaue,IncrementByValue}=counterSlice.actions;
export default counterSlice.reducer;
