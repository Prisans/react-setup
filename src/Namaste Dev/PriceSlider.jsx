import React, { useState } from 'react'
import './PriceSlider.css'

const PriceSlider = () => {
    const [price,setPrice] = useState({
        starting : 0,
        ending : 0,
        range : 0
    })

    function handleChange(e){

        setPrice(prev=>(
            {...prev,[e.target.name] : e.target.value}
        ))
    }

    function handleRange(e){
        console.log("range ",e.target.value)
        setPrice(prev=>(
            {...prev,starting : e.target.value}
        ))
    }

    console.log("starting is ",price.starting)
    console.log("ending is ",price.ending)

  return (
    <div>
        <h1>Price Selector</h1>

        <div className="slider-container">

            <div className="slider-content">
                <span className="slider-value">6700</span>
                <span className="slider-value">7900</span>
            </div>

            <div className="slider">

            <input name='starting' value={price.starting} onChange={handleChange} type="number" placeholder='starting' />

            <input name='ending' value={price.ending} onChange={handleChange} type="number" placeholder='ending' />

            <div className="track"></div>

            </div>
        </div>
      
        <input type="range" onChange={handleRange} name="setting" min="0" max="100"/>
    </div>
  )
}

export default PriceSlider