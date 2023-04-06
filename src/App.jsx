import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './features/counter/counter.component'
import { Provider } from 'react-redux'
import store from './store/coutner'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  )
}

export default App



// import React, { createContext, useState, useContext } from 'react';

// const MyContext = createContext();

// function ParentComponent() {
//   const [count, setCount] = useState({
//     count: 0,
//     payment: 200,
//   });
//   const value = { count, setCount };

//   return (
//     <MyContext.Provider value={value}>
//       <ChildComponent />
//       <GrandChildComponent />
//     </MyContext.Provider>
//   );
// }

// function ChildComponent() {
//   const { count } = useContext(MyContext);

//   return (
//     <div>
//       <h2>Child Component</h2>
//       <p>Count: {count.count}</p>
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