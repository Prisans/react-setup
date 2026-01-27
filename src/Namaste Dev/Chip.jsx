import React, { useEffect, useState } from 'react'


const Chip = () => {

    const [inputVal,setInputVal] = useState("")
    const [chipArray,setChipArray] = useState([])

    function handleKeyDown(e){
        if(e.key==="Enter"){
            if(inputVal.length  && inputVal.trim().length != 0 ){
                setChipArray(prev=>[
                    ...prev,inputVal
                ])

                console.log("value is set")
            }
            
            setInputVal("")
        }
    }

    function handleClick(index){
        let ans = chipArray.filter((item,itemIndex)=>{
            return itemIndex !=index
        })

        setChipArray(ans)
    }

    useEffect(()=>{
        console.log(chipArray)
    },[chipArray])
  return (
    <div className='main-container'>
        <input type="text" value={inputVal} onChange={(e)=>setInputVal(e.target.value)} onKeyDown={handleKeyDown}/>
        {
             chipArray.map((item,index)=>{
                return (
                    <span key={index}>{item} <button onClick={()=>handleClick(index)} >X</button> </span>
                )
             })
        }
    </div>
  )
}

export default Chip