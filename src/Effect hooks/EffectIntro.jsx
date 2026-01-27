import React, { useEffect, useState } from 'react'

const EffectIntro = () => {
    const [count,setCount] = useState(0)

    useEffect(()=>{
        console.log(count)
    },[count])

    // function handleClick(){
    //     setCount(prev=>prev+1)
    // }

  return (
    <div>
        <h1>count  - {count}</h1>
        <button onClick={()=>setCount(prev=>prev+1)} >Increase</button>
    </div>
  )
}

export default EffectIntro