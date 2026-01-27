import React, { useState } from 'react'

const Pagination = ({data}) => {
    const [currentPage,setCurrentPage] = useState(1)
    const itemsPerPage = 5
    const numOfPages = Math.ceil(data.length/itemsPerPage)
    const startIndex = (currentPage-1) * itemsPerPage
    const lastIndex = startIndex+itemsPerPage

    const filterData = data.slice(startIndex,lastIndex)

  return (
    <div>Show now!!
        {
            filterData.map((item,index)=>{
                return (
                    <li key={index} >{item}</li>
                )
            })
        }
        <p>current page - {currentPage}</p>
        <button disabled={currentPage>=2} onClick={()=>setCurrentPage(prev=>prev+1)} >Next page</button>
        <button disabled={currentPage<=1} onClick={()=>setCurrentPage(prev=>prev-1)} >Prev page</button>


    </div>

  )
}

export default Pagination