import React, { Component, useState } from 'react'
import './counterfunction.css'

  const Counterfunction = () => {

  const [count, setCount] = useState(0) // (userState(0) ne cookie kevay...)  

  const Increment = () => {
      setCount(count + 1)
  }

  const Decrement = () => {
      setCount(count - 1)
  }

  const Reset = () => {
    let count = 0;
    setCount(count = count)
  }


    return (
      <div className='app'>
        <div className='counter'>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        {
          count == 0 
          ? (
            <button disabled onClick={() => Decrement()}>-</button>
          )
          : (
            <button onClick={() => Decrement()}>-</button>
          )
        }

        <button onClick={() => Reset()}> Reset </button>
    
        <button onClick={() => Increment()}>+</button>
        
      </div>
      </div>
    )

}

export default Counterfunction
