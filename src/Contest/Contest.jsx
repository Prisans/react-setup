import React, { useState } from 'react'
import '../Contest/Contest.css'                   

const Contest = ({value}) => {

    // const [show,setShow] = useState("data")
    const [toggle,setToggle] = useState(true)

    function handleToggle(){
        console.log("clickedd")
        //method 1
        // setShow(show==="data"?"opaque" : "data")
        //method 2

        if(toggle){
            // setShow("opaque")
            setToggle(false)
        }else{
            // setShow("data")
            setToggle(true)
        }
    }
  return (
    <div className="contest-app">
        <button onClick={handleToggle}>Toggle</button>
        {toggle && <p >{
            value.map((item,index)=>{
                return (
                    <li key={index} >
                        name - {item.name}
                        description - {item.description}

                    </li>
                )
            })
        }</p>}
    </div>
  )
}

export default Contest