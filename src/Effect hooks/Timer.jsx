import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [second,setSecond] = useState(0)
    useEffect(()=>{
        const id = setInterval(()=>{
            setSecond(prev=>prev+1)
        },1000)

        return ()=>{
            clearInterval(id)
        }
    },[])
  return (
    <div>
        <h2>{second}</h2>
    </div>
  )
}

export default Timer