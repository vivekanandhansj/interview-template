import React, { useState } from 'react'


const UseStateIncrement = () => {
const [count, setCount] = useState(0);
const increment = ()=>{
    setCount(count+1)
};
let decrement = ()=>{
    setCount(count+1)
};
if(count<=0){
    decrement=()=>setCount(0)
}
 
  return (
    <div><button onClick={increment}>increment
    </button>
    <h1>{count}</h1>
    <button onClick={decrement}>decrement
    </button>
        </div>
  )
}

export default UseStateIncrement