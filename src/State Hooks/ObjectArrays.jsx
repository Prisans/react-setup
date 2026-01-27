import React, { useState } from 'react'
import '../State Hooks/ObjectArrays.css'

const ObjectArrays = () => {

    const [data,setData] = useState([
        { id: 1, text: "Learn React hooks", done: false },
        { id: 2, text: "Practice useState", done: true },
        { id: 3, text: "Revise JS basics", done: false }
      ])

    const [theme,setTheme] = useState("red")
    

    function handleClick(id){
        setData(prev=>
        prev.map(item=>{
            return (
                item.id === id ? {...item, done:!item.done} : item
            )
        }))
    }


  return (
    <div>
        {
            data.map(item=>{
                return (
                    <p key={item.id} onClick={()=>handleClick(item.id)} className={item.done ? "green" : "red"} >
                        id - {item.id}
                        text - {item.text}
                        done - {item.done.toString()}
                    </p>
                )
            })
        }
    </div>
  )
}

export default ObjectArrays