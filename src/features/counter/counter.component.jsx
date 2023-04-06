import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment, incrementByAmount } from "./counterSlice";

export default function Counter() {
  // const [count, setCount] = useState(0)
  // count => state value from store
  const count = useSelector(state => state.potato.value.count.value);
  const dispatch = useDispatch();
  // setCount => with diapatch 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByAmount(15))}>Increment by 15</button>
    </div>
  )
}