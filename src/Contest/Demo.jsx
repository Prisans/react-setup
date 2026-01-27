import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // setTimeout(() => {
    //   setCount((prev) => prev + 1);
    // }, 1000);
    setCount(prev=>prev+1)
    
    console.log("First value : ", count);
    
    // setTimeout(() => {
        //   setCount((prev) => prev + 1);
        // }, 2000);
        
    setCount(prev=>prev+1)
    console.log("second value : ", count);
  }

//   useEffect(()=>{
//     console.log("Real count->" , count)
//   },[count])

  return (
    <div>
      {count}

      <button onClick={handleClick}>Inc</button>
    </div>
  );
}

export default App;
