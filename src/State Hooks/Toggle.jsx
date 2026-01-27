import React, { useState } from 'react'
import '../State Hooks/Toggle.css'

const Toggle = () => {

    const [light,setLight] = useState("light")

    function handleTheme(){
        setLight(prev=>prev==="light"?"dark":"light")
    }

  return (
    <div>
        <div className={light}>
            <button onClick={handleTheme} >Toggle</button>
        </div>
    </div>
  )
}

export default Toggle