import React, { useReducer } from 'react'

const ReducerDemo = () => {

    const [count,dispatch] = useReducer(reducerFunction,0)

    function reducerFunction(state,action){
        if(action.type === "inc"){
            return state+1
        }

        if(action.type === "dec"){
            return state-1
        }

        return state
    }

  return (
    <div>
        count - {count}
        <button onClick={()=>dispatch({type :"inc"})} >Increase</button>
        <button onClick={()=>dispatch({type :"dec"})} >Decrease</button>
    </div>
  )
}

export default ReducerDemo