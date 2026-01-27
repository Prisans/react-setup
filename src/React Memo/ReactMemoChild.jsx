import React, { useState } from 'react'

const ReactMemoChild = React.memo(({onClick}) => {
    console.log("child render")
    const [num,setNum] = useState(0)
    console.log(num)
  return (
    <div>
        <button onClick={()=>setNum(prev=>prev+1)}>{num}</button>
        <button onClick={onClick} >Child Render</button>
    </div>
  )
})

export default ReactMemoChild