import React, { useState } from 'react'

const SearchBar = () => {


    const [query,setQuery] = useState("")

    const [data,setData] = useState([
        "Aman","Ravi","Shivam" , "Prisans", "Ankit",
        "Rahul",
        "Suman"
    ])

    const filterData = data.filter(item=>{
       return item.toLowerCase().includes(query.toLowerCase())
    })
  return (
    <div>
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} />
        <ul>

        {
            filterData.map((item,index)=>{
                return (
                    <li key={index}>{item}</li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default SearchBar