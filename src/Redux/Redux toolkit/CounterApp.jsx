import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement } from './counterSlice'

const CounterApp = () => {
    const dispatch = useDispatch()
    const count = useSelector(state=>state.counter.count)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  ) 
}

export default CounterApp