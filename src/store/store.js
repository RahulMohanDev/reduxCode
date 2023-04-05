import { configureStore } from "@reduxjs/toolkit";
import {increment, incrementByAmount, test} from "../features/counter/counterSlice";

export const store = configureStore({
    reducer: {
        potato: test,
    },
});

store.dispatch(increment());

console.log(incrementByAmount(5));
// {
//     type: "payment/incrementByAmount",
//     payload: 5
// }
