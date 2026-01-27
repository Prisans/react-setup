import React, { useEffect, useState } from 'react'

const DataFetch = () => {
    const [user,setUser] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json())
        .then(data=>setUser(data))
        .catch(err=>console.log(err))
    },[])

  return (
    <div>
        {
            user.map(item=>(
                <li key={item.id}>Name - {item.name}
                age - {item.age}</li>
            ))
        }
    </div>
  )
}

export default DataFetch