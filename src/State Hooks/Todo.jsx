import React, { useState } from 'react'

const Todo = () => {

    const [todo, setTodo] = useState("")
    const [todoList,setTodoList] = useState([])

    function handleTodo(){
        if(!todo.trim()) return 

        const newItem = {
            id : Date.now(),
            text : todo
        }

        setTodoList((prev)=>[...prev,newItem])

        console.log(setTodoList.length)
        console.log(setTodoList)

        setTodo("")
    }

    function handleDelete(id){
        setTodoList(todoList.filter(data=>data.id!==id))
    }

    function handleClear(){
        setTodoList([])
    }

  return (
    <div>
        <input type="text" placeholder='Enter your text' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <h1>
            {
                todoList.map((data)=>(
                    <li key={data.id} >{data.text}
                    <button onClick={()=>handleDelete(data.id)} >DEL</button>
                    </li>
                    
                ))
            }
        </h1>
        <button onClick={handleTodo} >Add todo</button>
        <button onClick={handleClear}>CLEAR</button>
    </div>
  )
}

export default Todo