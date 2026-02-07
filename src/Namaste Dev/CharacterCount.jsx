import React, { useState } from 'react'

const CharacterCount = () => {
    const [inpData,setInpData]=useState("")
    const [inpDataLen,setInpDataLen] = useState(0)
    const [maxLen,setMaxLen] = useState(0)
    const [warning,setWarning] = useState(false)

    function handleChange(e){
        setInpData(e.target.value)
        setInpDataLen(e.target.value.length)
        e.target.value.length >= maxLen ? setWarning(true) : setWarning(false)
    }
    // console.log("inp data is" , inpData)
  return (
    <div>
        <h1>Character Count</h1>
        <p>track your input length</p>
        <label>Max limit <input onChange={(e)=>setMaxLen(e.target.value)} value={maxLen} type="text" min="0" max="1000" /></label>
        <p>{`${inpDataLen} / ${maxLen}`}</p>
        <textarea value={inpData} onChange={handleChange} name="" id="" cols="30" rows="10" placeholder='enter here...'></textarea>
        {warning && <p>Count limit exceeded</p>}
    </div>

  )
}

export default CharacterCount