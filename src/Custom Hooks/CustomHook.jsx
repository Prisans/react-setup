import React from 'react'
import { useCounter } from './useCounter'

const CustomHook = () => {
    const {count,increment,decrement} = useCounter()
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment} >Inc</button>
        <button onClick={decrement} >Dec</button>
    </div>
  )
}

export default CustomHook