

import React, { useState } from 'react'

const Counter = () => {
    let [num,setNum] = useState(10)
    let handlIncrement = ()=>{
        setNum(num*2)
    }
    let handlDecrement = ()=>{
        setNum(num/2)
    }

  return (
    <div>
      
      <h1>{num}</h1>
      <button onClick={handlIncrement}>Increment</button>
      <button onClick={handlDecrement}>Decrement</button>
    </div>
  )
}

export default Counter

