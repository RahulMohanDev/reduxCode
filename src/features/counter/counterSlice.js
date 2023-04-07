import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "rahul",
    initialState: {
        value: {
            test: "test",
            count: {
                value: 0,
            },
        },
    },
    reducers: {
        increment: (state) => {
            state.value.count.value += 1;
        },
        decrement: (state) => {
            state.value.count.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value.count.value += action.payload;
        }

    },
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// increment()
// {
    // type: "rahul/increment"
// }


// incrementByAmount(34)
// {
//  type: "rahul/incrementByAmount",
//  payload : 34
// }


export  default counterSlice.reducer;


export const thunkIncrement = (potato)=>{
    setTimeout(()=>{
        potato(increment())
    },3000)
}

export const thunkIncrementByValue = (value) =>{
    return (dispatch)=>{
        // {
        //  type: "rahul/incrementByAmount"
        //  type: value
        // }
       setTimeout(incrementByAmount(value),1000);
    }
};


// 1
// we need a function that returns a function 


// the returned function should be a thunk

// thunk (dispatcher) => {
//   wait 
//  dispatch
//
// }

//
// increment() {
//     return {
//         type: "counter/increment",   
//   }  

// const increment = {
//     type: "counter/increment",
// }

// const decrement = {
//     type: "counter/decrement",
// }

//const incrementByAmount = (amount) => ({ type: "counter/incrementByAmount", payload: 25 });


// const initialState = {
//     value: {
//             test: "test",
//             count: {
//                 value: 0,
//             },
//         },
// }

// const reducer =(action,state) => {
//     switch (action.type) {
//         case "counter/increment":
//             return { ...state, value: { ...state.value, count: { value: state.value.count.value + 1 } } };
//         case "counter/decrement":
//             return { ...state, value: { ...state.value, count: { value: state.value.count.value - 1 } } };
//         default:
//             return state;
//     }
// }