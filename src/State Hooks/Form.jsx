import React, { useState } from 'react'

function Form(){

    const [data,setData] = useState({name:"",email:""})
    const [name,setName]= useState("")
    const [email,setEmail] = useState("")
    const [submittedData,setSubmittedData] = useState({name:"",email:""})


    let state = {name:"nitesh",email:"nitesh"} // abc
    state.name = "naveen" // abc

    const newState = {...state} // abd
    function setState(alwaysNewData){


    }

    const handleChange = (e)=> {
        const {name,value} = e.target

        console.log(name,value)

        setData(prev=>(
            {
                ...prev,
                [name] : value
            }
        ))
    }


    
    console.log(data)


    function submit(e){
        e.preventDefault()
        // alert("form submitted")

        console.log(name,email,'on submit')


        const newUser = {...submittedData}
        newUser.name = name
        newUser.email = email

        setSubmittedData(newUser)



    }

  return (
    <div>
        <form onSubmit={submit} >

        <input name='name' type="text" placeholder='enter name' value={name} onChange={(e)=>setName(e.target.value)}/>

        <input name="email" type="email" placeholder='enter email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button type="submit" >Submit</button>
        </form>

       <h1>name - {submittedData.name}</h1>
       <h1>email - {submittedData.email}</h1>
    </div>
  )
}

export default Form