import React,{useRef} from 'react'


const Ref = () => {
    const ref = useRef(null)
    ref.current = "hii"
    console.log("ref is- ",ref.current)
  return (
    <input type="text" />
  )
}

export default Ref