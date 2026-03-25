import React from 'react'
import './Cinema.css'
import { useState } from 'react'

const CinemaHall = () => {
    const [selectedSeats,setSelectedSeats] = useState([])
    const [bookedSeats,setBookedSeats] = useState([])
    const hallTicket = []

    function generateSeats(){
        let row = 10;
        let ch = 65;
    
        for(let i=0;i<row;i++){
          let arr = [];
    
          for(let j=0;j<row;j++){
            arr.push(String.fromCharCode(ch)+j);
          }
    
          ch++;
          hallTicket.push(arr);
        }
      }

    function handleClick(seat){
        if(bookedSeats.includes(seat)) return

        if(!selectedSeats.includes(seat)){
            setSelectedSeats(prev=>(
                [...prev,seat]
            ))
        }else{
            const newArr = selectedSeats.filter(s=>s!=seat)
            setSelectedSeats(newArr)
        }
    }

    function handleBook(){
        setBookedSeats(prev=>(
            [...prev,...selectedSeats]
        ))
        selectedSeats([])
    }

    function handleClear(){
        setSelectedSeats([])
    }

    function handleReset(){
        setBookedSeats([])
        setSelectedSeats([])
    }

      generateSeats()
  return (
    <div>
        <h1>Cinema Hall</h1>
        <button onClick={handleBook} >Book</button>
        <button onClick={handleClear} >Clear</button>
        <button onClick={handleReset}>Reset</button>

        {
            hallTicket.map((item,row)=>{
                return (
                    <div key={row} className='upper'>{
                        item.map((seat,col)=>{
                            const isSelected = selectedSeats.includes(seat) 
                            const isBooked = bookedSeats.includes(seat)
                            return (
                                <div key={seat} onClick={()=>handleClick(seat)} className={

                                    `lower
                                    
                                    ${isSelected ? "selected" : ""} || ${isBooked ? "booked" : ""}
                                    
                                    `
                                    

                                } >{seat}</div>
                            )
                        })
                    }</div>
                )
            })
        }
    </div>
  )
}

export default CinemaHall