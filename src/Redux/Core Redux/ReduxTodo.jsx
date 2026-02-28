import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ReduxTodo = () => {
  const [inp, setInp] = useState("");
  const items = useSelector((state) => state.todo.items);
  const dispactch = useDispatch();
  
  // console.log(state)
  console.log("todo is -", items);

  function handleClick() {
    dispactch({ type: "ADD", payload: inp });
    setInp("")
  }

  function handleDelete(id){
    // const newData = items.filter((item,index)=>id!=index)
    // console.log("new data",newData)
    dispactch({type : "DELETE" , payload : id})
  }
  return (
    <div>
      <input
        type="text"
        placeholder="enter todo.."
        value={inp}
        onChange={(e) => setInp(e.target.value)}
      />
      <button onClick={handleClick}>Add</button>
      

      {items.map((item,index) => {
        return <li>item is - {item} <button onClick={()=>handleDelete(index)} >Delete</button></li>;
      })}
    </div>
  );
};

export default ReduxTodo;
