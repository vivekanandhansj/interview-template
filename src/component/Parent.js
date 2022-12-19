import React from 'react'
import Child from "./Child"

const Parent = () => {
    const data=[{name:"vivek",roll:1},{name:"vino",roll:2},{name:"sathiya",roll:3}]
  return (
    <>{data.map((e)=>
      <Child props={e} id={e.roll}/>
      )}</>
  )
}

export default Parent