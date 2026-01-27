import React, { useCallback, useState } from 'react'
import ReactMemoChild from './ReactMemoChild'
import ExploreChild from './ExploreChild'

const ReactMemo = () => {
    const [count,setCount] = useState(0)
    // const [text,setText] = useState("")

    const handleClick = useCallback(()=>{
        console.log("clickeddd")
    },[])

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(prev=>prev+1)}>Inc</button>
        <ReactMemoChild onClick={{user:"Prisans"}} />
        {/* <ExploreChild /> */}


        <input onChange={(e)=>setText(e.target.value)}/>
    </div>
  )
}

export default ReactMemo