import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const CouterRedux = () => {
    const state = useSelector(state=>state.counter.count)
    console.log("state is " , state)

    const increment = useDispatch()

    function handleClick(){
        increment({type : "INC"})
    }
  return (
    <div>
        <h2>count - {state}</h2>
        <button onClick={handleClick} >inc</button>

    </div>
  )
}

export default CouterRedux