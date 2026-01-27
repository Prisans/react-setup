import React, { useContext } from 'react'
import ContextDemo from './ContextDemo'

const UseContext = () => {
    const {name,age} = useContext(ContextDemo)
  return (
    <div>
        name is -{name} <br />
        age is -{age}
    </div>
  )
}

export default UseContext