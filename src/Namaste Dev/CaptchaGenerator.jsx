import React, { useEffect, useState } from 'react'

const CaptchaGenerator = () => {
    const [captcha,setCaptcha] = useState("")
    const [randomText,setRandomText] = useState("")
    const [correct,setCorrect] = useState(null)

    function handleGenerate(){
        let length = 6

        let chars = "abcdefghijklmnopqrstuvwxyz0123456789"
        let res = ""

        for(let i=0; i<length; i++){
            res = res + chars.charAt(Math.floor(Math.random()*chars.length))
        }
        setRandomText(res)
        setCorrect(null)
        
    }

    function handleCaptchaSubmit(){
        randomText.toLowerCase() === captcha.toLowerCase() ? setCorrect(true) : setCorrect(false)
        setCaptcha("")
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    useEffect(()=>{
        handleGenerate()
    },[])

  
  return (
    <div>
        <h1>Captcha Generator</h1>
        <h2>Your captcha  - {randomText} </h2>
        <form onSubmit={handleSubmit}>
            <input value={captcha} onChange={(e)=>setCaptcha(e.target.value)}  type="text" placeholder='enter captcha...'/>
            <button onClick={handleCaptchaSubmit} >Submit</button>
            <button onClick={handleGenerate} >Regenreate</button>
        </form>
        {correct === null ? "" : correct === true ? (<p>Correct Captcha</p>) : (<p>Incorrect Captcha</p>) }
    </div>
  )
}

export default CaptchaGenerator