import React, { useEffect, useState } from 'react'

const LuckyNumber = () => {
    const [input,setInput] = useState("")
    const [prime,setPrime] = useState(null)

    function checkPrime(num){
        if(num<=1) return false

        for(let i=2; i<=Math.sqrt(num); i++){
            if(num%i==0)return false
        }

        return true
    }

    function checkPrimeSum(data){
        console.log("entered")
        const arr = data.trim().split("")
        let sum = 0
        console.log(arr)

        arr.forEach(x=>{
            sum = sum + Number(x)
        })

        console.log(sum)

        // checkPrime(sum) === true? setPrime(false)  : setPrime(true)

        if(checkPrime(sum)){
            setPrime(true)
        }else{
            setPrime(false)
        }
    }

    function handleChange(e){
        setInput(e.target.value)
        checkPrimeSum(e.target.value)
    }

    // useEffect(()=>{
    //     checkPrimeSum()
    // },[input])

    console.log(input)
  return (
    <div>
        <h1>Lucky Number</h1>
        <p>A number is Lucky if the sum of its digits is a Prime Number</p>

        <input onChange={handleChange} value={input} type="number"  placeholder='enter lucky number here..'/>
        {prime === true && <p>Lucky Number</p>}
        {prime === false && <p>Not lucky Number</p>}
    </div>
  )
}

export default LuckyNumber