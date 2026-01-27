import React, { useEffect, useState } from 'react'


const API_URL = "https://jsonplaceholder.typicode.com/users"
const FetchData = () => {
    const [data,setData] = useState([])
    const [inp,setInp] = useState("")

    const filterData = data.filter((item,index)=>{
        return (
            item.name.toLowerCase().includes(inp.toLowerCase())
        )
    })

    console.log(filterData)
    

    function fetchData(){
        fetch(API_URL)
        .then(res=>res.json())
        .then(item=>setData(item))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        fetchData()
    },[])

    console.log(data)

  return (
    <div>
        <input type="text" value={inp} placeholder='Search your data here...' onChange={(e)=>setInp(e.target.value)} />
        {
            filterData.map((items,index)=>{
                return (
                 <table>
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                    </thead>
                    <tbody>
                        <td>{items.name}</td>
                        <td>{items.email}</td>
                    </tbody>
                 </table>
                )
            })
        }
    </div>
  )
}

export default FetchData