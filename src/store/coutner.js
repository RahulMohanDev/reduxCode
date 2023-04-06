import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/counter/counterSlice";


const obj = configureStore({
    reducer: {
        potato: countReducer,
    },
});

console.dir(obj.dispatch);

obj.dispatch({ type: "rahul/increment" });

export default obj;


import React, { createContext, useState, useContext } from 'react';

const MyContext = createContext();

// function ParentComponent() {
//   const [state, setState] = useState({
//     count: 0,
//     payment: 200,
//   });
  

//   return (
//     <MyContext.Provider value={{ state, setState }}>
//       <ChildComponent />
//       <paymentComponent/>
//       <GrandChildComponent />
//     </MyContext.Provider>
//   );
// }

// function paymentComponent() {
//     const { state } = useContext(MyContext);
    
//     return (
//         <div>
//         <h2>Child Component</h2>
//         <p>payment: {state.payment}</p>
//         <button onClick={()=>{
//             state.setState((state)=>({...state, payment: state.payment + 1}))
//         }}></button>
//         </div>
//     );
// }

// function ChildComponent() {
//   const { state } = useContext(MyContext);

//   return (
//     <div>
//       <h2>Child Component</h2>
//       <p>Count: {state.count}</p>
//       <GreatGrandChildComponent />
//     </div>
//   );
// }

// function GreatGrandChildComponent() {
//   return (
//     <div>
//       <h4>Great Grandchild Component</h4>
//       <p>Some content</p>
//     </div>
//   );
// }

// function GrandChildComponent() {
//   const [text, setText] = useState('');

//   return (
//     <div>
//       <h3>Grandchild Component</h3>
//       <input value={text} onChange={(e) => setText(e.target.value)} />
//     </div>
//   );
// }

