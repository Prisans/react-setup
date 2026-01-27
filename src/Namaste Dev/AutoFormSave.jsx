import { useEffect, useState } from 'react';

function AutoSaveForm() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleClick = () => {
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    localStorage.removeItem("message")
  }

  const handleName = (e) => {
    setName(e.target.value)
    localStorage.setItem("name" , e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
    localStorage.setItem("email", e.target.value)
  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
    localStorage.setItem("message", e.target.value)
  }

  useEffect(() => {
    let dataName = localStorage.getItem("name")
    let dataEmail = localStorage.getItem("email")
    let dataMessage = localStorage.getItem("message")

    if ((dataName && dataEmail && dataMessage) !=null) {
      setName(dataName)
      setEmail(dataEmail)
      setMessage(dataMessage)
    }
  },[])

  return (
    <div>
      <h1>Auto Save Form</h1>

      <form className="form">
        <label>Name: </label>
        <input type="text" name="name" value={name} data-testid="form-input" onChange={handleName} />
        <br />
        <br />
        <label>Email: </label>
        <input type="email" name="email" value={email} data-testid="form-email" onChange={handleEmail} />

        <label>Message :</label>
        <textarea data-testid='form-message' value={message} onChange={handleMessage} ></textarea>

        <button data-testid='clear-btn' onClick={handleClick} >Clear</button>
      </form>
    </div>
  );
}

export default AutoSaveForm;
