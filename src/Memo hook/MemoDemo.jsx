import React, { useMemo, useState } from 'react'

const MemoDemo = () => {
    const [count,setCount] = useState(0)
    const [text,setText] = useState("")

    const double = useMemo(()=>{
        console.log("calculation")
        return count*2
    },[count])

  return (
    <div>
        count - {count}
        double - {double}
        <button onClick={()=>setCount(count+1)} >inc</button>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />

    </div>
  )
}

export default MemoDemo