import React, { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'


const ProductPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    console.log(params)
    async function fet(){
        let res = await fetch("url/params.id")
    }
    useEffect(()=>{
        fet()
    },[])
  return (
    <>
    <div>ProductPage{params.id}</div>
    <button onClick={()=>navigate(-1)}>back</button>
    </>

  )
}

export default ProductPage