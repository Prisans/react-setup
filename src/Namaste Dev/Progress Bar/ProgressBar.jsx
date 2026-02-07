import React, { useState } from 'react'

const ProgressBar = () => {
    const [progress,setProgress] = useState(0)
  return (
    
        <div style={{
            "width"  : "100%",
            "height" : "100vh" ,
            "background" : "red",
            "display" : "flex",
            "justifyContent" : "center",
            "alignItems" : "center",
            "flexDirection" : "column",
            "textAlign" : "center"
        }}>
            <div style={{
                "background" : "grey" ,
                "textAlign" : "center",
                "width" : "90%",
                "height" : "5%",
                "overflow" : "hidden"
            }}>{progress}
            <div className="inside-bar" style={{"width" : `${progress}%` , "height" : "100%" , "background" : "blue"}} ></div>
            </div>
            <button onClick={()=>setProgress(prev=>prev+10)} disabled={progress>=100}>+10%</button>
            <button onClick={()=>setProgress(prev=>prev-10)} disabled={progress<=0}>-10%</button>
        </div>
  )
}

export default ProgressBar