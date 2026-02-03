import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Product = () => {

  const navigate = useNavigate()
  const data = [
    {id:1,title : "item1"},
    {id:2,title : "item2"},
    {id:3,title : "item3"}
  ]


  const handleParams = (id)=>{
    navigate(`/product/${id}`)
  }
  return (
    <div>
      {
        data.map((p)=>{
          return (
            <div>
              <Link to={`/product/${p.id}`}><li key={p.id} >{p.title}</li></Link>
            <p onClick={()=>handleParams(p.id)}>{p.title}para</p> 
              </div>

          )
        })
      }
      <button onClick={()=>navigate(1)}>front</button>
    </div>
  )
}

export default Product