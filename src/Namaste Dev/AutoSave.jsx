import React, { useEffect, useRef, useState } from 'react'

const AutoSave = () => {
    const [inputData,setInputData] = useState("")

    // const isRestored = useRef(false)

    useEffect(()=>{
        let data  = localStorage.getItem("key")
        if(data!=null){
            setInputData(data)
            // isRestored.current = true
        }
    },[])


    const handleInputChange = (e) => {
        setInputData(e.target.value)
        localStorage.setItem("key",e.target.value)
    }

    const handleClick = ()=>{
        setInputData("")
        localStorage.removeItem("key")
    }

  return (
    <div>
        <h1>Autosave</h1>
        Name : <input type="text" value={inputData} onChange={handleInputChange} />
        <button onClick={handleClick} >Clear</button>

    </div>
  )
}

export default AutoSave