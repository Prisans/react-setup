import React, { useEffect, useState } from 'react'

const API_URL = "https://jsonplaceholder.typicode.com/users"
const TableData = () => {

    const [data,setData] = useState([])
    const [editCell,setEditCell] = useState(null)
    const [editValue,setEditValue] = useState("")

    async function fetchData(url){
        try{
            const response = await fetch(url)
            if(!response.ok){
                throw new Error("invalid url")
            }
            const items = await response.json()
            setData(items)

        }catch(error){
            console.log("error occured" , error)
        }
    }

    function handleEdit(id,field,value){
        setEditCell({id,field})
        setEditValue(value)
    }

    function handleSave(){
        const updatedData = data.map(row=>{
            if(row.id === editCell.id){
                console.log("enteredd")
                return {...row,[editCell.field] : editValue}
            }
            return row
        })

        console.log("came??")

        setData(updatedData)
        setEditCell(null)    
    }

    // console.log("data is",data)

    useEffect(()=>{
        fetchData(API_URL)
    },[])

  return (
    <div>
       <table cellPadding='8' border='1'>
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>phone</th>
            </tr>
        </thead>

       <tbody>
       {
        data.map(row=>(
            <tr key={row.id} >
                {["name","email","phone"].map(field=>(
                    <td key={field} onClick={()=>handleEdit(row.id , field , row[field] )} >
                        {editCell && editCell.id === row.id && editCell.field === field ? (
                            <>
                                <input value={editValue} onChange={(e)=>setEditValue(e.target.value)} type="text" placeholder='edit here...' />
                                <button onClick={handleSave} >save</button>
                            </>

                        ):
                        
                        (row[field])}
                    </td>
                ))}
            </tr>
        ))
       }
       </tbody>
       </table>
    </div>
  )
}

export default TableData