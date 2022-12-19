import { useState } from "react";

const UseState = () => {
const [count, setCount] = useState(0);

const increment=()=>{
  setCount(count+1)
  console.log(count+1)
}
 let decrement=()=>{
  setCount(count-1)
 } 
    if(count<=0){

      decrement=()=>setCount(0)
    }
  return (
    <div> 
<h1>my count is {count}</h1>
<button onClick={increment}>+</button>
<button onClick={decrement}>-</button>
   </div>
  )
}

export default UseState